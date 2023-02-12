import React,{useState} from 'react'
import './css/NavbarItem.scss'

export default function NavbarItem(props) {
  // "blue":$blue,"indigo":$indigo,"purple":$purple,"pink":$pink,"red":$red,"orange":$orange,"yellow":$yellow,"green":$green,"teal":$teal,"cyan":$cyan,"white":$white,"gray":$gray-600,"gray-dark":
  // 'primary','dark','warning','light','info','secondary','success'
  // '.text-primary','.text-secondary','.text-success','.text-danger','.text-warning','.text-info','.text-light','.text-dark','.text-body','.text-muted','.text-white','.text-black','.text-white-50','.text-black-50'
  const [hoverColor, setHoverColor] = useState("transparent");
  const [textColor, setTextColor] = useState(props.textColor);

  return (
    <li className={`nav-item bg-${hoverColor}`}
    onMouseEnter={()=>{setHoverColor(props.color_theme[props.theme].hover); setTextColor(props.theme); console.log(props.theme); console.log(textColor)}}
    onMouseLeave={()=>{setHoverColor("transparent"); setTextColor(props.textColor); console.log(props.theme); console.log(textColor) }}>
      <a className={`nav-link text-${textColor}`} aria-current="page" href={props.item.link}>{props.item.data}</a>
    </li>
  )
}
