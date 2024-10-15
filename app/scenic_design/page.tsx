export default function ScenicDesign() {
	return (
		<>
			<main className="space-y-4 mb-8">
				<section className="container-sm md:container text-black mx-auto px-4">
					<div className="bg-[#C3BBAE] rounded-tl-3xl rounded-br-3xl grid grid-cols-3">
						<div className="col-span-2">
							<img
								src="https://picsum.photos/400/200"
								alt="Urinetown"
								className="w-full h-full object-cover p-4"
							/>
						</div>
						<div className="flex flex-col gap-4 justify-center items-center">
							<div>
								<h2 className="italic">
									Urinetown <span className="not-italic">by Greg Kotis</span>
								</h2>
								<ul>
									<li>Director:</li>
									<li>Venue:</li>
									<li>Date:</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="container-sm md:container text-white mx-auto px-4">
					<div className="bg-[#8A7A69] rounded-tl-3xl rounded-br-3xl grid grid-cols-3">
						<div className="flex flex-col gap-4 justify-center items-center">
							<div>
								<h2 className="italic">
									Urinetown <span className="not-italic">by Greg Kotis</span>
								</h2>
								<ul>
									<li>Director:</li>
									<li>Venue:</li>
									<li>Date:</li>
								</ul>
							</div>
						</div>
						<div className="col-span-2">
							<img
								src="https://picsum.photos/400/200"
								alt="Urinetown"
								className="w-full h-full object-cover p-4"
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
