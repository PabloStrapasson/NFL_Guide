import React from "react";
import style from "./toppage.module.scss";
import Logo from "@/components/Logo";

interface Props {
  class_name: string
  logo_path: string
  logo_href: string
}

export default function TopPage({class_name, logo_path, logo_href}:Props) {
  return (
    <div className={class_name}>
      <Logo logo_url={logo_path} logo_href={logo_href}/>
    </div>
  )
}
