import React from "react";
import ChevronCircledIcon from "@/public/icons/chevron-circled.svg";
import styled from "styled-components";

const IconWrapper = styled.span<{ direction: string }>`
	cursor: pointer;

	svg {
		width: 3.5em;
		height: 3.5em;
		transform: rotate(${(props) => props.direction}deg);
		&:hover {
			width: 3.55em;
			height: 3.55em;
			// background: #8080804a;
		}
	}
`;

interface Props {
	direction?: "right" | "left" | "up" | "down";
}

const directionInDegrees = {
	right: "0",
	down: "90",
	left: "180",
	up: "270",
};

const ChevronCircled = (props: Props) => {
	const { direction = "right" } = props;
	console.log(`object`, directionInDegrees[direction]);
	return (
		<IconWrapper direction={directionInDegrees[direction]}>
			<ChevronCircledIcon />
		</IconWrapper>
	);
};
export default ChevronCircled;
