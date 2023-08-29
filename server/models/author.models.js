const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [3, "Three chrs at least"]
    },
    price: {
        type: Number,
        required: [
            true,
            "Price is required"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Description is required"
        ],
        minLength: [3, "Three chrs at least"]
    }
} , {timestamps:true} );

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
