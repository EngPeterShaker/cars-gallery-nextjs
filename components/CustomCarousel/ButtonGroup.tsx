import * as React from "react";
import styled from "styled-components";
import ChevronCircledIcon from "@/src/elements/ChevronCircled";
import { MAX_ITEMS_PER_PAGE } from "./ResponsiveCarouselConfig";

const BtnGroupWrapper = styled.div`
	text-align: right;
	padding: 0rem 1rem;
`;

interface Props {
	next: () => void;
	previous: () => void;
	goToSlide: () => void;
	carouselState?: any;
}
const CustomButtonGroup = (props: Props) => {
	const { next, previous, goToSlide, carouselState } = props;
	const { totalItems = 0 } = carouselState;
	return totalItems > MAX_ITEMS_PER_PAGE ? (
		<BtnGroupWrapper className="custom-button-group" data-cy="button-group">
			<span onClick={() => previous()} className="custom-left-arrow">
				{/* <LeftArrowIcon /> */}
				<ChevronCircledIcon direction={"left"} />
			</span>
			<span onClick={() => next()} className="custom-left-arrow">
				<ChevronCircledIcon direction={"right"} />
			</span>
		</BtnGroupWrapper>
	) : (
		<></>
	);
};

export { CustomButtonGroup };
