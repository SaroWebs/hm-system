import {
	BarChartHorizontal,
	BellRing,
	ClipboardCheck,
	Clock8,
	DollarSign,
	DoorOpen,
	Eye,
	FileIcon,
	Fingerprint,
	Globe,
	GraduationCapIcon,
	Hash,
	IndianRupee,
	IndianRupeeIcon,
	LampDesk,
	LayoutGrid,
	LucideIcon,
	Megaphone,
	MicroscopeIcon,
	Network,
	NotebookPen,
	PencilRuler,
	Plus,
	ReceiptEuro,
	School,
	ScrollText,
	Settings,
	Settings2,
	SquareGanttChart,
	SquareUser,
	StethoscopeIcon,
	Users,
	UsersRound,
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
			groupLabel: "",
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
			groupLabel: "Menu",
			menus: [
				{
					href: "",
					label: "Patient Management",
					active: pathname === "/patients" || pathname === "/patient/admission",
					icon: Users,
					submenus: [
						{
							href: "/patients",
							label: "Patients",
							icon: Eye,
							active: pathname === "/patients",
						},
						{
							href: "/patient/admission",
							label: "Admission",
							icon: Plus,
							active: pathname === "/patient/admission",
						},
					],
				},
				{
					href: "",
					label: "Appointments",
					active: pathname === "/appointments" || pathname === "/appointment/new",
					icon: Users,
					submenus: [
						{
							href: "/appointments",
							label: "Appointments",
							icon: Eye,
							active: pathname === "/appointments",
						},
						{
							href: "/appointment/new",
							label: "New Appointment",
							icon: Plus,
							active: pathname === "/appointment/new",
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
				{
					href: "",
					label: "Financial",
					active: pathname.includes("/financial"),
					icon: IndianRupee,
					submenus: [
						{
							href: "/financial/records",
							label: "Financial Records",
							icon: Eye,
							active: pathname === "/financial/records",
						},
						{
							href: "/billing/records",
							label: "Billing Records",
							icon: Eye,
							active: pathname === "/billing/records",
						},
					],
				},
				{
					href: "/reports",
					label: "Reports",
					active: pathname.includes("/reports"),
					icon: SquareGanttChart,
					submenus: [],
				},
				{
					href: "/account-management",
					label: "Account Management",
					active: pathname.includes("/account-management"),
					icon: Fingerprint,
					submenus: [],
				},
				{
					href: "/labs",
					label: "Lab & Diagnostics",
					active: pathname.includes("/labs"),
					icon: MicroscopeIcon,
					submenus: [],
				},
				// {
				//   href: "",
				//   label: "Settings",
				//   active: pathname.includes("/posts"),
				//   icon: SquarePen,
				//   submenus: [
				//     {
				//       href: "/posts",
				//       label: "School Creation",
				//       active: pathname === "/posts",
				//     },
				//     {
				//       href: "/posts/new",
				//       label: "Roll Management",
				//       active: pathname === "/posts/new",
				//     },
				//     {
				//       href: "/posts/new",
				//       label: "Website Management",
				//       active: pathname === "/posts/new",
				//     },
				//     {
				//       href: "/posts/new",
				//       label: "Time Table (Class - Teacher)",
				//       active: pathname === "/posts/new",
				//     },
				//     {
				//       href: "/posts/new",
				//       label: "Notifications and SMS",
				//       active: pathname === "/posts/new",
				//     },
				//   ],
				// },
			],
		},

		{
			groupLabel: "Settings",
			menus: [
				{
					href: "/users",
					label: "Users",
					active: pathname.includes("/users"),
					icon: Users,
					submenus: [],
				},
				{
					href: "/accounts",
					label: "Account",
					active: pathname.includes("/accounts"),
					icon: Settings,
					submenus: [],
				},
				{
					href: "/settings/school-creation/school",
					label: "School Creation",
					active: pathname === "/settings/school-creation/school",
					icon: School,
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
					label: "Time Table",
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
