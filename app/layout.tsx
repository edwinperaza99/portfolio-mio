import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const MinionPro = localFont({
	src: "./fonts/MinionPro.woff",
	variable: "--font-minion-pro",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Mio Okada | Portfolio",
	description: "Personal portfolio for Mio Okada, a scenic designer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${MinionPro.className} antialiased  bg-white text-black min-h-screen`}
			>
				<header className="flex flex-col justify-content">
					{/* hero section  */}
					<section className="container text-center mx-auto">
						<h1 className="text-7xl font-black uppercase pt-10">Mio Okada</h1>
						<h2 className="text-2xl text-[#9e876f] font-light uppercase">
							Scenic Designer
						</h2>
					</section>
					<NavBar />
				</header>
				{children}
				<footer className="container mx-auto text-center py-6 font-thin text-gray-800">
					<p>&copy; {new Date().getFullYear()} Mio Okada</p>
				</footer>
			</body>
		</html>
	);
}
