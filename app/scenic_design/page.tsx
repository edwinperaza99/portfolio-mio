import ScenicSection from "@/components/scenic_section/Section";
import { sections } from "@/data/sectionsData";

export default function ScenicDesign() {
	return (
		<>
			<main className="space-y-4 mb-8">
				{sections.map((section, index) => (
					<ScenicSection
						key={index}
						title={section.title}
						subtitle={section.subtitle}
						director={section.director}
						venue={section.venue}
						date={section.date}
						images={section.images}
						isEven={index % 2 === 0}
					/>
				))}
			</main>
		</>
	);
}
