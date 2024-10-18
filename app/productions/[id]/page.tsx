import { productions } from "@/data/productionsData";
import { notFound } from "next/navigation";
import SectionContainer from "@/components/ui/SectionContainer";
import ImagesGallery from "@/components/gallery/ImagesGallery";

export function generateStaticParams() {
	return productions.map((production) => ({
		params: { id: production.id },
	}));
}

export default function ProductionPage({ params }: { params: { id: string } }) {
	// Fetch the production based on the `id` from `params`
	const production = productions.find((p) => p.id === params.id);

	// If the production is not found, return 404
	if (!production) {
		notFound();
	}
	return (
		<main className="max-w-[1200px] mx-auto">
			<SectionContainer className="flex justify-center">
				<div className="text-black bg-[#C3BBAE] text-center rounded-tl-3xl rounded-br-3xl p-4 mb-4 md:mb-6 flex flex-col justify-center min-w-[70%]">
					<h2 className="text-2xl font-bold">{production.title}</h2>
					<h3 className="text-base mb-3">
						by{" "}
						<span className="italic">
							{production.credits?.author ||
								production.credits?.coordinator ||
								"Unknown"}
						</span>
					</h3>
					<div className="flex flex-col justify-start">
						<ul className="text-sm justify-start text-left mx-auto">
							{production.credits?.direction && (
								<li>Director: {production.credits.direction}</li>
							)}
							{production.credits?.coordinator && (
								<li>Coordinator: {production.credits.coordinator}</li>
							)}
							{production.credits?.music && (
								<li>Music & Lyrics: {production.credits.music}</li>
							)}
							{production.credits?.choreographer && (
								<li>Choreographer: {production.credits.choreographer}</li>
							)}
							{production.credits?.codesigner && (
								<li>Co-Designer: {production.credits.codesigner}</li>
							)}
							{production.location && <li>Venue: {production.location}</li>}
							{production.date && <li>Date: {production.date}</li>}
						</ul>
					</div>

					{/* <p className="mt-4">{production.description}</p> */}
				</div>
			</SectionContainer>
			<SectionContainer>
				<ImagesGallery images={production.images} />
			</SectionContainer>
		</main>
	);
}
