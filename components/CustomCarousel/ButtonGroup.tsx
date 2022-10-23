import * as React from "react";
import styled from "styled-components";
import ChevronCircledIcon from "@/src/elements/ChevronCircled";

const BtnGroupWrapper = styled.div`
	text-align: right;
`;

interface Props {
	next: () => void;
	previous: () => void;
	goToSlide: () => void;
}
const CustomButtonGroup = (props: Props) => {
	const { next, previous, goToSlide } = props;
	return (
		<BtnGroupWrapper className="custom-button-group" data-cy="button-group">
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

export { CustomButtonGroup };
