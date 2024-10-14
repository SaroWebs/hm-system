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
    const [patients, setPatients] = useState({ data: [], total: 0 });
    const [filters, setFilters] = useState({
        page: 1,
        per_page: 50,
        sort_by: 'created_at',
        sort: 'desc',
        search:''
    });

    const loadData = async () => {
        try {
            const response = await axios.get('/api/patients', { params: filters });
            setPatients({ 
                data: response.data.data, 
                total: response.data.total,
            });
        } catch (error) {
            console.error("Error loading patients data:", error);
        }
    }

    const handlePageChange = (newPage: number) => {
        setFilters({ ...filters, page: newPage });
        loadData();
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
                                        <TableHead className="min-w-[100px]">Name</TableHead>
                                        <TableHead className="">DOB</TableHead>
                                        <TableHead className="">Gen</TableHead>
                                        <TableHead className="min-w-[150px]">Emerg. Contact</TableHead>
                                        <TableHead className="min-w-[120px]">Emerg. Phone</TableHead>
                                        <TableHead className="min-w-[150px]">Ins. Provider</TableHead>
                                        <TableHead className="">Email</TableHead>
                                        <TableHead className="">Phone</TableHead>
                                        <TableHead className="min-w-[180px]">Addr.</TableHead>
                                        <TableHead className="min-w-[100px]">Action</TableHead>
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
                                            <TableCell>
                                                <div className="">Buttons</div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        {/* pagination */}
                        <div className="flex justify-end items-center mt-4">
                            <button 
                                onClick={() => handlePageChange(filters.page - 1)} disabled={filters.page === 1} 
                                className="mr-2"
                            >
                                Previous
                            </button>
                            <span className="mr-2">Page {filters.page}</span>
                            <button 
                                onClick={() => handlePageChange(filters.page + 1)} 
                                disabled={patients.data.length < filters.per_page}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Patients;
