import ScenicSection from "@/components/scenic_section/Section";

type Section = {
	title: string;
	subtitle: string;
	director: string;
	venue: string;
	date: string;
	images: string[];
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
				"https://picsum.photos/400/200?1",
				"https://picsum.photos/400/200?2",
				"https://picsum.photos/400/200?3",
				"https://picsum.photos/400/200?6",
				"https://picsum.photos/400/200?7",
				"https://picsum.photos/400/200?8",
				"https://picsum.photos/400/200?9",
			],
		},
		{
			title: "Street Scene",
			subtitle: "by Kurt Weill",
			director: "Kerry Jennings",
			venue: "Little Theater",
			date: "3/24/23 - 4/8/23",
			images: [
				"https://picsum.photos/400/200?4",
				"https://picsum.photos/400/200?5",
				"https://picsum.photos/400/200?6",
				"https://picsum.photos/400/200?7",
				"https://picsum.photos/400/200?8",
				"https://picsum.photos/400/200?9",
			],
		},
		{
			title: "She Kills Monsters",
			subtitle: "by Qui Nguyen",
			director: "Anne James",
			venue: "James D. Young Theater",
			date: "11/10/22 - 12/3/22",
			images: [
				"https://picsum.photos/400/200?4",
				"https://picsum.photos/400/200?5",
				"https://picsum.photos/400/200?6",
				"https://picsum.photos/400/200?7",
				"https://picsum.photos/400/200?8",
				"https://picsum.photos/400/200?9",
			],
		},
		{
			title: "Lady Susan",
			subtitle: "by Jane Austen",
			director: "Jim Tauli",
			venue: "Hallberg Theater",
			date: "4/29/22 - 5/14/22",
			images: [
				"https://picsum.photos/400/200?4",
				"https://picsum.photos/400/200?5",
				"https://picsum.photos/400/200?6",
				"https://picsum.photos/400/200?7",
				"https://picsum.photos/400/200?8",
				"https://picsum.photos/400/200?9",
			],
		},
		{
			title: "The Wolves",
			subtitle: "by Sarah Delappe",
			director: "Sara Guerrero",
			venue: "James D. Young Theater",
			date: "12/8/21 - 12/11/21",
			images: [
				"https://picsum.photos/400/200?4",
				"https://picsum.photos/400/200?5",
				"https://picsum.photos/400/200?6",
				"https://picsum.photos/400/200?7",
				"https://picsum.photos/400/200?8",
				"https://picsum.photos/400/200?9",
			],
		},
		{
			title: "The Crucible",
			subtitle: "by Arthur Miller",
			director: "Kelley Hogan",
			venue: "Black Box Theater at ELAC",
			date: "5/17/19 - 5/26/19",
			images: [
				"https://picsum.photos/400/200?4",
				"https://picsum.photos/400/200?5",
				"https://picsum.photos/400/200?6",
				"https://picsum.photos/400/200?7",
				"https://picsum.photos/400/200?8",
				"https://picsum.photos/400/200?9",
			],
		},
		{
			title: "Comedy of Errors",
			subtitle: "by William Shakespeare",
			director: "Kelley Hogan",
			venue: "Black Box Theater at ELAC",
			date: "4/13/18 - 4/22/18",
			images: [
				"https://picsum.photos/400/200?4",
				"https://picsum.photos/400/200?5",
				"https://picsum.photos/400/200?6",
				"https://picsum.photos/400/200?7",
				"https://picsum.photos/400/200?8",
				"https://picsum.photos/400/200?9",
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
