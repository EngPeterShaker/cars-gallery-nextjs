import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "vcc-ui";
import CarCard from "@/components/CarCard";
import { CarItem } from "@/types/Car.model";
import styled from "styled-components";
import { StoreState } from "@/types/State.models";
import { selectCarById } from "@/store/selectors";

// #region types
interface Props {
	params: {
		id: string;
	};
}
// #endregion

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

const LearnCar = (props: Props) => {
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
				<div>Here You can learn more about{id}</div>
				{SelectedCarItem && (
					<CarCard carItem={SelectedCarItem} showLinks={false} />
				)}
			</CardContainer>
		</Fragment>
	);
};

export default LearnCar;

export const getServerSideProps = async (props: any) => {
	const { params } = props;
	return {
		props: {
			params,
		},
	};
};
