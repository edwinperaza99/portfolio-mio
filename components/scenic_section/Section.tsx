"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

// to view images in full screen
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

type ScenicSectionProps = {
	title: string;
	subtitle: string;
	director: string;
	venue: string;
	date: string;
	images: { src: string; caption: string }[];
	isEven: boolean;
};

export default function ScenicSection({
	title,
	subtitle,
	director,
	venue,
	date,
	images,
	isEven,
}: ScenicSectionProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

	// Helper function to render the main Swiper with thumbnails
	const renderMainSwiper = () => (
		<Swiper
			style={
				{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				} as React.CSSProperties
			}
			loop={true}
			spaceBetween={10}
			navigation={true}
			autoplay={{
				delay: 4000, // 4 seconds between slides
				disableOnInteraction: false,
			}}
			thumbs={{ swiper: thumbsSwiper }}
			modules={[FreeMode, Navigation, Thumbs, Autoplay]}
			className="mb-3"
		>
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<Item
						original={image.src}
						thumbnail={image.src}
						width="1200"
						height="800"
						caption={image.caption} // Add the caption here
					>
						{({ ref, open }) => (
							<img
								ref={ref as React.MutableRefObject<HTMLImageElement>}
								onClick={open}
								src={image.src}
								alt={`${title} slide ${index + 1}`}
								className="w-full h-full object-cover cursor-pointer"
							/>
						)}
					</Item>
				</SwiperSlide>
			))}
		</Swiper>
	);

	// Helper function to render the thumbnail Swiper
	const renderThumbnailSwiper = () => (
		<Swiper
			onSwiper={setThumbsSwiper}
			loop={true}
			spaceBetween={10}
			slidesPerView={4}
			freeMode={true}
			watchSlidesProgress={true}
			modules={[FreeMode, Navigation, Thumbs]}
			className="mySwiper"
		>
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<img
						src={image.src}
						alt={`${title} thumbnail ${index + 1}`}
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);

	// Helper function to render the information section
	const renderInfoSection = () => (
		<div className="space-y-4">
			<h2 className="italic text-3xl">
				{title}{" "}
				<span className="not-italic text-base whitespace-nowrap">
					{subtitle}
				</span>
			</h2>
			<ul>
				<li>Director: {director}</li>
				<li>Venue: {venue}</li>
				<li>Date: {date}</li>
			</ul>
		</div>
	);

	// Determine layout based on the `isEven` prop
	return (
		<section className="container-sm md:container mx-auto px-4">
			<div
				className={`${
					isEven ? "text-black bg-[#C3BBAE]" : "text-white bg-[#8A7A69]"
				} rounded-tl-3xl rounded-br-3xl grid grid-cols-3`}
			>
				<div className="col-span-3 md:col-span-2 p-4">
					<Gallery withCaption>
						{renderMainSwiper()}
						{renderThumbnailSwiper()}
					</Gallery>
				</div>
				<div
					className={`flex flex-col gap-4 justify-center items-start md:items-center p-8 col-span-3 md:col-span-1 ${
						isEven ? "order-last md:order-none" : "md:order-first"
					}`}
				>
					{renderInfoSection()}
				</div>
			</div>
		</section>
	);
}
