const mongoose = require('mongoose');
const promotionTypes = require('../constants/PromotionTypes.const');
const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: Object.values(promotionTypes),
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    userGroupName: {
        type: String,
        required: true
    }
})

module.exports = Promotions = mongoose.model('Promotion', PromotionSchema);