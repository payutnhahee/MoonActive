import axios from "axios";
import {
    GET_PROMOTIONS,
    UPDATE_PROMOTION,
    DELETE_PROMOTION,
    DUPLICATE_PROMOTION,
    PROMOTIONS_LOADING,
} from "./actionTypes";

import { addIds } from "../temp/convertId";

export const getPromotions = () => async (dispatch) => {
    dispatch(setPromotionsLoading());
    try {
        const { data } = await axios.get("/api/promotions");
        dispatch({
            type: GET_PROMOTIONS,
            // TODO: delete addIds call
            payload: addIds(data),
        });
    } catch (err) {
        console.warn(err);
    }
};

export const updatePromotion = (updatedPromotion) => async (dispatch) => {
    try {
        const updated = await axios.put(
            `/api/promotions/${updatedPromotion._id}`,
            updatedPromotion
        );
        dispatch({
            type: UPDATE_PROMOTION,
            payload: updated,
        });
    } catch (err) {
        console.warn(err);
    }
};

export const deletePromotion = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/promotions/${id}`);
        dispatch({
            type: DELETE_PROMOTION,
            payload: id,
        });
    } catch (err) {
        console.warn(err);
    }
};

export const duplicatePromotion = (promotion, index) => async (dispatch) => {
    let duplicate = promotion;
    delete duplicate._id;
    try {
        const newPromotion = await axios.post(`/api/promotions`, duplicate);
        dispatch({
            type: DUPLICATE_PROMOTION,
            payload: newPromotion,
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
