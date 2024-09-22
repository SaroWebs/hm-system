import { FC } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

import { Textarea } from "@/Components/ui/textarea";
import { Checkbox } from "@/Components/ui/checkbox";
import { Calendar } from "@/Components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import {
    MultiSelector,
    MultiSelectorContent,
    MultiSelectorInput,
    MultiSelectorItem,
    MultiSelectorList,
    MultiSelectorTrigger,
} from "@/Components/custom/multi-select";
import FileUploader from "@/Components/custom/file-uploader";
import { Icons } from "@/Components/Icons";
import { CustomFormFieldProps } from "@/types";
import { Button } from "@/Components/custom/button";
import CustomDrawer from "@/Components/custom/drawer";
import { format } from "util";

const RenderField = ({
    field,
    props,
}: {
    field: any;
    props: CustomFormFieldProps;
}) => {
    const {
        name,
        label,
        component,
        type,
        leftIcon,
        placeholder,
        maxLength,
        renderSkeleton,
        options,
        disabled,
        selectOptions,
    } = props;

    const IconComponent = leftIcon ? Icons[leftIcon] : null;

    switch (component) {
        case "input":
            return (
                <FormControl>
                    <div className="relative flex items-center rounded-md">
                        <div className="absolute left-2 pr-2 border-r text-primary">
                            {leftIcon && IconComponent && <IconComponent />}
                        </div>
                        <Input
                            placeholder={placeholder}
                            type={type}
                            maxLength={
                                type === "tel" ? maxLength || 10 : undefined
                            }
                            className={cn("w-full", { "pl-14": leftIcon })}
                            disabled={disabled}
                            {...field}
                        />
                    </div>
                </FormControl>
            );

        case "datePicker":
            return (
                <Popover>
                    <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                                className="flex h-9 w-full justify-start rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                variant={"outline"}
                                type="button"
                                disabled={disabled}
                            >
                                <div className="left-2 pr-2 border-r text-primary">
                                    {leftIcon && IconComponent ? (
                                        <IconComponent />
                                    ) : (
                                        <Icons.CalendarIcon />
                                    )}
                                </div>
                                {field.value ? (
                                    <div className="pl-4">
                                        {format(field.value, "dd/MM/yyyy")}
                                    </div>
                                ) : (
                                    <div className="pl-4 text-muted-foreground">
                                        {placeholder}
                                    </div>
                                )}
                            </Button>
                        </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            title="Date"
                            captionLayout="dropdown"
                            className="w-full"
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            fromYear={1900}
                            toYear={2100}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            );

        case "select":
            return (
                <FormControl>
                    <>
                        <Select
                            disabled={disabled}
                            onValueChange={field.onChange}
                            value={field.value}
                        >
                            <FormControl>
                                <div className="relative items-center rounded-md border hidden  md:flex">
                                    <div className="absolute left-2 pr-2 border-r text-primary hidden md:block">
                                        {leftIcon && IconComponent && (
                                            <IconComponent />
                                        )}
                                    </div>
                                    <div className="ml-12 w-full">
                                        <SelectTrigger
                                            className={cn(
                                                "hidden md:flex h-9 w-full rounded-md  outline-none  bg-transparent px-3 py-1 text-sm  transition-colors placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-0 ring-offset-0",
                                                {
                                                    flex: selectOptions?.isOnlySelect,
                                                    "hidden md:hidden":
                                                        selectOptions?.isOnlyDrawer,
                                                }
                                            )}
                                        >
                                            <SelectValue
                                                placeholder={placeholder}
                                            />
                                        </SelectTrigger>
                                    </div>
                                </div>
                            </FormControl>
                            <SelectContent>
                                {options &&
                                    options?.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>

                        <CustomDrawer
                            title={placeholder!}
                            options={options}
                            value={field.value}
                            onValueChange={field.onChange}
                            className={cn("md:hidden", {
                                hidden: selectOptions?.isOnlySelect,
                                "md:flex": selectOptions?.isOnlyDrawer,
                            })}
                        />
                    </>
                </FormControl>
            );

        case "multiSelect":
            return (
                <FormControl>
                    <div className="relative flex items-center border border-border rounded-md">
                        <div className="absolute left-2 pr-2 border-r border-border text-primary">
                            {leftIcon && IconComponent ? (
                                <IconComponent />
                            ) : (
                                <Icons.StudentNameIcon />
                            )}
                        </div>

                        <MultiSelector
                            onValuesChange={field.onChange}
                            values={field.value || []}
                        >
                            <MultiSelectorTrigger className="pl-12 bg-transparent  h-10 overflow-y-scroll">
                                <MultiSelectorInput
                                    placeholder={
                                        field.value && field.value.length
                                            ? ""
                                            : placeholder
                                    }
                                />
                            </MultiSelectorTrigger>
                            <MultiSelectorContent>
                                <MultiSelectorList>
                                    {options &&
                                        options?.map((option) => (
                                            <MultiSelectorItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MultiSelectorItem>
                                        ))}
                                </MultiSelectorList>
                            </MultiSelectorContent>
                        </MultiSelector>
                    </div>
                </FormControl>
            );
        case "textarea":
            return (
                <FormControl>
                    <Textarea
                        className="min-h-9 h-9"
                        placeholder={placeholder}
                        {...field}
                        disabled={disabled}
                    />
                </FormControl>
            );

        case "checkbox":
            return (
                <FormControl>
                    <div className="flex items-center gap-4">
                        <Checkbox
                            disabled={disabled}
                            id={name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                        <Label
                            htmlFor={name}
                            className="cursor-pointer text-sm font-medium text-dark-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:leading-none"
                        >
                            {label}
                        </Label>
                    </div>
                </FormControl>
            );

        case "file":
            return (
                <FormControl>
                    <FileUploader
                        disabled={disabled}
                        files={field.value}
                        onChange={field.onChange}
                        url={props.fileUrl}
                        uploadFolderName={props.uploadFolderName || ""}
                        placeholder={placeholder}
                    />
                </FormControl>
            );

        case "skeleton":
            return renderSkeleton ? renderSkeleton(field) : null;
        case "hidden":
            return null;
        default:
            break;
    }
};

const CustomFormField: FC<CustomFormFieldProps> = (props) => {
    const { control, component, name, label } = props;

    if (component === "hidden") {
        return null;
    }

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("flex-1")}>
                    {component !== "checkbox" && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <RenderField field={field} props={props} />
                    <FormMessage className="text-destructive" />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;
