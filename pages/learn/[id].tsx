import React from "react";
import { useSelector } from "react-redux";

import CarCard from "@/components/CarCard";
import { selectCarById } from "@/store/car-slice";
import { CarItem } from "@/types/Car.model";
// import { useRouter } from "next/router";
// import styled from "styled-components";
// import PropTypes from "prop-types";
import { Link as VccLink } from "vcc-ui";
import Link from "next/link";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const LearnCar = ({ params }: any) => {
	const { id } = params;
	const SelectedCarItem: CarItem = useSelector(({ car: carSLice }) => {
		return selectCarById(carSLice as any, id);
	});
	console.log(`SelectedCarItem`, SelectedCarItem);

	return (
		<div>
			<Link href="/">
				<VccLink arrow="left">Home</VccLink>
			</Link>
			{/* <span onClick={() => router.back()}>Click here to go back</span> */}
			<div>Welcome to {id}</div>
			<CarCard carItem={SelectedCarItem} />
		</div>
	);
};

// LearnCar.propTypes = propTypes;
// LearnCar.defaultProps = defaultProps;
// #endregion

export default LearnCar;

export const getServerSideProps = async (props: any) => {
	const { params } = props;
	return {
		props: {
			params,
		},
	};
};
