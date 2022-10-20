import React from "react";
import { useRouter } from "next/router";
// import styled from "styled-components";
import { Link as VccLink } from "vcc-ui";
import { useSelector } from "react-redux";
import { selectCarById } from "@/store/car-slice";
import CarCard from "@/components/CarCard";
import { CarItem } from "@/types/Car.model";
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
const ShopCar = ({ params }: any) => {
	// const { params } = props;
	const { id } = params;

	const SelectedCarItem: CarItem = useSelector(({ car: carSLice }) => {
		return selectCarById(carSLice as any, id);
	});
	return (
		<div>
			<Link href="/">
				<VccLink arrow="left">Home</VccLink>
			</Link>
			{/* <span onClick={() => router.back()}>Click here to go back</span> */}
			<div>Shop now {id}</div>
			<CarCard carItem={SelectedCarItem} />
		</div>
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
