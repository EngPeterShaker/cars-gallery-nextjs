import React from "react";
import Image from "next/image";
import {
	Col,
	Card,
	CardContent,
	Link as VccLink,
	Spacer,
	Text,
	Flex,
} from "vcc-ui";
import { CarItem } from "@/types/Car.model";
import Link from "next/link";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 *
 */
const CarCard = ({ carItem }) => {
	const { imageUrl, modelName, bodyType, id } = carItem;
	return (
		// <div>
		<Col
			size={{
				default: 4,
				fromM: 3,
				fromL: 6,
				fromXL: 10,
			}}
		>
			<Card>
				<Image
					src={imageUrl}
					width={"100%"}
					height={"100%"}
					alt={`${id} - car image `}
					priority={true}
				/>
				<CardContent>
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
				</CardContent>
			</Card>
			<Spacer />
			<Spacer />
		</Col>
	);
};

// #endregion

export default CarCard;
