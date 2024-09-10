import { PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import Layout from "@/layout";

export default function Test({}: PageProps) {
    const breadcrumbs = [{ label: "Dashboard", href: "/" }, { label: "Test" }];

    return (
        <AdminLayout>
            <Layout title="Test" className="container">
                <div className="">Test Page</div>
            </Layout>
        </AdminLayout>
    );
}
