// import { createConnection } from 'typeorm'

// createConnection();
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 54320,
    "username": "docker",
    "password": "rentx",
    "database": "rentx",
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })