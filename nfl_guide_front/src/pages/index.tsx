import TopPage from "@/components/TopPage"
import Footer from "@/components/Footer"
import Grid from "@/components/Grid"
import { Team } from "@/types/Team"
import style from "./index.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {

  const baseURL = "http://localhost:5000/teams" 
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
    console.log(response.data)
    setTeams(response.data)
    }).catch((error)=>{console.log(error.message)})
  }, [])

  return (
    <>
      <TopPage class_name="nfl" logo_path="nfl" logo_href="/"/>
      <main className="main_content">
        <div className="text_bar">
          <p>Conheça todos os times da NFL</p>
        </div>
        <Grid teams={teams}/>
      </main>
      <Footer/>
    </>
  );
}
