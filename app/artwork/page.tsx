import Header from "@/components/artwork_section/Header";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Artwork() {
	return (
		<>
			<main className="space-y-4">
				<SectionContainer>
					<Header>Scenic Painting</Header>
				</SectionContainer>
				<SectionContainer>
					<Header>3d rendering</Header>
				</SectionContainer>
				<SectionContainer>
					<Header>HAND DRAWN RENDERING</Header>
				</SectionContainer>
			</main>
		</>
	);
}
