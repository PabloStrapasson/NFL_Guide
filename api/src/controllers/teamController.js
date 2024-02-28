import team from "../models/Team.js"

export default class TeamController{

    static async searchTeams(req, res) {
        try {
            const team_list = await team.find({})
            res.status(200).json(team_list)
        } catch(error){
            res.status(500).json({message: `${error.message} - Falha ao buscar times!`})
        }
    }

    static async searchTeamById(req, res) {
        try {
            const team_id = req.params.id
            const search_team = await team.findById(team_id)
            if(search_team === null){
                res.status(404).json({message: 'Time não encontrado :('})
            } else {
                res.status(200).json(search_team)
            }
        } catch(error) {
            res.status(500).json({message: `${error.message} - Falha ao buscar time`})
        }
    }

    static async searchTeamByName(req, res) {
        const team_name = req.query.name
        try {
            const search_team = await team.find({ name: team_name })
            if(search_team === null){
                res.status(404).json({message: 'Time não encontrado :('})
            } else {
                res.status(200).json(search_team)
            }
        } catch(error) {
            res.status(500).json({message: `${error.message} - Falha ao buscar Time`})
        }
    }

    static async addTeam(req, res) {
        try {
            const new_team = await team.create(req.body)
            res.status(201).json({message: "Novo time cadastrado com sucesso!!", team: new_team})
        } catch(error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar novo time!`})
        }
    }

    static async updateTeam(req, res) {
        try {
            const team_id = req.params.id
            await team.findByIdAndUpdate(team_id, req.body)
            res.status(200).json({message: "Time atualizado com sucesso!"})
        } catch(error) {
            res.status(500).json({message: `${error.message} - Falha ao atualizar time!`})
        }
    }

    static async deleteTeam(req, res) {
        try {
            const team_id = req.params.id
            await team.findByIdAndDelete(team_id)
            res.status(200).json({message: "Time deletado com sucesso!"})
        } catch(error) {
            res.status(500).json({message: `${error.message} - Falha ao deletar time!`})
        }
    }

}