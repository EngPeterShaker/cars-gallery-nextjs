import React from "react";
import LeftLogo from "@/public/icons/chevron-circled.svg";
import styled from "styled-components";

// margin: 0 2em;
const IconWrapper = styled.span`
cursor: pointer;
	svg {
		transform: rotate(180deg);
		cursor:pointer
		width: 3.5em;
		height: 3.5em;
	}
`;
const LeftArrowIcon = () => {
	return (
		<IconWrapper className="LeftArrowIcon ">
			<LeftLogo />
		</IconWrapper>
	);
};
export default LeftArrowIcon;
