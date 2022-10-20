import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./car-slice";

const store = configureStore({
	reducer: {
		car: carSlice.reducer,
	},
});

export default store;
