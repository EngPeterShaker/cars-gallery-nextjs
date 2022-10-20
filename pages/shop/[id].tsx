import React from "react";
import { useRouter } from "next/router";
// import styled from "styled-components";

import PropTypes from "prop-types";
import { Link } from "vcc-ui";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const ShopCar = (props: any) => {
	const router = useRouter();

	const { params } = props;
	const { id } = params;
	// console.log({ params });
	// const router = useRouter();
	// const id = router.query.id as string;
	return (
		<div>
			<Link href="/" arrow="left">
				Home
			</Link>
			{/* <span onClick={() => router.back()}>Click here to go back</span> */}
			<div>Shop now {id}</div>
		</div>
	);
};

ShopCar.propTypes = propTypes;
ShopCar.defaultProps = defaultProps;
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
