const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// give access to items in this file
module.exports = Item = mongoose.model('item', ItemSchema);