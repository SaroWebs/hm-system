import {
    BellRing,
    Clock8,
    Eye,
    FileIcon,
    Fingerprint,
    Globe,
    IndianRupee,
    LayoutGrid,
    LucideIcon,
    MicroscopeIcon,
    Network,
    Plus,
    Settings,
    SquareGanttChart,
    Users,
    Users2,
} from "lucide-react";

type Submenu = {
    href: string;
    label: string;
    icon: LucideIcon;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
    return [
        {
            groupLabel: "Dashboard",
            menus: [
                {
                    href: "/dashboard",
                    label: "Dashboard",
                    active: pathname.includes("/dashboard"),
                    icon: LayoutGrid,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Patient Management",
            menus: [
                {
                    href: "#",
                    label: "Patients",
                    active: pathname === "/patients",
                    icon: Users,
                    submenus: [
                        {
                            href: "/patients/new",
                            label: "Patient Admission",
                            icon: Plus,
                            active: pathname === "/patients/new",
                        },
                        {
                            href: "/patients",
                            label: "View All",
                            icon: Eye,
                            active: pathname === "/patients",
                        },
                        {
                            href: "/patients/appointment",
                            label: "Appointments",
                            active: pathname === "/patients/appointment",
                            icon: Users2,
                        },
                    ],
                },
                {
                    href: "/records",
                    label: "Medical Records",
                    active: pathname.includes("/records"),
                    icon: FileIcon,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Financial Management",
            menus: [
                {
                    href: "/financial/records",
                    label: "Financial Records",
                    active: pathname === "/financial/records",
                    icon: IndianRupee,
                    submenus: [],
                },
                {
                    href: "/billing/records",
                    label: "Billing Records",
                    active: pathname === "/billing/records",
                    icon: IndianRupee,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Laboratory & Diagnostics",
            menus: [
                {
                    href: "/labs",
                    label: "Lab & Diagnostics",
                    active: pathname.includes("/labs"),
                    icon: MicroscopeIcon,
                    submenus: [
                        {
                            href: "/labs/results",
                            label: "View Lab Results",
                            icon: Eye,
                            active: pathname === "/labs/results",
                        },
                        {
                            href: "/labs/request",
                            label: "Request Lab Test",
                            icon: Plus,
                            active: pathname === "/labs/request",
                        },
                    ],
                },
            ],
        },
        {
            groupLabel: "Reports",
            menus: [
                {
                    href: "/reports",
                    label: "Reports",
                    active: pathname.includes("/reports"),
                    icon: SquareGanttChart,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Account Management",
            menus: [
                {
                    href: "/account-management",
                    label: "Account Management",
                    active: pathname.includes("/account-management"),
                    icon: Fingerprint,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Settings",
            menus: [
                {
                    href: "/users",
                    label: "User Management",
                    active: pathname.includes("/users"),
                    icon: Users,
                    submenus: [],
                },
                {
                    href: "/accounts",
                    label: "Account Settings",
                    active: pathname.includes("/accounts"),
                    icon: Settings,
                    submenus: [],
                },
                {
                    href: "/settings/role-management",
                    label: "Role Management",
                    active: pathname === "/settings/role-management",
                    icon: Network,
                    submenus: [],
                },
                {
                    href: "/settings/website-management",
                    label: "Website Management",
                    active: pathname === "/settings/website-management",
                    icon: Globe,
                    submenus: [],
                },
                {
                    href: "/time-table-management",
                    label: "Time Table Management",
                    active: pathname === "/time-table-management",
                    icon: Clock8,
                    submenus: [],
                },
                {
                    href: "/notifications",
                    label: "Notifications and SMS",
                    active: pathname === "/notifications",
                    icon: BellRing,
                    submenus: [],
                },
            ],
        },
    ];
}
