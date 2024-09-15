import { PageProps } from "@/types";
import Layout from "@/layout";
import ParentLayout from "@/layout/parent-layout";

export default function Test(props: PageProps) {
    const breadcrumbs = [{ label: "Dashboard", href: "/" }, { label: "Test" }];

    return (
        <ParentLayout {...props}>
            <Layout title="Test" className="container">
                <div className="">Test Page</div>
            </Layout>
        </ParentLayout>
    );
}
