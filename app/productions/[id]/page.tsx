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
			<SectionContainer>
				<div className="text-black bg-[#C3BBAE] text-center rounded-tl-3xl rounded-br-3xl p-4 mb-8">
					<h1 className="text-2xl font-bold">{production.title}</h1>
					<p className="text-lg">{production.role}</p>
					<p className="text-sm">{production.date}</p>
					<p className="mt-4">{production.description}</p>
				</div>
				<ImagesGallery images={production.images} />
			</SectionContainer>
		</main>
	);
}
