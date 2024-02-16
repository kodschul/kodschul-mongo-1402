const mongoose = require("mongoose");

// start connection

mongoose.connect("mongodb://127.0.0.1:27017/todo");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dueDate: Date,
  status: { type: String, enum: ["Offen", "In Arbeit", "Erledigt"] },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

taskSchema.virtual("isOverdue").get(function () {
  return Date.now() > this.dueDate && this.status !== "Erledigt";
});

const User = mongoose.model("User", userSchema);
const Task = mongoose.model("Task", taskSchema);

async function main() {
  //   const users = await User.find({});
  //   console.log(users);

  //   const tasks = await Task.find({});
  //   console.log(tasks);

  const task = await Task.findOne({});

  console.log(task.isOverdue, task);

  // disconnect
  mongoose.disconnect();
}

async function seed() {
  await User.insertMany([
    { username: "user1", email: "user1@example.com" },
    { username: "user2", email: "user2@example.com" },
  ]);

  await Task.insertMany([
    {
      title: "Task 1",
      description: "Description for Task 1",
      assignedTo: "65cf54437de5d410b5b9c5af",
      dueDate: new Date(),
      status: "Offen",
    },
    {
      title: "Task 2",
      description: "Description for Task 2",
      assignedTo: "65cf54437de5d410b5b9c5ae",
      dueDate: new Date(),
      status: "In Arbeit",
    },
    {
      title: "Task 3",
      description: "Description for Task 3",
      assignedTo: "65cf54437de5d410b5b9c5af",
      dueDate: new Date(),
      status: "Erledigt",
    },
  ]);
}

// seed();
main();
