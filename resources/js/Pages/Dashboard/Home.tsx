import AdminLayout from '@/Layouts/AdminLayout';

interface HomeProps {
    auth: any
}

interface WizCardProps {
    title?: string;
    number?: string;
    color?: string;
    children: React.ReactNode;
}

const WizCard: React.FC<WizCardProps> = ({ title = 'card Title', number = '00',color='blue', children }) => {
    return (
        <div className="bg-white border rounded shadow-md relative overflow-hidden">
            <div className="bg-num absolute top-0 right-0 p-2">
                <span className='text-7xl text-slate-200 font-bold'>{number}</span>
            </div>
            <div className={`p-4 h-full relative z-10 bg-${color}-800/30 overflow-hidden`}>
                <h4 className="text-4xl font-bold text-red-400 uppercase">{title}</h4>
                {children}
            </div>
        </div>
    );
};

const Home: React.FC<HomeProps> = (props) => {
    const wizList = [
        {
            title: 'Wards',
            total: '123',
            available: '30',
            color:'green'
        },
        {
            title: 'Beds',
            total: '900',
            available: '348',
            color:'red'
        }
    ];
    return (
        <AdminLayout title='Dashboard' {...props}>
            <div className="py-4">
                <div className="grid grid-cols-2 gap-4">
                    {wizList.length > 0 && wizList.map(item => (
                        <WizCard number={item.available} title={item.title} color={item.color}>
                            <div>
                                <p className="text-lg font-semibold">Total : <span>{item.total}</span></p>
                                <p className="text-lg font-semibold">Available : <span>{item.available}</span></p>
                            </div>
                        </WizCard>
                    ))}
                    
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
