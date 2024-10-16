import ScenicSection from "@/components/scenic_section/Section";

type Section = {
	title: string;
	subtitle: string;
	director: string;
	venue: string;
	date: string;
	images: { src: string; caption: string }[];
};

export default function ScenicDesign() {
	const sections: Section[] = [
		{
			title: "Urinetown",
			subtitle: "by Greg Kotis",
			director: "Collette Rutherford",
			venue: "James D. Young Theater",
			date: "4/15/24 - 4/27/24",
			images: [
				{ src: "https://picsum.photos/400/200?1", caption: "example 1" },
				{ src: "https://picsum.photos/400/200?2", caption: "example 2" },
				{ src: "https://picsum.photos/400/200?3", caption: "example 3" },
				{ src: "https://picsum.photos/400/200?4", caption: "example 4" },
				{ src: "https://picsum.photos/400/200?5", caption: "example 5" },
				{ src: "https://picsum.photos/400/200?6", caption: "example 6" },
			],
		},
		{
			title: "Street Scene",
			subtitle: "by Kurt Weill",
			director: "Kerry Jennings",
			venue: "Little Theater",
			date: "3/24/23 - 4/8/23",
			images: [
				{ src: "https://picsum.photos/400/200?7", caption: "example 7" },
				{ src: "https://picsum.photos/400/200?8", caption: "example 8" },
				{ src: "https://picsum.photos/400/200?9", caption: "example 9" },
				{ src: "https://picsum.photos/400/200?10", caption: "example 10" },
				{ src: "https://picsum.photos/400/200?11", caption: "example 11" },
				{ src: "https://picsum.photos/400/200?12", caption: "example 12" },
				{ src: "https://picsum.photos/400/200?13", caption: "example 13" },
				{ src: "https://picsum.photos/400/200?14", caption: "example 14" },
				{ src: "https://picsum.photos/400/200?15", caption: "example 15" },
			],
		},
		{
			title: "She Kills Monsters",
			subtitle: "by Qui Nguyen",
			director: "Anne James",
			venue: "James D. Young Theater",
			date: "11/10/22 - 12/3/22",
			images: [
				{ src: "https://picsum.photos/400/200?16", caption: "example 16" },
				{ src: "https://picsum.photos/400/200?17", caption: "example 17" },
				{ src: "https://picsum.photos/400/200?18", caption: "example 18" },
				{ src: "https://picsum.photos/400/200?19", caption: "example 19" },
				{ src: "https://picsum.photos/400/200?20", caption: "example 20" },
				{ src: "https://picsum.photos/400/200?21", caption: "example 21" },
			],
		},
		{
			title: "Lady Susan",
			subtitle: "by Jane Austen",
			director: "Jim Tauli",
			venue: "Hallberg Theater",
			date: "4/29/22 - 5/14/22",
			images: [
				{ src: "https://picsum.photos/400/200?22", caption: "example 22" },
				{ src: "https://picsum.photos/400/200?23", caption: "example 23" },
				{ src: "https://picsum.photos/400/200?24", caption: "example 24" },
				{ src: "https://picsum.photos/400/200?25", caption: "example 25" },
				{ src: "https://picsum.photos/400/200?26", caption: "example 26" },
				{ src: "https://picsum.photos/400/200?27", caption: "example 27" },
			],
		},
		{
			title: "The Wolves",
			subtitle: "by Sarah Delappe",
			director: "Sara Guerrero",
			venue: "James D. Young Theater",
			date: "12/8/21 - 12/11/21",
			images: [
				{ src: "https://picsum.photos/400/200?28", caption: "example 28" },
				{ src: "https://picsum.photos/400/200?29", caption: "example 29" },
				{ src: "https://picsum.photos/400/200?30", caption: "example 30" },
				{ src: "https://picsum.photos/400/200?31", caption: "example 31" },
				{ src: "https://picsum.photos/400/200?32", caption: "example 32" },
				{ src: "https://picsum.photos/400/200?33", caption: "example 33" },
			],
		},
		{
			title: "The Crucible",
			subtitle: "by Arthur Miller",
			director: "Kelley Hogan",
			venue: "Black Box Theater at ELAC",
			date: "5/17/19 - 5/26/19",
			images: [
				{ src: "https://picsum.photos/400/200?34", caption: "example 34" },
				{ src: "https://picsum.photos/400/200?35", caption: "example 35" },
				{ src: "https://picsum.photos/400/200?36", caption: "example 36" },
				{ src: "https://picsum.photos/400/200?37", caption: "example 37" },
				{ src: "https://picsum.photos/400/200?38", caption: "example 38" },
				{ src: "https://picsum.photos/400/200?39", caption: "example 39" },
			],
		},
		{
			title: "Comedy of Errors",
			subtitle: "by William Shakespeare",
			director: "Kelley Hogan",
			venue: "Black Box Theater at ELAC",
			date: "4/13/18 - 4/22/18",
			images: [
				{ src: "https://picsum.photos/400/200?40", caption: "example 40" },
				{ src: "https://picsum.photos/400/200?41", caption: "example 41" },
				{ src: "https://picsum.photos/400/200?42", caption: "example 42" },
				{ src: "https://picsum.photos/400/200?43", caption: "example 43" },
				{ src: "https://picsum.photos/400/200?44", caption: "example 44" },
				{ src: "https://picsum.photos/400/200?45", caption: "example 45" },
			],
		},
	];
	return (
		<>
			<main className="space-y-4 mb-8">
				{sections.map((section, index) => (
					<ScenicSection
						key={index}
						title={section.title}
						subtitle={section.subtitle}
						director={section.director}
						venue={section.venue}
						date={section.date}
						images={section.images}
						isEven={index % 2 === 0}
					/>
				))}
			</main>
		</>
	);
}
