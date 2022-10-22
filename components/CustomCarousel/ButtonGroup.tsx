import * as React from "react";
import styled from "styled-components";
import ChevronCircledIcon from "@/src/elements/ChevronCircled";

const BtnGroupWrapper = styled.div`
	text-align: right;
`;

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
	const { totalItems, currentSlide } = carouselState;
	return (
		<BtnGroupWrapper className="custom-button-group">
			<span onClick={() => previous()} className="custom-left-arrow">
				{/* <LeftArrowIcon /> */}
				<ChevronCircledIcon direction={"left"} />
			</span>
			<span onClick={() => next()} className="custom-left-arrow">
				<ChevronCircledIcon direction={"right"} />
			</span>
		</BtnGroupWrapper>
	);
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
	return (
		<div
			style={{
				textAlign: "center",
			}}
		>
			<h4>These buttons can be positioned anywhere you want on the screen</h4>
			<button onClick={previous}>Prev</button>
			<button onClick={next}>Next</button>
		</div>
	);
};

export { CustomButtonGroup, CustomButtonGroupAsArrows };

// export default ButtonGroup;
