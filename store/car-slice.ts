import { CarItem } from "@/types/Car.model";
import { createSlice, createSelector } from "@reduxjs/toolkit";

export type StoreState = {
	allCarsList: CarItem[];
	updatedCarsList: CarItem[];
	filter: string;
};

const initialState: StoreState = {
	allCarsList: [],
	updatedCarsList: [],
	filter: "all",
};

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {
		updateCarsList: (state, action) => {
			const { carsList, filter = "all" } = action.payload;
			state.allCarsList = carsList;
			state.updatedCarsList = carsList;
		},
		setSelectedFilter: (state, action) => {
			state.filter = action.payload;
			const filter = action.payload;
			if (filter !== "all") {
				state.updatedCarsList = state.allCarsList.filter(
					(carItem) => carItem.bodyType == filter
				);
			} else {
				state.updatedCarsList = state.allCarsList;
			}
		},
	},
});

export default carSlice;

export const carAction = carSlice.actions;

//Selectors
export const getCarsList = (state: StoreState) => state.allCarsList;

export const selectCarById = createSelector(
	getCarsList,
	(_: any, id: string) => id,
	(carsList, id) => carsList.find((carItem: CarItem) => carItem.id === id)
);

// @returns a dynamic list of all body types in the carsList
export const getAllCarsBodyTypes = createSelector(getCarsList, (carsList) => {
	const duplicateArrayOFBodyTypes = carsList?.map(
		(carItem: CarItem) => carItem.bodyType
	);
	return [...new Set(duplicateArrayOFBodyTypes)];
});
