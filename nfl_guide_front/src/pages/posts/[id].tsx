import React from "react"
import TopPage from "@/components/TopPage"
import Footer from "@/components/Footer"
import style from "./post.module.scss"

export default function Post() {
  return (
    <>
      <TopPage class_name="packers" logo_path="packers" logo_href="/"/>
      <div className="main_content">Post</div>
      <Footer/>
    </>
  )
}
