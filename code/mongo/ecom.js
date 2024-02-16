const mongoose = require("mongoose");

const { Schema } = mongoose;

// start connection

mongoose.connect("mongodb://127.0.0.1:27017/ecom");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  variants: [{ size: String, color: String, stock: Number }],
  reviews: [{ author: String, rating: Number, comment: String }],
});

const Product = mongoose.model("Product", productSchema);

async function main() {
  // create many products
  await Product.insertMany([
    {
      name: "T-shirt",
      category: "Clothing",
      price: 19.99,
      variants: [
        { size: "S", color: "Blue", stock: 50 },
        { size: "M", color: "Blue", stock: 30 },
      ],
      reviews: [
        { author: "John Doe", rating: 4.5, comment: "Great quality!" },
        { author: "Jane Smith", rating: 5, comment: "Love it!" },
      ],
    },
    {
      name: "Jeans",
      category: "Clothing",
      price: 39.99,
      variants: [
        { size: "30x32", color: "Blue", stock: 40 },
        { size: "34x32", color: "Black", stock: 20 },
      ],
      reviews: [
        { author: "Alice Johnson", rating: 4, comment: "Nice fit!" },
        { author: "Bob Williams", rating: 4.5, comment: "Comfortable." },
      ],
    },
  ]);

  // disconnect
  mongoose.disconnect();
}

main();
