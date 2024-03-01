import mongoose from "mongoose"

// criar uma keyword para todos os times, ex: Green Bay Packer -> packers
// criar método para transformar a keyword em minuscula sempre

const teamSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, requeired: true },
    keyword: { type: String, required: true},
    city: { type: String },
    conference: { type: String },
    division: { type: String },
    stadium: { type: String },
    superbowl: { type: [String] },
    description: { type: String }
}, { versionKey: false })

const team = mongoose.model("teams", teamSchema)

export default team