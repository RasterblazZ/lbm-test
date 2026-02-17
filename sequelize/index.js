const { Sequelize, DataTypes } = require('sequelize');
const tedious = require('tedious'); // Tedious is the underlying driver
require('dotenv').config()

// 1. Configure the connection
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: 'localhost',
    dialect: 'mssql', 
    dialectOptions: {
        options: {
            encrypt: true, 
        },
    },
    logging: false, 
});

const User = sequelize.define('Curso', {
    idCurso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombreCurso: {
        type: DataTypes.STRING
    },
    idGrado: {
        type: DataTypes.STRING
    },
    idCarrera :{
        type: DataTypes.STRING
    },
}, {
    tableName: 'Curso' 
});

async function runExample() {
    try {
        // Authenticate the connection
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // // Create a new user
        // const newUser = await User.create({ firstName: "John", lastName: "Doe" });
        // console.log("New user created with ID:", newUser.id);

        // Find all users
        const users = await User.findAll();
        console.log("All Cursos:", JSON.stringify(users, null, 2));

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
    }
}

runExample();
