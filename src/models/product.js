const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
  },
}, {
  timestamps: true,
});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = { ProductSchema, ProductModel };
