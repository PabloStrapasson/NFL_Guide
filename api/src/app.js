import express from "express"
import routes from "./routes/routes.js"
import connectDatabase from "./config/DBConnect.js"

const connection = await connectDatabase()

connection.on("error", (error) => {
    console.error("erro de conexão", error)
})

connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
})

const app = express()
routes(app)

export default app