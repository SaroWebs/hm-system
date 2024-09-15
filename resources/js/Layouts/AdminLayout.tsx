import ParentLayout from "@/layout/parent-layout";
import { FC } from "react";

interface AdminLayoutProps {
    auth: any; // Added auth property
    children: React.ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = (props) => {
    return <ParentLayout {...props}>{props.children}</ParentLayout>;
};

export default AdminLayout;
