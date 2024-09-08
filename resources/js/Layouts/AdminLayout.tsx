import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, Bell, Search, User } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import menuItems from '../lib/menuItems';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';

interface AdminLayoutProps {
    children: React.ReactNode;
    breadcrumbs: Array<{ label: string; href?: string }>;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, breadcrumbs }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-between h-16 px-6 bg-primary text-white">
                    <Link href="/" className="text-xl font-bold">Admin Dashboard</Link>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <nav className="mt-5 px-3">
                    {menuItems.map((item) => (
                        <MenuItem key={item.path} item={item} />
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <header className="bg-white shadow-sm z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <button onClick={() => setSidebarOpen(true)} className="lg:hidden px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                                    <Menu className="h-6 w-6" />
                                </button>
                                <div className="flex-shrink-0 flex items-center">
                                    {/* You can add a logo here if needed */}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="search"
                                            placeholder="Search..."
                                            className="pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                        <Bell className="h-6 w-6" />
                                    </button>
                                    <div className="ml-3 relative">
                                        <div>
                                            <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                                <span className="sr-only">Open user menu</span>
                                                <User className="h-8 w-8 rounded-full" />
                                            </button>
                                        </div>
                                        {/* Add user dropdown menu here if needed */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main content area */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map((crumb, index) => (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem>
                                            {crumb.href ? (
                                                <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                                            ) : (
                                                <span>{crumb.label}</span>
                                            )}
                                        </BreadcrumbItem>
                                        {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                                    </React.Fragment>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="mt-6">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

interface MenuItemProps {
    item: typeof menuItems[0];
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;

    return (
        <div className="pb-4">
            <Link
                href={item.path}
                className="flex items-center py-2 text-lg font-semibold"
                onClick={() => item.children && setIsOpen(!isOpen)}
            >
                <IconComponent className="mr-2 h-4 w-4" />
                {item.title}
                {item.children && (
                    <LucideIcons.ChevronDown className={`ml-auto h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                )}
            </Link>
            {item.children && isOpen && (
                <div className="mt-2 space-y-1 pl-6">
                    {item.children.map((child) => (
                        <MenuItem key={child.path} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminLayout;
