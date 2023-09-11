const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('abc', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});


let connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connection success !");
    } catch (error) {
        console.log("Connection failed !", error);
    }
}

module.exports = connectDB