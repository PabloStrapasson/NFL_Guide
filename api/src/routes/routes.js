import express from "express"
import cors from "cors"
import teams from "./teamRoutes.js"

const routes = (app) => {
    
    //app.use(cors({ origin: ['http://127.0.0.1:3000/', 'http://localhost:3000/'] }))
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
      });
    app.route("/").get((req, res) => {
        res.status(200).send("API Blog NFL no ar")
    })
    app.use(express.json(), teams)
}

export default routes