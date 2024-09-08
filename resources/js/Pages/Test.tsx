import { PageProps } from "@/types"
import AdminLayout from "@/Layouts/AdminLayout"

export default function Test({}: PageProps) {
    const breadcrumbs = [
        { label: "Dashboard", href: "/" },
        { label: "Test" }
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <div className="">
                Test Page
            </div>
        </AdminLayout>        
    )
}
