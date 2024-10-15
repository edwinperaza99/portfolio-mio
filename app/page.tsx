export default function Home() {
	return (
		<>
			<main className="max-w-[1200px] mx-auto">
				{/* projects section  */}
				<section className="container-sm md:container grid grid-cols-3 gap-4 mx-auto px-4">
					<article className="h-auto w-full">
						<div className="aspect-video">
							<img
								src="https://picsum.photos/200/300"
								// width={1200}
								// height={800}
								alt="Project 1"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="text-center p-2">
							<h3>Project #</h3>
							<h4>Description?</h4>
						</div>
					</article>
					<article className="h-auto w-full">
						<div className="aspect-video">
							<img
								src="https://picsum.photos/200/300"
								// width={1200}
								// height={800}
								alt="Project 1"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="text-center p-2">
							<h3>Project #</h3>
							<h4>Description?</h4>
						</div>
					</article>
					<article className="h-auto w-full">
						<div className="aspect-video">
							<img
								src="https://picsum.photos/200/300"
								// width={1200}
								// height={800}
								alt="Project 1"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="text-center p-2">
							<h3>Project #</h3>
							<h4>Description?</h4>
						</div>
					</article>
					<article className="h-auto w-full">
						<div className="aspect-video">
							<img
								src="https://picsum.photos/200/300"
								// width={1200}
								// height={800}
								alt="Project 1"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="text-center p-2">
							<h3>Project #</h3>
							<h4>Description?</h4>
						</div>
					</article>
				</section>
			</main>
		</>
	);
}
