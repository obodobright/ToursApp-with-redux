import { ActionTypes } from "../Action-types/ActionTypes";
export const setTours = (tourRequest) => {
    return {
        type: ActionTypes.SET_TOURS,
        payload: tourRequest,
    };
};

export const selectedTour = (tour) => {
    return {
        type: ActionTypes.SELECTED_TOURS,
        payload: tour,
    };
};
export const removeSelected = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_TOURS,
    };
};