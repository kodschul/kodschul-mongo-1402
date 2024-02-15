use("test");

// db.logs.createIndex({
//   status: 1,
// });

db.logs.createIndex({
  server: 1,
  status: 1,
});
