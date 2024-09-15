import AdminLayout from '@/Layouts/AdminLayout';

interface HomeProps {
    auth:any
}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <AdminLayout {...props}>
            <div className="">Test Page</div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Home;
