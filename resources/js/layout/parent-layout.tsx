"use client";

import { cn } from "@/lib/utils";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Stores from "@/lib/stores";

const ParentLayout = (props: { auth: any; children: React.ReactNode; }) => {
    const { auth, children } = props;
    const {
        isSidebarOpen: isOpen,
        setIsSidebarOpen: setIsOpen,
        isSidebarOpenLoading: isLoading,
    } = Stores();

    if (isLoading) return null;

    return (
        <>
            <Sidebar />
            <main
                className={cn(
                    "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
                    isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
                {children}
            </main>
            <footer
                className={cn(
                    "transition-[margin-left] ease-in-out duration-300",
                    isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
                <Footer />
            </footer>
        </>
    );
};

export default ParentLayout;
