import React, { ReactNode } from "react";

export default function ArtworkHeader({ children }: { children: ReactNode }) {
	return (
		<div className="flex justify-center">
			<h2 className="py-2 px-10 min-w-64 uppercase text-xl font-thin text-center text-black bg-[#C3BBAE] rounded-tl-3xl rounded-br-3xl">
				{children}
			</h2>
		</div>
	);
}
