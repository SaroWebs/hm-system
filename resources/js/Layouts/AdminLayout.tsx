import Header from "@/layout/header";
import ParentLayout from "@/layout/parent-layout";
import { FC } from "react";

interface AdminLayoutProps {
    auth: any;
    children: React.ReactNode;
    title: string;
}

const AdminLayout: FC<AdminLayoutProps> = (props) => {
    const {title}=props;
    return (
        <ParentLayout {...props}>
            <Header title={title} back={false}/>
            <div className="p-4">
                {props.children}
            </div>
        </ParentLayout>
    );
};

export default AdminLayout;
