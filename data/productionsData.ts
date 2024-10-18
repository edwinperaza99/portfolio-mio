export type Image = {
	src: string;
	caption: string;
};

export type Production = {
	id: string;
	title: string;
	role: string;
	location: string;
	date: string;
	description: string;
	credits: {
		direction: string;
		author: string;
	};
	images: Image[];
};

export const productions: Production[] = [
	{
		id: "1",
		title: "Urinetown",
		role: "SCENIC DESIGNER",
		location: "James D. Young Theater",
		date: "4/15/24 - 4/27/24",
		description: "",
		credits: {
			direction: "Collette Rutherford",
			author: "Greg Kotis",
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
		id: "2",
		title: "Street Scene",
		role: "SCENIC DESIGNER",
		location: "Little Theater",
		date: "3/24/23 - 4/8/23",
		description: "",
		credits: {
			direction: "Kerry Jennings",
			author: "Kurt Weill",
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
		id: "3",
		title: "She Kills Monsters",
		role: "SCENIC DESIGNER",
		location: "James D. Young Theater",
		date: "11/10/22 - 12/3/22",
		description: "",
		credits: {
			direction: "Anne James",
			author: "Qui Nguyen",
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
	{
		id: "4",
		title: "The Wolves",
		role: "SCENIC DESIGNER",
		location: "James D. Young Theater",
		date: "12/8/21 - 12/11/21",
		description: "",
		credits: {
			direction: "Sara Guerrero",
			author: "Sarah Delappe",
		},
		images: [
			{ src: "/4_The_Wolves/1.jpg", caption: "" },
			{ src: "/4_The_Wolves/2.jpg", caption: "" },
			{ src: "/4_The_Wolves/3.jpg", caption: "" },
			{ src: "/4_The_Wolves/4.jpg", caption: "" },
			{ src: "/4_The_Wolves/5.jpg", caption: "" },
			{ src: "/4_The_Wolves/6.heic", caption: "" },
		],
	},
	{
		id: "5",
		title: "The Belle's Stratagem",
		role: "SCENIC DESIGNER",
		location: "",
		date: "",
		description: "",
		credits: {
			direction: "",
			author: "",
		},
		images: [
			{ src: "/5_The_Belles_Stratagem/1.jpg", caption: "PC Jenny Graham" },
			{ src: "/5_The_Belles_Stratagem/2.jpg", caption: "" },
			{ src: "/5_The_Belles_Stratagem/3.jpg", caption: "PC Jenny Graham" },
			{ src: "/5_The_Belles_Stratagem/4.jpg", caption: "" },
			{ src: "/5_The_Belles_Stratagem/5.jpg", caption: "PC Jenny Graham" },
			{ src: "/5_The_Belles_Stratagem/6.jpg", caption: "PC Jenny Graham" },
			{ src: "/5_The_Belles_Stratagem/7.jpg", caption: "" },
		],
	},
	{
		id: "6",
		title: "Lady Susan",
		role: "SCENIC DESIGNER",
		location: "Hallberg Theater",
		date: "4/29/22 - 5/14/22",
		description: "",
		credits: {
			direction: "Jim Tauli",
			author: "Jane Austen",
		},
		images: [
			{ src: "/6_Lady_Susan/1.jpg", caption: "" },
			{ src: "/6_Lady_Susan/2.jpg", caption: "" },
			{ src: "/6_Lady_Susan/3.jpg", caption: "" },
			{ src: "/6_Lady_Susan/4.jpg", caption: "" },
			{ src: "/6_Lady_Susan/5.jpg", caption: "" },
			{ src: "/6_Lady_Susan/6.jpg", caption: "" },
		],
	},
	{
		id: "7",
		title: "The Crucible",
		role: "SCENIC DESIGNER",
		location: "Black Box Theater at ELAC",
		date: "5/17/19 - 5/26/19",
		description: "",
		credits: {
			direction: "Kelley Hogan",
			author: "Arthur Miller",
		},
		images: [
			{ src: "/7_Crucible/1.jpg", caption: "" },
			{ src: "/7_Crucible/2.jpg", caption: "" },
			{ src: "/7_Crucible/3.jpg", caption: "" },
			{ src: "/7_Crucible/4.jpg", caption: "" },
			{ src: "/7_Crucible/5.jpg", caption: "" },
			{ src: "/7_Crucible/6.jpg", caption: "" },
		],
	},
	{
		id: "8",
		title: "Comedy of Errors",
		role: "SCENIC DESIGNER",
		location: "Black Box Theater at ELAC",
		date: "4/13/18 - 4/22/18",
		description: "",
		credits: {
			direction: "Kelley Hogan",
			author: "William Shakespeare",
		},
		images: [
			{ src: "/8_Comedy_of_Errors/1.jpg", caption: "" },
			{ src: "/8_Comedy_of_Errors/2.jpg", caption: "" },
			{ src: "/8_Comedy_of_Errors/3.jpg", caption: "" },
			{ src: "/8_Comedy_of_Errors/4.jpg", caption: "" },
			{ src: "/8_Comedy_of_Errors/5.jpg", caption: "" },
			{ src: "/8_Comedy_of_Errors/6.jpg", caption: "" },
		],
	},
	{
		id: "9",
		title: "Fall Dance 2023",
		role: "SCENIC DESIGNER",
		location: "",
		date: "",
		description: "",
		credits: {
			direction: "",
			author: "",
		},
		images: [
			{ src: "/9_Fall_Dance_2023/1.jpg", caption: "" },
			{ src: "/9_Fall_Dance_2023/2.jpg", caption: "" },
			{ src: "/9_Fall_Dance_2023/3.jpg", caption: "" },
			{ src: "/9_Fall_Dance_2023/4.jpg", caption: "" },
			{ src: "/9_Fall_Dance_2023/5.jpg", caption: "" },
			{ src: "/9_Fall_Dance_2023/6.jpg", caption: "" },
		],
	},
	{
		id: "10",
		title: "Sweeney Todd",
		role: "SCENIC DESIGNER",
		location: "",
		date: "",
		description: "",
		credits: {
			direction: "",
			author: "",
		},
		images: [
			{ src: "/10_Sweeney_Todd/1.jpg", caption: "" },
			{ src: "/10_Sweeney_Todd/2.jpg", caption: "" },
			{ src: "/10_Sweeney_Todd/3.jpg", caption: "" },
			{ src: "/10_Sweeney_Todd/4.jpg", caption: "" },
			{ src: "/10_Sweeney_Todd/5.jpg", caption: "" },
		],
	},
	{
		id: "11",
		title: "Lend Me a Tenor",
		role: "SCENIC DESIGNER",
		location: "",
		date: "",
		description: "",
		credits: {
			direction: "",
			author: "",
		},
		images: [
			{ src: "/11_Lend_Me_a_Tenor/1.jpg", caption: "" },
			{ src: "/11_Lend_Me_a_Tenor/2.jpg", caption: "" },
			{ src: "/11_Lend_Me_a_Tenor/3.jpg", caption: "" },
			{ src: "/11_Lend_Me_a_Tenor/4.jpg", caption: "" },
			{ src: "/11_Lend_Me_a_Tenor/5.jpg", caption: "" },
			{ src: "/11_Lend_Me_a_Tenor/6.jpg", caption: "" },
		],
	},
];
