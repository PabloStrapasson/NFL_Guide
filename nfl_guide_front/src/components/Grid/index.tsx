import React from "react"
import style from "./grid.module.scss"
import Logo from "@/components/Logo"
import { Team } from "@/types/Team"

interface Props {
    teams: Team[]
}

export default function Grid({teams}: Props) {
  return (
    <div className={style.grid_content}>
        {teams.map((team) => ( 
          <Logo logo_url={team.keyword} logo_href={"/posts/"+team.keyword} key={team.id}/>
        ))}
    </div>
  )
}
