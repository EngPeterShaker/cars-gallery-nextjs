import { CarItem } from "@/types/Car.model";
import { createSlice, createSelector } from "@reduxjs/toolkit";

export type StoreState = {
	carsList: CarItem[];
};

const initialState: StoreState = {
	carsList: [],
};

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {
		updateCarsList: (state, action) => {
			state.carsList = action.payload;
		},
	},
});

export default carSlice;

export const carAction = carSlice.actions;

//Selectors
export const getCarsList = (state: StoreState) => state.carsList;

export const selectCarById = createSelector(
	getCarsList,
	(_: any, id: string) => id,
	(carsList, id) => carsList?.find((carItem: CarItem) => carItem.id === id)
);
