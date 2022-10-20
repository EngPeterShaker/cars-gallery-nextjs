import React from "react";
// import { useRouter } from "next/router";
// import styled from "styled-components";
// import PropTypes from "prop-types";
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
const LearnCar = (props: any) => {
	const { params } = props;
	// console.log({ params });
	// const router = useRouter();
	// const id = router.query.id as string;
	const { id } = params;
	// console.log({ id });
	return (
		<div>
			<Link href="/" arrow="left">
				Home
			</Link>
			{/* <span onClick={() => router.back()}>Click here to go back</span> */}
			<div>Welcome to {id}</div>
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
