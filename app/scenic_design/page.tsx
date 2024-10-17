import ScenicSection from "@/components/scenic_section/Section";
import { productions } from "@/data/productionsData";

export default function ScenicDesign() {
	return (
		<>
			<main className="space-y-4 mb-8">
				{productions.map((production, index) => (
					<ScenicSection
						key={index}
						title={production.title}
						subtitle={production.credits.author}
						director={production.credits.direction}
						venue={production.location}
						date={production.date}
						images={production.images}
						isEven={index % 2 === 0}
					/>
				))}
			</main>
		</>
	);
}
