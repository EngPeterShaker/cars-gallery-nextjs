import { CarItem } from "@/types/Car.model";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./intialState";

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
