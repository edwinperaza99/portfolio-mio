import { productions } from "@/data/productionsData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="max-w-[1200px] mx-auto">
				{/* projects section  */}
				<section className="container-sm md:container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4 mb-10">
					{productions.map((production, index) => (
						<article key={index} className="h-auto w-full group">
							<Link href={`/productions/${production.id}`}>
								<div className="aspect-video relative">
									<Image
										src={production.images[0].src}
										alt={production.images[0].caption}
										className="object-cover opacity-85 group-hover:opacity-100"
										fill
									/>
								</div>
								<div className="text-center p-2">
									<h3 className="text-base md:text-lg text-gray-300 group-hover:text-gray-100">
										{production.title}
									</h3>
									<h4 className="text-sm text-gray-500 group-hover:text-gray-300 lowercase font-thin">
										by{" "}
										<span className="italic capitalize">
											{production.credits.author}
										</span>
									</h4>
								</div>
							</Link>
						</article>
					))}
				</section>
			</main>
		</>
	);
}
