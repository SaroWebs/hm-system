import AdminLayout from '@/Layouts/AdminLayout';

interface HomeProps {
    auth: any
}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <AdminLayout title='Dashboard' {...props}>
            <div className="py-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-semibold">Wards</h3>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold">Total</p>
                                <p className="text-2xl font-bold">20</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Available</p>
                                <p className="text-2xl font-bold">10</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-semibold">Beds</h3>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold">Total</p>
                                <p className="text-2xl font-bold">500</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Occupied</p>
                                <p className="text-2xl font-bold">300</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Unoccupied</p>
                                <p className="text-2xl font-bold">200</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-semibold">Doctors</h3>
                        <p className="text-2xl font-bold">50</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-lg font-semibold">Nurses</h3>
                        <p className="text-2xl font-bold">100</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Home;
