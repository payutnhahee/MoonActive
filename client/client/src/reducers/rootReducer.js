import { combineReducers } from 'redux';
import promotionReducer from './promotionReducer';

export default combineReducers({
    promotion: promotionReducer
});