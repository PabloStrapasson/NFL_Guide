import React, { useEffect, useState } from "react"
import TopPage from "@/components/TopPage"
import Footer from "@/components/Footer"
import TeamContent from "@/components/TeamContent"
import style from "./post.module.scss"
import { useRouter } from "next/router"
import axios from "axios"
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import { Team } from "@/types/Team"

export const getStaticPaths = (async () => {
  const response = await fetch("http://localhost:5000/teams")
  const team_list = await response.json()
  const paths = team_list.map((team:Team) => {
    return { params: { id: `${team.keyword}` }}
  })

  return {
    paths: paths,
    fallback: false, // false or "blocking"
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  //const router = useRouter()
  //const keyword = `${router.query.id}`
  const keyword2 = context.params
  console.log("CONTEXT PARAMS: ", keyword2)
  const res = await fetch(`http://localhost:5000/teams/search?keyword=packers`)
  const team_data = await res.json()
  return { props: { team_data } }
}) satisfies GetStaticProps<{ team_data: Team }>

export default function Post({ team_data }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("TIME: ", ...team_data)
  
  return (
    <>
      <TopPage {...team_data} logo_href="/"/>
      <div className="main_content">
        <div>
          <TeamContent team_name={team_data.name} team_city={team_data.city} team_superbowls={["0"]} team_description={team_data.description}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
//<TopPage class_name={team.keyword} logo_path={team.keyword} logo_href="/"/>


//<TeamHeader team_name={team.name} team_city={team.city} superbowls={team.superbowl}/>