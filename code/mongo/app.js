const mongoose = require("mongoose");

const { Schema } = mongoose;

// start connection

mongoose.connect("mongodb://127.0.0.1:27017/tweets");

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

(async () => {
  const allUsers = await User.find({});
  console.log(allUsers);

  // create new user
  const alice = new User({ name: "Alice", age: 20, email: "alice@dot.com" });
  //   await alice.save();

  console.log(alice);

  // disconnect
  mongoose.disconnect();
})();
