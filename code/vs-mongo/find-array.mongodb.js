use("test");

// db.createCollection("grades");

// db.grades.insertMany([
//   { username: "alice", results: [1, 4, 3, 6] },
//   { username: "bob", results: [4, 3, 5, 6] },
// ]);

// Schüler finden die Noten besser als 2 haben
// -> alice
// db.grades.find({
//   results: { $elemMatch: { $lte: 2 } },
// });

// // Schüler finden die Noten schlechter als 4 haben
// // -> bob
// db.grades.find({
//   results: { $elemMatch: { $eq: 4 } },
// });

// db.grades.find({
//   results: { $all: [3, 6] },
// });

// db.createCollection("students");

db.students.insertMany([
  {
    name: "alice",
    grades: [
      { subject: "maths", score: 1 },
      { subject: "physics", score: 2 },
      { subject: "biology", score: 3 },
    ],
  },
  {
    name: "bob",
    grades: [
      { subject: "maths", score: 4 },
      { subject: "physics", score: 5 },
      { subject: "biology", score: 3 },
    ],
  },
  {
    name: "sara",
    grades: [
      { subject: "maths", score: 3 },
      { subject: "it", score: 1 },
      { subject: "biology", score: 2 },
    ],
  },
]);

// Schüler der besser als 2 in Mathe hat

db.students.find({
  grades: { $elemMatch: { subject: "maths", score: { $lte: 2 } } },
});

// Schüler der schlechter als 2 in einem Fach

db.students.find(
  {
    grades: { $elemMatch: { score: { $gt: 2 } } },
  },
  { name: 1 }
);

// db.students.aggregate
