import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

interface PatientsProps {
    auth: any;
}

const Patients: FC<PatientsProps> = (props) => {
    const [patients, setPatients] = useState({ data: [], total: 0 }); // Update initial state to include total
    const [filters, setFilters] = useState({
        page: 1,
        per_page: 50,
        sort_by: 'created_at',
        sort: 'desc'
    });

    const loadData = async () => {
        try {
            const response = await axios.get('/api/patients', { params: filters });
            setPatients({ data: response.data.data, total: response.data.total }); // Update state to include total
        } catch (error) {
            console.error("Error loading patients data:", error);
        }
    }

    const handlePageChange = (newPage: number) => {
        setFilters({ ...filters, page: newPage }); // Update filters with new page
        loadData(); // Reload data
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        console.log(patients);
    }, [patients]);

    return (
        <AdminLayout title="Patients" {...props}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="w-full">
                            <Table>
                                <TableCaption>
                                    Patients List
                                </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-1/5">Name</TableHead>
                                        <TableHead className="w-1/5">DOB</TableHead>
                                        <TableHead className="w-1/10">Gen</TableHead>
                                        <TableHead className="w-1/5">Emerg. Contact</TableHead>
                                        <TableHead className="w-1/5">Emerg. Phone</TableHead>
                                        <TableHead className="w-1/5">Ins. Provider</TableHead>
                                        <TableHead className="w-1/5">Email</TableHead>
                                        <TableHead className="w-1/10">Phone</TableHead>
                                        <TableHead className="w-1/5">Addr.</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {patients.data.map((patient: any) => (
                                        <TableRow key={patient.id}>
                                            <TableCell>
                                                {patient.first_name + ' ' + patient.last_name}
                                            </TableCell>
                                            <TableCell>
                                                {patient.date_of_birth}
                                            </TableCell>
                                            <TableCell>
                                                {patient.gender}
                                            </TableCell>
                                            <TableCell>
                                                {patient.emergency_contact_name}
                                            </TableCell>
                                            <TableCell>
                                                {patient.emergency_contact_number}
                                            </TableCell>
                                            <TableCell>
                                                {patient.insurance_provider}
                                            </TableCell>
                                            <TableCell>
                                                {patient.email}
                                            </TableCell>
                                            <TableCell>
                                                {patient.contact_number}
                                            </TableCell>
                                            <TableCell>
                                                {patient.address}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add pagination controls (example) */}
            <div className="flex justify-center items-center mt-4">
                <button onClick={() => handlePageChange(filters.page - 1)} disabled={filters.page === 1} className="mr-2">Previous</button>
                <span className="mr-2">Page {filters.page}</span>
                <button onClick={() => handlePageChange(filters.page + 1)} disabled={patients.data.length < filters.per_page}>Next</button>
            </div>
        </AdminLayout>
    );
};

export default Patients;
