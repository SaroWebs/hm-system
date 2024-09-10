// import { useRouter } from "next/navigation";
import { Icons } from "@/Components/Icons";
import { ModeToggle } from "./mode-toggle";
import { Refetch } from "./refetch";
import { SheetMenu } from "./sheet-menu";
import { UserNav } from "./user-nav";
import { Button } from "@/Components/custom/button";
import { router } from "@inertiajs/react";

interface NavbarProps {
    title: string;
    back?: boolean;
}

const Header = ({ title, back }: NavbarProps) => {
    return (
        <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
            <div className="mx-4 sm:mx-8 flex h-14 items-center">
                <div className="flex items-center space-x-4">
                    <SheetMenu />

                    {back && (
                        <Button
                            size="icon"
                            onClick={() => window.history.back()}
                            leftIcon={<Icons.ArrowLeftIcon />}
                        />
                    )}

                    <h1 className="font-bold">{title}</h1>
                </div>
                <div className="flex flex-1 items-center space-x-2 justify-end">
                    <Refetch />
                    {/* <ModeToggle /> */}
                    <UserNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
