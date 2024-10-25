"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		// Append required fields directly to FormData
		formData.append("access_key", "public_key_here");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: formData,
			});

			const result = await response.json();

			if (result.success) {
				toast.success("Message sent successfully!");
				form.reset(); // Clear the form
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.");
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<SectionContainer className="mb-10">
			<Toaster position="bottom-center" />

			<div className="flex justify-center items-center">
				<div className="bg-[#9e876f] h-1 w-full"></div>
				<h2 className="text-4xl px-2 text-black uppercase whitespace-nowrap">
					Contact
				</h2>
				<div className="bg-[#9e876f] h-1 w-full"></div>
			</div>

			<form
				onSubmit={handleSubmit}
				className="space-y-2 italic flex flex-col justify-center max-w-[700px] mx-auto pt-4"
			>
				<input type="hidden" name="subject" value="Contact Form Submission" />
				<input type="hidden" name="from_name" value="Portfolio Notifications" />

				<label htmlFor="botcheck" className="sr-only">
					Do not check this box
				</label>
				<input
					type="checkbox"
					name="botcheck"
					id="botcheck"
					className="hidden"
				/>

				<div className="flex justify-center items-center g-4">
					<IoIosMail />
					<h3 className="pl-2">mio.okada0826@gmail.com</h3>
				</div>

				<div className="grid grid-cols-2 gap-6">
					<div className="space-y-1">
						<Label htmlFor="first_name">First Name</Label>
						<Input type="text" id="first_name" name="first_name" required />
					</div>
					<div className="space-y-1">
						<Label htmlFor="last_name">Last Name</Label>
						<Input type="text" id="last_name" name="last_name" required />
					</div>
				</div>

				<div className="space-y-1">
					<Label htmlFor="email">Email</Label>
					<Input type="email" id="email" name="email" required />
				</div>

				<div className="space-y-1">
					<Label htmlFor="message">Message</Label>
					<Textarea id="message" name="message" required />
				</div>

				<div className="flex justify-end">
					<Button
						size="lg"
						variant="download"
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Sending..." : "Send"}
					</Button>
				</div>
			</form>
		</SectionContainer>
	);
}
