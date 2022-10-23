import React, { Children, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomButtonGroup } from "@/components/CustomCarousel/ButtonGroup";
import ResponsiveConfig from "@/components/CustomCarousel/ResponsiveCarouselConfig";
import useWindowSize from "@/src/hooks/useWindowSize";

// #region constants
//

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const CustomCarousel = (props: any) => {
	const deviceType: string = useWindowSize();

	return (
		<Fragment>
			<Carousel
				swipeable={true}
				draggable={true}
				responsive={ResponsiveConfig}
				ssr={true} // means to render carousel on server-side.
				keyBoardControl={true}
				customTransition="smooth 500"
				transitionDuration={500}
				// containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
				// deviceType={this.props.deviceType}
				// dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-10-px"
				renderButtonGroupOutside={true}
				customButtonGroup={
					deviceType === "Desktop" ? (
						<CustomButtonGroup
							next={function (): void {
								throw new Error("Function not implemented.");
							}}
							previous={function (): void {
								throw new Error("Function not implemented.");
							}}
							goToSlide={function (): void {
								throw new Error("Function not implemented.");
							}}
						/>
					) : (
						<></>
					)
				}
				showDots={deviceType === "Desktop" ? false : true}
				slidesToSlide={1}
				containerClass="carousel-with-custom-dots"
				partialVisible
				infinite
			>
				{props.children}
			</Carousel>
		</Fragment>
	);
};
{
}

// #endregion

export default CustomCarousel;
