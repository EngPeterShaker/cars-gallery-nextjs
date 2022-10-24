import React, { useState } from "react";
import { SelectInput } from "vcc-ui";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllCarsBodyTypes } from "@/store/car-slice";
import { carAction } from "@/store/car-slice";
import { StoreState } from "../store/car-slice";

// #region styled-components
const FilterContainer = styled.div`
	padding: 2em 1em;
`;
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

	const onChange = (valueSelected: string) => {
		setValue(valueSelected);
		dispatch(carAction.setSelectedFilter(valueSelected));
	};
	return (
		<FilterContainer>
			<SelectInput
				label={"Filter by body type"}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value="all">Show All</option>
				{carModelTypes.map((modelType) => {
					return (
						<option key={modelType} value={modelType}>
							{modelType}
						</option>
					);
				})}
			</SelectInput>
		</FilterContainer>
	);
};

// #endregion

export default Filter;
