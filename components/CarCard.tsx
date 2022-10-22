import React, { Fragment } from "react";
import Image from "next/image";
import {
	Col,
	Card,
	CardContent,
	Link as VccLink,
	Spacer,
	Text,
	Flex,
	View,
} from "vcc-ui";
import { CarItem } from "@/types/Car.model";
import Link from "next/link";
import styled from "styled-components";

// #region constants
interface Props {
	carItem: CarItem;
}
// #endregion

// #region styled-components
const CardStyled = styled(View)`
	padding: 4em;
	margin: 2em;
	background: white;
	img {
		width: 100%;
		height: 100%;
	}
`;
// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const CarCard = (props: Props) => {
	const { carItem } = props;
	const { imageUrl, modelName, bodyType, id } = carItem;
	return (
		// <div>
		// <Col
		// 	size={{
		// 		default: 10,
		// 		fromM: 4,
		// 		fromL: 3,
		// 		fromXL: 6,
		// 	}}
		// >
		<Fragment>
			<CardStyled>
				<View>
					<Image
						src={imageUrl}
						// width={"100%"}
						// height={"100%"}
						layout="fill"
						alt={`${id} - car image `}
						priority={true}
					/>
					<Text variant="ootah">{modelName}</Text>
					<Text>{bodyType}</Text>
					<Flex
						extend={{
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-evenly",
							alignItems: "stretch",
							alignContent: "center",
						}}
					>
						<Flex>
							<Link href={`/learn/${id}`}>
								<VccLink arrow="right">Learn</VccLink>
							</Link>
						</Flex>
						<Flex>
							<Link href={`/shop/${id}`}>
								<VccLink arrow="right">Shop</VccLink>
							</Link>
						</Flex>
					</Flex>
				</View>
			</CardStyled>
			<Spacer />
			<Spacer />
		</Fragment>
		// </Col>
	);
};

// #endregion

export default CarCard;
