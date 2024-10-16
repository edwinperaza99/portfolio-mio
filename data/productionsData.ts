export type Image = {
	src: string;
	caption: string;
};

export type Production = {
	title: string;
	role: string;
	location: string;
	description: string;
	credits: {
		direction: string;
		author: string;
		lighting: string;
		projections: string;
		costumes: string;
		sound: string;
	};
	images: Image[];
};

export const productions: Production[] = [
	{
		title: "A Mexican Trilogy: An American Story",
		role: "SCENIC DESIGNER",
		location: "Performed at the Los Angeles Theatre Center",
		description:
			"The Trilogy follows the Morales family through decades of the Mexican-American experience, from a remote mining town in Arizona during World War II, to the Phoenix family home during the Cuban Missile Crisis, and finally to Los Angeles following the death of Pope John Paul II in 2005.",
		credits: {
			direction: "Jose Luis Valenzuela",
			author: "Evelina Fernandez",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "https://picsum.photos/400/200?2", caption: "example 2" },
			{ src: "https://picsum.photos/400/200?3", caption: "example 3" },
		],
	},
	{
		title: "Street Scene",
		role: "SCENIC DESIGNER",
		location: "Performed at the Little Theater",
		description:
			"A powerful depiction of urban life, following the dreams, loves, and struggles of diverse families in a New York City neighborhood.",
		credits: {
			direction: "Kerry Jennings",
			author: "Kurt Weill",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "https://picsum.photos/400/200?4", caption: "example 4" },
			{ src: "https://picsum.photos/400/200?5", caption: "example 5" },
		],
	},
	{
		title: "She Kills Monsters",
		role: "SCENIC DESIGNER",
		location: "Performed at the James D. Young Theater",
		description:
			"A thrilling journey into the world of fantasy role-playing games as one woman uncovers the hidden world of her late sister.",
		credits: {
			direction: "Anne James",
			author: "Qui Nguyen",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "https://picsum.photos/400/200?6", caption: "example 6" },
			{ src: "https://picsum.photos/400/200?7", caption: "example 7" },
		],
	},
	{
		title: "Lady Susan",
		role: "SCENIC DESIGNER",
		location: "Performed at the Hallberg Theater",
		description:
			"An adaptation of Jane Austen’s classic story of Lady Susan, a tale of social intrigue, wit, and complex relationships.",
		credits: {
			direction: "Jim Tauli",
			author: "Jane Austen",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "https://picsum.photos/400/200?8", caption: "example 8" },
			{ src: "https://picsum.photos/400/200?9", caption: "example 9" },
		],
	},
	{
		title: "The Crucible",
		role: "SCENIC DESIGNER",
		location: "Performed at the Black Box Theater at ELAC",
		description:
			"Arthur Miller’s powerful drama about the Salem witch trials and the dangers of extremism and hysteria in society.",
		credits: {
			direction: "Kelley Hogan",
			author: "Arthur Miller",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "https://picsum.photos/400/200?10", caption: "example 10" },
			{ src: "https://picsum.photos/400/200?11", caption: "example 11" },
		],
	},
];
