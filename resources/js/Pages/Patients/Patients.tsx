import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

interface PatientsProps {
    auth: any;
}

const Patients: FC<PatientsProps> = (props) => {
    return (
        <AdminLayout title="Patients" {...props}>
            Patients
        </AdminLayout>
    );
};

export default Patients;
