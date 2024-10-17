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
		title: "Urinetown",
		role: "SCENIC DESIGNER",
		location: "James D. Young Theater",
		description:
			"The Trilogy follows the Morales family through decades of the Mexican-American experience, from a remote mining town in Arizona during World War II, to the Phoenix family home during the Cuban Missile Crisis, and finally to Los Angeles following the death of Pope John Paul II in 2005.",
		credits: {
			direction: "Collette Rutherford",
			author: "Evelina Fernandez",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "/1_Urinetown/1.jpg", caption: "PC Mark Ramont" },
			{ src: "/1_Urinetown/2.jpg", caption: "PC Mark Ramont" },
			{ src: "/1_Urinetown/3.jpg", caption: "PC Mark Ramont" },
			{ src: "/1_Urinetown/4.jpg", caption: "" },
			{ src: "/1_Urinetown/5.jpg", caption: "PC Mark Ramont" },
			{ src: "/1_Urinetown/6.jpg", caption: "" },
			{ src: "/1_Urinetown/7.jpg", caption: "" },
			{ src: "/1_Urinetown/8.jpg", caption: "PC Mark Ramont" },
		],
	},
	{
		title: "Street Scene",
		role: "SCENIC DESIGNER",
		location: "Little Theater",
		description:
			"The Trilogy follows the Morales family through decades of the Mexican-American experience, from a remote mining town in Arizona during World War II, to the Phoenix family home during the Cuban Missile Crisis, and finally to Los Angeles following the death of Pope John Paul II in 2005.",
		credits: {
			direction: "Collette Rutherford",
			author: "Evelina Fernandez",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "/2_Street_Scene/1.jpg", caption: "PC Jenny Graham" },
			{ src: "/2_Street_Scene/2.jpg", caption: "PC Jenny Graham" },
			{ src: "/2_Street_Scene/3.jpg", caption: "PC Jenny Graham" },
			{ src: "/2_Street_Scene/4.jpg", caption: "" },
			{ src: "/2_Street_Scene/5.jpg", caption: "PC Jenny Graham" },
			{ src: "/2_Street_Scene/6.jpg", caption: "PC Jenny Graham" },
			{ src: "/2_Street_Scene/7.jpg", caption: "PC Jenny Graham" },
			{ src: "/2_Street_Scene/8.jpg", caption: "PC Jenny Graham" },
		],
	},
	{
		title: "She Kills Monsters",
		role: "SCENIC DESIGNER",
		location: "James D. Young Theater",
		description:
			"The Trilogy follows the Morales family through decades of the Mexican-American experience, from a remote mining town in Arizona during World War II, to the Phoenix family home during the Cuban Missile Crisis, and finally to Los Angeles following the death of Pope John Paul II in 2005.",
		credits: {
			direction: "Collette Rutherford",
			author: "Evelina Fernandez",
			lighting: "Pablo Santiago",
			projections: "Yee Eun Nam",
			costumes: "Carlos Brown",
			sound: "John Zalewski",
		},
		images: [
			{ src: "/3_She_Kills_Monsters/1.jpg", caption: "" },
			{ src: "/3_She_Kills_Monsters/2.jpg", caption: "PC Jenny Graham" },
			{ src: "/3_She_Kills_Monsters/3.jpg", caption: "" },
			{ src: "/3_She_Kills_Monsters/4.jpg", caption: "PC Jenny Graham" },
			{ src: "/3_She_Kills_Monsters/5.jpg", caption: "PC Hayden Lalicker" },
			{ src: "/3_She_Kills_Monsters/6.jpg", caption: "PC Jenny Graham" },
			{ src: "/3_She_Kills_Monsters/7.jpg", caption: "PC Hayden Lalicker" },
			{ src: "/3_She_Kills_Monsters/8.jpg", caption: "PC Jenny Graham" },
		],
	},
];
