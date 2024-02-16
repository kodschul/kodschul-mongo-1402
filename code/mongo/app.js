const mongoose = require("mongoose");

const { Schema } = mongoose;

// start connection

mongoose.connect("mongodb://127.0.0.1:27017/jsmongo");

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

async function main() {
  const aliceEmail = await User.findOne({
    email: {
      $regex: /^alice/i,
    },
  });

  const alice = await User.findById("65ce25e2db9db147257d17e3");

  alice.name = "Alice2";
  await alice.save();

  await alice.deleteOne();

  console.log(`Hi ${alice.name}, you're ${alice.age} y/o!`);
  // create new user
  // const alice = new User({ name: "Alice", age: 20, email: "alice@dot.com" });
  // await alice.save();

  // console.log(alice);

  // disconnect
  mongoose.disconnect();
}

main();
