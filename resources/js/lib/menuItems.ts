import { LucideIcon } from 'lucide-react';

interface MenuItem {
    title: string;
    path: string;
    icon: string; // Change this to string
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: 'LayoutDashboard',
    },
    {
        title: 'Patients',
        path: '/patients',
        icon: 'Users',
        children: [
            { title: 'All Patients', path: '/patients', icon: 'List' },
            { title: 'Add Patient', path: '/patients/add', icon: 'UserPlus' },
        ],
    },
    {
        title: 'Appointments',
        path: '/appointments',
        icon: 'Calendar',
        children: [
            { title: 'All Appointments', path: '/appointments', icon: 'List' },
            { title: 'Schedule Appointment', path: '/appointments/schedule', icon: 'CalendarPlus' },
        ],
    },
    {
        title: 'Doctors',
        path: '/doctors',
        icon: 'Stethoscope',
        children: [
            { title: 'All Doctors', path: '/doctors', icon: 'List' },
            { title: 'Add Doctor', path: '/doctors/add', icon: 'UserPlus' },
        ],
    },
    {
        title: 'Departments',
        path: '/departments',
        icon: 'Building2',
    },
    {
        title: 'Billing',
        path: '/billing',
        icon: 'Receipt',
        children: [
            { title: 'Invoices', path: '/billing/invoices', icon: 'FileText' },
            { title: 'Payments', path: '/billing/payments', icon: 'CreditCard' },
        ],
    },
    {
        title: 'Inventory',
        path: '/inventory',
        icon: 'Package',
        children: [
            { title: 'Medicines', path: '/inventory/medicines', icon: 'Pill' },
            { title: 'Equipment', path: '/inventory/equipment', icon: 'Stethoscope' },
        ],
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: 'BarChart2',
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: 'Settings',
    },
];

export default menuItems;
