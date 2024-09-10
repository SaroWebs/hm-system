import Stores from "@/lib/stores";

const Footer = () => {
	const { role } = Stores();

	return (
		<div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-4 md:mx-8 flex h-14 items-center">
				<p className="text-xs md:text-sm leading-loose text-muted-foreground text-left flex justify-end w-full capitalize">
					{role}
				</p>
			</div>
		</div>
	);
};

export default Footer;
