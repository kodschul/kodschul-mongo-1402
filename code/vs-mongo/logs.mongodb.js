use("test");

// db.createCollection("logs");

// db.logs.insertMany([
//   {
//     server: "abc1.de",
//     status: "failed",
//     time: 123,
//   },
//   {
//     server: "def.de",
//     status: "failed",
//     time: 123,
//   },
//   {
//     server: "abc1.de",
//     status: "success",
//     time: 124,
//   },
//   {
//     server: "def.de",
//     status: "success",
//     time: 124,
//   },
//   {
//     server: "abc1.de",
//     status: "failed",
//     time: 125,
//   },
// ]);

// failed jobs
db.logs.aggregate([
  {
    $sort: {
      time: -1,
    },
  },

  {
    $group: {
      _id: "$server",
      newStatus: { $first: "$status" },
    },
  },

  {
    $match: {
      newStatus: "failed",
    },
  },
  {
    $limit: 10,
  },
]);
