const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Snack = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'category', required: true }
})

mongoose.model('snack', Snack)
