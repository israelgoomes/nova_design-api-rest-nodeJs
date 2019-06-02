const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{

        connection: process.env.connection || 'mongodb+srv://israel:88096672@cluster0-xzat1.mongodb.net/novadesign'
    }
}

module.exports = variables;