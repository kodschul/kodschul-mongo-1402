use("mongodbVSCodePlaygroundDB");

// sales mit Preisen zwischen 5€ & 10€
// x <= 10 & x >= 7
db.sales.find({
  price: {
    $gte: 7,
    $lte: 10,
  },
  // $and: [{ price: { $gte: 7 } }, { price: { $lte: 9 } }],
});

// sales mit Preisen die entweder 5€ oder 10€
// x = 10 || x = 5

db.sales.find({
  $or: [{ price: 5 }, { price: 10 }],
});

// sales mit Preisen die entweder 5€ kosten oder die Menge über 1 habene

db.sales.find({
  $or: [{ price: 5 }, { quantity: { $gte: 5 } }],
});

// sales die nicht 5€ kosten
db.sales.find({
  price: {
    // $not: { $eq: 5 },
    $ne: 5,
  },
});

// sales die weder 5€ wert sind noch die Menge 5 haben

db.sales.find({
  $nor: [{ price: 5 }, { quantity: 5 }],
});

// sales mit Preisen die entweder 5€ oder 10€ mit einer Array
// x = 10 || x = 5

db.sales.find({
  price: { $in: [5, 10] },
});

// sales mit Preisen die weder 5€ noch 10€ mit einer Array
// x != 10 & x != 5

db.sales.find({
  price: { $nin: [5, 10] },
});
