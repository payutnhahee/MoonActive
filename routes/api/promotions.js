const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promotion = require('../../models/Promotion');
const ColumnSchema = new Schema({}, { strict: false });
const Column = mongoose.model('Column', ColumnSchema, 'columns');

// @route   GET api/promotions
// @desc    Get All Promotions
// @access  Public
router.get('/', (req, res) => {
    const page = req.query.page;
    Promotion.find()
        .sort({ date: -1 })
        .then(promotions => res.json(promotions));
});

// // @route   POST api/promotions
// // @desc    Create a promotion
// // @access  Public
router.post('/', (req, res) => {
    const newPromotion = new Promotion(req.body);

    newPromotion.save().then(promotion => res.json(promotion));
});

// @route   PUT api/promotions
// @desc    Edit a promotion
// @access  Public
router.put('/:id', (req, res) => {
    const updatedPromotion = req.body;

    return Promotion.findByIdAndUpdate(updatedPromotion._id, {$set: updatedPromotion}, {useFindAndModify: false, new: true})
        .then(promotion => res.json(promotion))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE api/promotions/:id
// @desc    Delete a promotion
// @access  Public
router.delete('/:id', (req, res) => {
    Promotion.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
        // if id is not valid
        .catch(err => res.status(404).json({ success: false }));
})

// @route   GET api/promotions/columns
// @desc    Get columns of Promotions table
// @access  Public
router.get('/columns', (req, res) => {
    Column.find()
        .then(columns => {
            res.json(columns);
        })
        .catch(err => {
            res.status(500).json({ success: false });
        });
})

module.exports = router;