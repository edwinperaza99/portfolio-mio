"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "900", subsets: ["latin"] });

export default function NavBar() {
	return (
		<nav className="flex justify-center py-8">
			<ul className="flex flex-row gap-2 sm:gap-4 py-3 px-2 sm:px-16 max-w-[90%] md:max-w-[70%]  border-t-2 border-b-2 border-[#D7CDBB]">
				<li>
					<Link href="/" className="hover:text-[#D7CDBB]">
						Home
					</Link>
				</li>
				<li>
					<Link href="" className="hover:text-[#D7CDBB]">
						Scenic Design
					</Link>
				</li>
				<li>
					<Link href="" className="hover:text-[#D7CDBB]">
						Artworks
					</Link>
				</li>
				<li>
					<Link href="/about" className="hover:text-[#D7CDBB]">
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
