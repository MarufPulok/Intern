const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoppingItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const ShoppingItem = mongoose.model('ShoppingItem', shoppingItemSchema);

module.exports = ShoppingItem;
