"use client"; // This ensures the component runs on the client side

import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";

type ClientGalleryProps = {
	images: { src: string; caption: string }[];
};

export default function ImagesGallery({ images }: ClientGalleryProps) {
	// State to store the dimensions of the images
	const [imageDimensions, setImageDimensions] = useState<{
		[key: number]: { width: number; height: number };
	}>({});

	// Function to update image dimensions once the image is loaded
	const handleImageLoad = (index: number, width: number, height: number) => {
		setImageDimensions((prev) => ({
			...prev,
			[index]: { width, height },
		}));
	};

	return (
		<Gallery withCaption>
			{images.map((image, index) => (
				<div key={index} className="w-full mb-4 md:mb-6">
					<Item
						original={image.src}
						thumbnail={image.src}
						width={imageDimensions[index]?.width || 1200} // Default to 1200 if not loaded
						height={imageDimensions[index]?.height || 800} // Default to 800 if not loaded
						caption={image.caption}
					>
						{({ ref, open }) => (
							<div>
								<Image
									ref={ref}
									onClick={open}
									src={image.src}
									alt={image.caption}
									fill={false}
									width={imageDimensions[index]?.width || 1200} // Set width dynamically
									height={imageDimensions[index]?.height || 800} // Set height dynamically
									onLoad={(e) => {
										const { naturalWidth, naturalHeight } =
											e.currentTarget as HTMLImageElement;
										handleImageLoad(index, naturalWidth, naturalHeight);
									}} // Capture original dimensions
									style={{ objectFit: "contain" }}
									className="object-cover cursor-pointer"
									// placeholder="blur"
								/>
							</div>
						)}
					</Item>
				</div>
			))}
		</Gallery>
	);
}
