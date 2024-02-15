use("social-network");

// db.users.find({
//   username: { $not: { $regex: /test/i } },
// });

// custom where function

db.users.find({
  $where: function () {
    let allInstances = this.instances ? this.instances : {};

    for (let key in allInstances) {
      let instance = allInstances[key];
      if (instance.stage == 0) {
        return true;
      }
    }

    return false;
  },
});
