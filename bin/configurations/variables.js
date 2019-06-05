const variables = {
  Api: {
    port: process.env.port || 3000
  },
  Database: {
    connection:
      process.env.connection ||
      "mongodb+srv://israel:88096672@cluster0-xzat1.mongodb.net/novadesign"
  },
  Security: {
    secretKey: "364e569fdc48b433c95dda58009d3737"
  }
};

module.exports = variables;
