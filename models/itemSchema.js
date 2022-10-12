const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: {
        type: String, // show item name as a string
        required: true
    },
    emoji: String, //until i use the pictures from the api
    category: { // title of the schema
        type: Schema.Types.ObjectId, //reference the category object for the id
        ref: 'Category'
    },
    price: {
        type: Number,
        required: true,
        default: 0 //price by default set to 0
    }
}, {
    timestamps: true
});

module.exports = itemSchema;