import React from "react"
import style from "./trophy.module.scss"

interface Props{
  title_year: string
}

export default function Trophy({title_year}: Props) {

  const year = `${title_year}`

  return (
    <div className={style.superbowl_trophy}>
      <img src="/images/trophy/trophy2.png" alt="superbowl" title={year}/>  
    </div>
  )
}
