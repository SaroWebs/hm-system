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

const WizCard: React.FC<WizCardProps> = ({ title = 'card Title', number = '00', color = 'blue', children }) => {
    return (
        <div className="bg-white border rounded shadow-md hover:shadow-lg relative overflow-hidden">
            <div className="bg-num absolute top-0 right-0 p-2">
                <span className='text-7xl text-slate-200 font-bold'>{number}</span>
            </div>
            <div className={`p-4 h-full relative z-10 bg-${color}-800/30 overflow-hidden`}>
                <h4 className={`text-3xl font-semibold text-${color}-800`}>{title}</h4>
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
            number: '30',
            color: 'blue'
        },
        {
            title: 'Beds',
            total: '900',
            available: '348',
            number: '348',
            color: 'red'
        },
        {
            title: 'Doctors',
            number: '50+',
            color: 'teal'
        },
        {
            title: 'Nurses',
            number: '450+',
            color: 'orange'
        }
    ];
    return (
        <AdminLayout title='Dashboard' {...props}>
            <div className="py-4">
                <div className="grid grid-cols-2 gap-4">
                    {wizList.length > 0 && wizList.map(item => (
                        <WizCard key={item.title} number={item.number} title={item.title} color={item.color}>
                            <div>
                                {item.total ?
                                    (<p className="text-lg font-semibold">Total : <span>{item.total}</span></p>)
                                    : ''}
                                {item.available ?
                                    (<p className="text-lg font-semibold">Available : <span>{item.available}</span></p>)
                                    : (<p className="text-lg font-semibold">Total : <span>{item.number}</span></p>)
                                }
                            </div>
                        </WizCard>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Home;
