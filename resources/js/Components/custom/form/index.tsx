import { FC } from "react";

import { FormItem } from "@/types";
import FlatList from "@/Components/custom/flatlist";
import { Separator } from "@/Components/ui/separator";
import CustomFormField from "@/Components/custom/form-field";
import { Control } from "react-hook-form";

interface CustomFormProps {
    formItems: FormItem[];
    control: Control<any>;
    isLoading?: boolean;
}

const CustomForm: FC<CustomFormProps> = ({ formItems, control, isLoading }) => {
    const renderFormItem = (item: FormItem) => {
        if ("fields" in item) {
            return (
                <div className="col-span-full space-y-4 mt-6">
                    <div className="flex items-center gap-2">
                        <Separator
                            orientation="vertical"
                            className="h-6 w-1 bg-primary"
                        />
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FlatList
                            data={item.fields}
                            keyExtractor={(field) => field.name}
                            renderItem={(field) => (
                                <CustomFormField
                                    disabled={isLoading}
                                    control={control}
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <CustomFormField
                    disabled={isLoading}
                    control={control}
                    {...item}
                />
            );
        }
    };

    return (
        <>
            <FlatList
                data={formItems}
                keyExtractor={(item) => item.name}
                renderItem={renderFormItem}
            />
        </>
    );
};

export default CustomForm;
