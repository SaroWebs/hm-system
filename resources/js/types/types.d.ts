type StoreContextType = {
    [key: string]: unknown;
};

type SelectOptions = {
    isOnlyDrawer?: boolean;
    isOnlySelect?: boolean;
    isDrawerFullwidth?: boolean;
};

type FormFieldComponent =
    | "input"
    | "textarea"
    | "checkbox"
    | "datePicker"
    | "select"
    | "multiSelect"
    | "file"
    | "skeleton"
    | "button"
    | "hidden";

type FormFieldType =
    | "text"
    | "number"
    | "tel"
    | "email"
    | "select"
    | "date"
    | "password"
    | "file"
    | "submit"
    | "button"
    | "skeleton";

type ValidationTypeProps =
    | "string"
    | "number"
    | "email"
    | "url"
    | "uuid"
    | "bigint"
    | "boolean"
    | "trim"
    | "toLowerCase"
    | "toUpperCase"
    | "date"
    | "symbol"
    | "array"
    | "object"
    | "undefined"
    | "null"
    | "void"
    | "any"
    | "unknown"
    | "never"
    | "custom";

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

type PageProps<T extends Record<string, unknown> = Record<string, unknown>> =
    T & {
        auth: {
            user: User;
        };
    };
