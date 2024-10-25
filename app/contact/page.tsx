import SectionContainer from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
	return (
		<SectionContainer className="">
			<div className="flex justify-center items-center">
				<div className="bg-[#9e876f] h-1 w-full"></div>
				<h2 className="text-4xl px-2 text-black uppercase whitespace-nowrap">
					Contact
				</h2>
				<div className="bg-[#9e876f] h-1 w-full"></div>
			</div>
			<form
				action=""
				className="space-y-2 italic flex flex-col justify-center max-w-[700px] mx-auto pt-4"
			>
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
					<Input type="email" id="email" placeholder="example@example.com" />
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
		</SectionContainer>
	);
}
