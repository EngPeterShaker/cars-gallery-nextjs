import { CarItem } from "@/types/Car.model";
import { StoreState } from "@/types/State.models";
import { createSelector } from "@reduxjs/toolkit";

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
