import axios from "axios";
import {
    GET_PROMOTIONS_COLUMNS,
    GET_PROMOTIONS,
    UPDATE_PROMOTION,
    DELETE_PROMOTION,
    DUPLICATE_PROMOTION,
    PROMOTIONS_LOADING,
} from "./actionTypes";

export const getPromotions = () => async (dispatch) => {
    dispatch(setPromotionsLoading());
    try {
        // TODO: pagination
        const { data } = await axios.get("/api/promotions");
        return dispatch({
            type: GET_PROMOTIONS,
            payload: data,
        });
    } catch (err) {
        console.warn(err);
    }
};

export const getColumns = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/api/promotions/columns");
        return dispatch({
            type: GET_PROMOTIONS_COLUMNS,
            payload: data,
        });
    } catch (err) {
        console.warn(err);
    }
};

export const updatePromotion = (updatedPromotion) => async (dispatch) => {
    try {
        const { data } = await axios.put(
            `/api/promotions/${updatedPromotion._id}`,
            updatedPromotion
        );
        return dispatch({
            type: UPDATE_PROMOTION,
            payload: data,
        });
    } catch (err) {
        console.warn(err);
    }
};

export const deletePromotion = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/promotions/${id}`);
        return dispatch({
            type: DELETE_PROMOTION,
            payload: id,
        });
    } catch (err) {
        console.warn(err);
    }
};

export const duplicatePromotion = (promotion, index) => async (dispatch) => {
    let duplicate = {...promotion};
    delete duplicate._id;
    try {
        const { data } = await axios.post(`/api/promotions`, duplicate);
        return dispatch({
            type: DUPLICATE_PROMOTION,
            payload: data,
            index: index,
        });
    } catch (err) {
        console.warn(err);
    }
};

export const setPromotionsLoading = () => {
    return {
        type: PROMOTIONS_LOADING,
    };
};
