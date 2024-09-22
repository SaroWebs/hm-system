import { Icon } from "@/Components/Icons";
import { Control } from "react-hook-form";

interface CustomFormFieldProps {
    control?: Control<any>;
    component: FormFieldComponent;
    type: FormFieldType;
    name: string;
    label?: string;
    placeholder?: string;
    leftIcon?: Icon;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    maxLength?: number;
    fileUrl?: string;
    uploadFolderName?: string;
    options?: {
        label: string;
        value: string;
    }[];
    selectOptions?: SelectOptions;
    renderSkeleton?: (field: unknown) => React.ReactNode;
    children?: React.ReactNode;
}

interface FormSection {
    name: string;
    fields: CustomFormFieldProps[];
}

type FormItem = CustomFormFieldProps | FormSection;
