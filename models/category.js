const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String, //show the name of each category of food
        required: true 
    },
    sortOrder: Number //order number sorted in order
}, {
    timestamps: true // list the time
});

module.exports = mongoose.model('Category', categorySchema);