import { Button } from "@/components/ui/button";

export default function About() {
	return (
		<>
			<main className="max-w-[1200px] mx-auto">
				<section className="w-full bg-[#C3BBAE] text-black rounded-tl-3xl rounded-br-3xl mb-10">
					<div className="px-16 py-10">
						<h2 className="text-3xl pb-8">My Story</h2>
						<p className="text-thin italic">
							Growing up in a small town in Japan, there wasn’t much
							entertainment around. My life was simple, a little too simple, so
							I always dreamed of doing something big and exciting in the
							future. I loved drawings and crafts since I was little, and I
							loved impressing people with my art.
						</p>
						<p className="text-thin italic">
							After moving to the U.S. and struggling with English, I found art
							to be not only a way to express myself but also a way to
							communicate with others. Art became my third language and I fell
							in love with it more deeply. Scenic design was a way for me to
							pursue my passion for something “big and exciting” and to connect
							with people in a way that a language could not.
						</p>
						<p className="text-thin italic">
							My art works are a combination of passion and dedication. I enjoy
							expressing the feeling that corresponds to a story or moments, and
							translating it into a space. Even if there is a language barrier,
							people are still able to resonate, sympathize, and be part of the
							experience. Scenic design for me is a place where I can be free
							and explore different emotions, and put these different emotions
							into the right places like a puzzle.
						</p>
					</div>
				</section>
				<section className="w-full bg-[#8A7A69] text-black rounded-tl-3xl rounded-br-3xl grid grid-cols-2 h-32">
					<div className="flex flex-col justify-center items-center text-[#C3BBAE]">
						<h3 className="uppercase font-black text-4xl">Resume</h3>
						<h4 className="text-thin italic">
							Click download to view my resume
						</h4>
					</div>
					<div className="flex justify-center items-center rounded-tl-3xl rounded-br-3xl bg-[#C3BBAE]">
						<Button className="rounded-full" size="lg" variant="download">
							<a href="/resume.pdf" className="px-4 py-10" download>
								Download
							</a>
						</Button>
					</div>
				</section>
			</main>
		</>
	);
}
