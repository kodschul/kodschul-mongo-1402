use("admin");

db.createUser({
  user: "adminUser",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
});
