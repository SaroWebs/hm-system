import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Header from "./header";

interface ContentLayoutProps {
	title: string;
	children: React.ReactNode;
	className?: string;
	animate?: boolean;
	back?: boolean;
}

const Layout = ({ title, children, className, animate, back }: ContentLayoutProps) => {
	
	const animationProps = animate
		? {
				initial: { x: 100 },
				animate: { x: 0 },
				transition: { ease: "easeOut", duration: 0.2 },
		  }
		: {};

	return (
		<div className="space-y-4">
			<Header title={title} back={back} />
			<motion.div {...animationProps} className={cn("min-h-screen", className)}>
				{children}
			</motion.div>
		</div>
	);
};

export default Layout;
