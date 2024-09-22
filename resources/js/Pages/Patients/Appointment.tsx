import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

interface AppointmentProps {
    auth: any;
}

const Appointment: FC<AppointmentProps> = (props) => {
    return (
        <AdminLayout title="Appointment" {...props}>
            Appointment
        </AdminLayout>
    );
};

export default Appointment;
