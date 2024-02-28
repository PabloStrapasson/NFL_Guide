import React from "react";
import style from "./logo.module.scss";
import Link from "next/link";

interface Props{
  logo_url: string
  logo_href: string
}

export default function Logo({logo_url, logo_href}: Props) {

  const url = `/images/logos/${logo_url}.svg`
  const href_url = logo_href

  return (
    <div className={style.logo}>
        <Link href={logo_href}>
            <img src={url} alt="logo" />
        </Link>
        
    </div>
  )
}
