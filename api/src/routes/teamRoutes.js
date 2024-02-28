import express from "express"
import TeamController from './../controllers/teamController.js'

const routes = express.Router()

routes.get("/teams", TeamController.searchTeams)
routes.get("/teams/search", TeamController.searchTeamByName)
routes.get("/teams/:id", TeamController.searchTeamById)
routes.post("/teams", TeamController.addTeam)
routes.put("/teams/:id", TeamController.updateTeam)
routes.delete("/teams/:id", TeamController.deleteTeam)

export default routes