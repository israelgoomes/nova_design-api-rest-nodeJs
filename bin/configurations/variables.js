const variables = {
  Api: {
    port: process.env.port || 3000
  },
  Database: {
    //conectando ao mongoDB
    connection:
      process.env.connection ||
      "mongodb+srv://user:password@cluster0-xzat1.mongodb.net/nomeDoBanco"
  },
  Security: {
    secretKey: "364e569fdc48b433c95dda58009d3737"
  }
};

module.exports = variables;
