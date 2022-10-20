import React from "react";
import Image from "next/image";
import { Col, Card, CardContent, Link, Spacer, Text, Flex } from "vcc-ui";
import { CarItem } from "@/types/Car.model";

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
const CarCard = (carItem: any) => {
	const { imageUrl, modelName, bodyType, id } = carItem.carItem;
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
							<Link href={`/learn/${id}`} arrow="right">
								Learn
							</Link>
						</Flex>
						<Flex>
							<Link href={`/shop/${id}`} arrow="right">
								Shop
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
