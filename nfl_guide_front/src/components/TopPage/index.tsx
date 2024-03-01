import React from "react";
import Logo from "@/components/Logo";
import { Team } from "@/types/Team";

interface Props extends Team{
  keyword: string
  logo_href: string
}

export default function TopPage({keyword, logo_href}:Props) {
  
  return (
    <div className={keyword}>
      <Logo logo_url={keyword} logo_href={logo_href}/>
    </div>
  )
}
