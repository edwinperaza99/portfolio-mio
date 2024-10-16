import { productions } from "@/data/productionsData";

export default function Home() {
	return (
		<>
			<main className="max-w-[1200px] mx-auto">
				{/* projects section  */}
				<section className="container-sm md:container grid grid-cols-3 gap-4 mx-auto px-4 mb-10">
					{productions.map((production, index) => (
						<article key={index} className="h-auto w-full">
							<div className="aspect-video">
								<img
									src={production.images[0].src}
									alt={production.images[0].caption}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="text-center p-2">
								<h3 className="text-lg text-gray-300">{production.title}</h3>
								<h4 className="text-sm text-gray-500 lowercase font-thin">
									{production.role}
								</h4>
							</div>
						</article>
					))}
				</section>
			</main>
		</>
	);
}
