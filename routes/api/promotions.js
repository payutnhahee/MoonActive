const express = require('express');

const router = express.Router();

// Promotion Model
const Promotion = require('../../models/Promotion');

// @route   GET api/promotions
// @desc    Get All Promotions
// @access  Public
router.get('/', (req, res) => {
    Promotion.find()
        .sort({ date: -1 })
        .then(promotions => res.json(promotions));
});

// // @route   POST api/promotions
// // @desc    Create a promotion
// // @access  Public
router.post('/', (req, res) => {
    // TODO: remove
    console.log(req.body)
    const newPromotion = new Promotion(req.body.promotion);

    newPromotion.save().then(promotion => res.json(promotion));
});

// @route   PUT api/promotions
// @desc    Edit a promotion
// @access  Public
router.put('/', (req, res) => {
    const updatedPromotion = req.body.promotion;

    return User.findByIdAndUpdate(updatedPromotion._id, {$set: updatedPromotion})
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


module.exports = router;