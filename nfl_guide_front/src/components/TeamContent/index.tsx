import React from 'react'
import Trophy from "./Trophy"
import style from "./team_content.module.scss"

interface Props{
  team_name: string
  team_city: string
  team_superbowls: string[]
  team_description: string
}


export default function Team_Header({team_name, team_city, team_superbowls, team_description}: Props) {
  
  return (
    <article className={style.team_content}>
      <header className={style.team_header}>
        <h2>{team_name}</h2>
        <p>{team_city}</p>
        <br />
        <div className={style.trophy_div}>
          {team_superbowls.length? 
            (team_superbowls.map((year) => (
              <Trophy title_year={year}/>  
            )))
            : <p></p>
          }
        </div>
        <br/>
      </header>
      <main className={style.team_main}>
        {team_description}
      </main>
    </article>
  )
}
