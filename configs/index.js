const mode = "TESTING";

if (mode == "TESTING") {
  module.exports = {
    db: {
      connectionLimit: 100,
      host: "localhost",
      user: "root",
      password: "",
      database: "",
      debug: false,
    },
  };
} else {
  module.exports = {
    db: {
      connectionLimit: 100,
      host: "localhost",
      user: "root",
      password: "",
      database: "",
      debug: false,
    },
  };
}
