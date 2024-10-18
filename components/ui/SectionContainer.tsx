import { cn } from "@/lib/utils";

type SectionContainerProps = {
	className?: string;
	children: React.ReactNode;
};

export default function SectionContainer({
	className = "",
	children,
}: SectionContainerProps) {
	return (
		<section
			className={cn("container-sm md:container mx-auto px-4", className)}
		>
			{children}
		</section>
	);
}
