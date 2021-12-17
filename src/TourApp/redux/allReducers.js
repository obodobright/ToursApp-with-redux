import { combineReducers } from "redux";
import { SetToursReducer, selectedTour } from "./reducer/SetToursReducer";

export const allReducers = combineReducers({
    tour: SetToursReducer,
    selectedTour: selectedTour,
});