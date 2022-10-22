import React, { Fragment } from "react";
import Image from "next/image";
import { Link as VccLink, Spacer, Text, Flex, View, Block } from "vcc-ui";
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
	const { imageUrl, modelName, bodyType, id, modelType } = carItem;
	return (
		<Fragment>
			<CardStyled>
				{/* <View>
					<Image
						src={imageUrl}
						width={"100%"}
						height={"100%"}
						// layout="fill"
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
				</View> */}
				<View
					padding={2}
					marginBottom={2}
					marginTop={2}
					extend={{ textAlign: "start" }}
					data-testid={`pcard-${id}`}
				>
					<Text
						as="h4"
						variant="kelly"
						subStyle="emphasis"
						extend={{ color: "#8c8c8c" }}
					>
						{bodyType}
					</Text>
					<View
						direction={{ default: "column", fromL: "row" }}
						alignItems={{ default: "start", fromM: "left" }}
					>
						<Text
							as="h5"
							variant="hillary"
							subStyle="emphasis"
							extend={{ marginRight: 10 }}
						>
							{modelName}
						</Text>
						<Block extend={{ display: "block" }}>
							{/* <Text extend={{ fontSize: '2rem', color: 'navy' }}>Big Navy Columbus.</Text> */}
							<Text variant="kelly" extend={{ color: "#8c8c8c" }}>
								{modelType}
							</Text>
						</Block>
					</View>
					<Spacer />
					<Image
						width={320}
						height={240}
						src={imageUrl}
						layout="intrinsic"
						priority
						alt={`${modelName} - ${modelType}`}
					/>
					<View direction="row" justifyContent="center">
						<Link href={`/learn/${id}`}>
							<VccLink arrow="right">Learn</VccLink>
						</Link>
						<Spacer />
						<Link href={`/shop/${id}`}>
							<VccLink arrow="right">Shop</VccLink>
						</Link>
					</View>
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
