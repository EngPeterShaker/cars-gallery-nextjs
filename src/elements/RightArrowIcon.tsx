import React from "react";
import ChevronCircled from "@/public/icons/chevron-circled.svg";
import styled from "styled-components";

const IconWrapper = styled.span`
	cursor: pointer;
	margin: 2em;

	svg {
		width: 3.5em;
		height: 3.5em;
	}
	:hover {
		fill: red;
	}
`;
const RightArrowIcon = () => {
	return (
		<IconWrapper>
			<ChevronCircled />
		</IconWrapper>
	);
};
export default RightArrowIcon;
