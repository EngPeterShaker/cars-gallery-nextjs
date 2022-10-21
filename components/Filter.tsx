import React, { useState } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";
import { SelectInput } from "vcc-ui";
import { useSelector, useDispatch } from "react-redux";
import { getAllCarsBodyTypes } from "@/store/car-slice";
import { carAction } from "@/store/car-slice";
import { StoreState } from "../store/car-slice";

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
const Filter = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const carModelTypes: string[] = useSelector(
		({ car: carSLice }: { car: StoreState }) => getAllCarsBodyTypes(carSLice)
	);
	// const carModelTypes: string[] = useSelector(({ car: carSLice }) =>
	// 	getAllCarsBodyTypes(carSLice as any)
	// );

	console.log(`carModelTypes`, carModelTypes);
	const onChange = (valueSelected: string) => {
		setValue(valueSelected);
		console.log(`valueSelected`, valueSelected);
		dispatch(carAction.setSelectedFilter(valueSelected));
	};
	return (
		<SelectInput
			label={"Label"}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			<option value="c30" disabled>
				Select a Car body type
			</option>
			<option value="all" selected>
				Show All
			</option>
			{carModelTypes.map((modelType) => {
				return (
					<option key={modelType} value={modelType}>
						{modelType}
					</option>
				);
			})}
		</SelectInput>
	);
};

// Filter.propTypes = propTypes;
// Filter.defaultProps = defaultProps;
// #endregion

export default Filter;
