import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

interface AdmissionProps {
    auth: any;
}

const Admission: FC<AdmissionProps> = (props) => {
    return (
        <AdminLayout title="Admission" {...props}>
            Admission
        </AdminLayout>
    );
};

export default Admission;
