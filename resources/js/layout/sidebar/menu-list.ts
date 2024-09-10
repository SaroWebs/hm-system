import {
	BarChartHorizontal,
	BellRing,
	ClipboardCheck,
	Clock8,
	DollarSign,
	DoorOpen,
	Eye,
	Fingerprint,
	Globe,
	Hash,
	IndianRupee,
	IndianRupeeIcon,
	LampDesk,
	LayoutGrid,
	LucideIcon,
	Megaphone,
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
					label: "Students",
					active: pathname === "/students" || pathname === "/students/add",
					icon: Users,
					submenus: [
						{
							href: "/students",
							label: "View",
							icon: Eye,
							active: pathname === "/students",
						},
						{
							href: "/students/add",
							label: "Add",
							icon: Plus,
							active: pathname === "/students/add",
						},
					],
				},
				{
					href: "",
					label: "Staff",
					active: pathname.includes("/staff"),
					icon: UsersRound,
					submenus: [
						{
							href: "/staff/teachers",
							label: "View",
							icon: Eye,
							active:
								pathname.includes("/staff") &&
								!pathname.includes("/staff/add") &&
								!pathname.includes("/staff/edit"),
						},
						{
							href: "/staff/add/teachers",
							label: "Add",
							icon: Plus,
							active: pathname.includes("/staff/add"),
						},
					],
				},
				{
					href: "",
					label: "Fees",
					active: pathname.includes("/fees"),
					icon: IndianRupee,
					submenus: [
						{
							href: "/fees",
							label: "View",
							icon: Eye,
							active: pathname === "/fees",
						},
						{
							href: "/fees/pay/school-fees",
							label: "Pay",
							icon: IndianRupeeIcon,
							active: pathname.includes("/fees/pay"),
						},
						{
							href: "/fees/refund/school-fees",
							label: "Refund",
							icon: ReceiptEuro,
							active: pathname.includes("/fees/refund"),
						},
						{
							href: "/fees/challan/school-fees",
							label: "Challan",
							icon: ReceiptEuro,
							active: pathname.includes("/fees/challan"),
						},
						{
							href: "/fees/settings",
							label: "Settings",
							icon: Settings2,
							active: pathname.includes("/fees/settings"),
						},
					],
				},
				{
					href: "",
					label: "Attendances",
					active: pathname.includes("/attendances"),
					icon: Megaphone,
					submenus: [
						{
							href: "/attendances/students",
							label: "Student View",
							icon: Eye,
							active: pathname === "/attendances/students",
						},
						{
							href: "/attendances/students/rfid",
							label: "Student RFID",
							icon: Plus,
							active: pathname === "/attendances/students/rfid",
						},
						{
							href: "/attendances/staff",
							label: "Staff View",
							icon: Plus,
							active: pathname === "/attendances/staff",
						},
						{
							href: "/attendances/staff/rfid",
							label: "Staff RFID",
							icon: Plus,
							active: pathname === "/attendances/staff/rfid",
						},
					],
				},

				{
					href: "",
					label: "Payroll",
					active: pathname.includes("/payroll"),
					icon: BarChartHorizontal,
					submenus: [
						{
							href: "/payroll",
							label: "View",
							icon: Plus,
							active: pathname === "/payroll",
						},
						{
							href: "/payroll/pay",
							label: "Pay",
							icon: Plus,
							active: pathname === "/payroll/pay",
						},
						{
							href: "/payroll/settings",
							label: "Settings",
							icon: Plus,
							active: pathname === "/payroll/settings",
						},
					],
				},
				{
					href: "",
					label: "Homeworks",
					active: pathname.includes("/home-works"),
					icon: NotebookPen,
					submenus: [
						{
							href: "/home-works",
							label: "View",
							icon: Eye,
							active: pathname === "/home-works",
						},
						{
							href: "/home-works/add",
							label: "Add",
							icon: Plus,
							active: pathname === "/home-works/add",
						},
					],
				},
				// {
				// 	href: "/roll-generator",
				// 	label: "Roll Generator",
				// 	active: pathname.includes("/roll-generator"),
				// 	icon: Hash,
				// 	submenus: [],
				// },
				{
					href: "/time-table",
					label: "Time Table",
					active: pathname === "/time-table",
					icon: Clock8,
					submenus: [],
				},
				{
					href: "/resports",
					label: "Report Cards",
					active: pathname.includes("/resports"),
					icon: SquareGanttChart,
					submenus: [],
				},
				{
					href: "/materials",
					label: "Materials",
					active: pathname.includes("/materials"),
					icon: PencilRuler,
					submenus: [],
				},
				{
					href: "/examination",
					label: "Examination",
					active: pathname.includes("/examination"),
					icon: ClipboardCheck,
					submenus: [],
				},
				{
					href: "/front-office",
					label: "Front Office",
					active: pathname.includes("/front-office"),
					icon: LampDesk,
					submenus: [],
				},
				{
					href: "/certificates",
					label: "Certificate Management",
					active: pathname.includes("/certificates"),
					icon: ScrollText,
					submenus: [],
				},
				{
					href: "/id-cards",
					label: "ID Card Management",
					active: pathname.includes("/id-cards"),
					icon: SquareUser,
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
					href: "/admission-enquiry",
					label: "Admission Enquiry",
					active: pathname.includes("/admission-enquiry"),
					icon: DoorOpen,
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
