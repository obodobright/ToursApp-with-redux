import { ActionTypes } from "../Action-types/ActionTypes";

const initialState = {
    tours: [],
};
export const SetToursReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TOURS:
            return {...state, tours: action.payload };
        default:
            return state;
    }
};

export const selectedTour = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_TOURS:
            return {...state, ...action.payload };
        case ActionTypes.REMOVE_SELECTED_TOURS:
            return {};
        default:
            return state;
    }
};