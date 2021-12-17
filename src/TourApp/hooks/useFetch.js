import React from "react";
import { useDispatch } from "react-redux";
import { setTours } from "../redux/Actions/ToursAction";
export const useFetch = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchTours = async(url) => {
        setLoading(true);
        try {
            await fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    dispatch(setTours(data));
                });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("error", error.message);
            setError("A network error occured");
        }
    };
    return { loading, error, fetchTours };
};