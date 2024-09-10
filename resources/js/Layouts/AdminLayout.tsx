import Layout from "@/layout";
import ParentLayout from "@/layout/parent-layout";
import { FC } from "react";

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
    return <ParentLayout>{children}</ParentLayout>;
};

export default AdminLayout;
