import React, { Children, Fragment } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
	CustomButtonGroup,
	CustomLeftArrow,
	CustomRightArrow,
} from "@/components/CustomCarousel/ButtonGroup";
import ResponsiveConfig from "@/components/CustomCarousel/ResponsiveCarouselConfig";

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
const CustomCarousel = (props) => {
	return (
		<Fragment>
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={ResponsiveConfig}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				// autoPlay
				// autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="smooth 500"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-10-px"
				renderButtonGroupOutside={true}
				customButtonGroup={<CustomButtonGroup />}
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
