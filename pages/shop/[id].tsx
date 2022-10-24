import React, { Fragment } from "react";
import { Link, Text, View } from "vcc-ui";
import { useSelector } from "react-redux";
import { selectCarById, StoreState } from "@/store/car-slice";
import CarCard from "@/components/CarCard";
import { CarItem } from "@/types/Car.model";
import styled from "styled-components";

//#region types
interface Props {
	params: {
		id: string;
	};
}
//#endregion

//#region styles
const CardContainer = styled.div`
	padding: 3em;
	width: 50%;
	margin: 0 auto;
`;
const LinkStyled = styled(Link)`
	padding: 3em;
	width: 100%;
	margin: 2em auto;
	margin-left: 2em;
`;
//#endregion

const ShopCar = (props: Props) => {
	const { params } = props;
	const { id } = params;

	const SelectedCarItem: CarItem | undefined = useSelector(
		({ car: carSLice }: { car: StoreState }) => {
			return selectCarById(carSLice as any, id);
		}
	);

	return (
		<Fragment>
			<LinkStyled href="/" arrow="left">
				Home
			</LinkStyled>
			<CardContainer>
				<Text as="h2" variant="peary">
					Shop now {id}
				</Text>
				{SelectedCarItem && (
					<CarCard carItem={SelectedCarItem} showLinks={false} />
				)}
			</CardContainer>
		</Fragment>
	);
};

// #endregion

export default ShopCar;

export const getServerSideProps = async (props: any) => {
	const { params } = props;
	return {
		props: {
			params,
		},
	};
};
