import { GET_PROMOTIONS, UPDATE_PROMOTION, DELETE_PROMOTION, DUPLICATE_PROMOTION, PROMOTIONS_LOADING, GET_PROMOTIONS_COLUMNS } from '../actions/actionTypes';
 
const initialState = {
    promotions: [],
    columns: [],
    loading: false,
};

export default function promotionReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PROMOTIONS: {
            return { 
                ...state, 
                promotions: action.payload,
                loading: false
            };
        }
        case UPDATE_PROMOTION: {
            return {
                ...state,
                promotions: state.promotions.map((promo) => {
                    if (promo._id !== action.payload._id) return promo
                    return action.payload
                })
            };
        }
        case DELETE_PROMOTION: {
            return {
                ...state,
                promotions: state.promotions.filter((promo) => promo._id !== action.payload)
            }
        }
        case DUPLICATE_PROMOTION: {
            const { payload, index } = action;
            return {
                ...state,
                promotions: [...state.promotions.slice(0, index + 1), 
                    payload, ...state.promotions.slice(index + 1)]
            };
        }
        case PROMOTIONS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_PROMOTIONS_COLUMNS: {
            return {
                ...state,
                columns: action.payload
            }
        }
        default: {
            return state;
        }
    }
} 