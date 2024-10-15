import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoIosMail } from "react-icons/io";

export default function About() {
	return (
		<>
			<main className="">
				<section className="container-sm md:container text-black mb-10 mx-auto px-4">
					<div className="px-6 sm:px-10 md:px-16 lg:px-24 py-10 lg:py-16  bg-[#C3BBAE] rounded-tl-3xl rounded-br-3xl">
						<h2 className="text-3xl pb-4 sm:pb-6 md:pb-8">My Story</h2>
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
				<section className="container-sm md:container mx-auto mb-10 px-4">
					<div className="bg-[#8A7A69] text-black rounded-tl-3xl rounded-br-3xl grid grid-cols-2 h-32">
						<div className="flex flex-col justify-center items-center text-[#C3BBAE]">
							<h3 className="uppercase font-black text-xl sm:text-2xl md:text-4xl">
								Resume
							</h3>
							<p className="text-thin italic text-xs sm:text-sm md:text-base">
								Click download to view my resume
							</p>
						</div>
						<div className="flex justify-center items-center rounded-tl-3xl rounded-br-3xl bg-[#C3BBAE]">
							<Button
								className="rounded-full"
								size="lg"
								variant="download"
								asChild
							>
								<a href="/resume.pdf" className="px-12 py-8 text-lg" download>
									Download
								</a>
							</Button>
						</div>
					</div>
				</section>
				<section className="container-sm md:container text-[#C3BBAE] mx-auto my-24 px-4">
					<form
						action=""
						className="space-y-2 italic flex flex-col justify-center max-w-[700px] mx-auto"
					>
						<h2 className="text-4xl text-center uppercase not-italic">
							Contact
						</h2>
						<div className="flex justify-center items-center g-4">
							<IoIosMail />
							<h3 className="pl-2">mio.okada0826@gmail.com</h3>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-1">
								<Label htmlFor="firstName">First Name</Label>
								<Input type="text" id="firstName" placeholder="your name" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="lastName">Last Name</Label>
								<Input type="text" id="lastName" placeholder="your last name" />
							</div>
						</div>
						<div className="space-y-1">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								placeholder="example@example.com"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="message">Message</Label>
							<Textarea id="message" placeholder="your message" />
						</div>
						<div className="flex justify-end">
							<Button
								size="lg"
								variant="download"
								type="submit"
								className="hover:bg-black hover:text-[#C3BBAE]"
							>
								Send
							</Button>
						</div>
					</form>
				</section>
			</main>
		</>
	);
}
