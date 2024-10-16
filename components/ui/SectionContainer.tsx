import { ReactNode } from "react";

export default function SectionContainer({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<section className="container-sm md:container mx-auto px-4">
			{children}
		</section>
	);
}
