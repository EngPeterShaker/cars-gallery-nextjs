import React, { Fragment } from "react";
import Image from "next/image";
import { Link, Spacer, Text, View, Block } from "vcc-ui";
import { CarItem } from "@/types/Car.model";
import styled from "styled-components";

// #region types
interface Props {
	carItem: CarItem;
	showLinks?: boolean;
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

const CarCard = (props: Props) => {
	const { carItem, showLinks = true } = props;
	const { imageUrl, modelName, bodyType, id, modelType } = carItem;
	return (
		<Fragment>
			<CardStyled>
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
							<Text
								variant="kelly"
								extend={{ color: "#8c8c8c", padding: "2em" }}
							>
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
					{showLinks && (
						<View direction="row" justifyContent="center">
							<Link href={`/learn/${id}`} arrow="right">
								Learn
							</Link>
							<Spacer />
							<Link href={`/shop/${id}`} arrow="right">
								Shop
							</Link>
						</View>
					)}
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
