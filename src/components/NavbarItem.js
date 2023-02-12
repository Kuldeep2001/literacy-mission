import React,{useState} from 'react'

export default function NavbarItem(props) {
  // "blue":$blue,"indigo":$indigo,"purple":$purple,"pink":$pink,"red":$red,"orange":$orange,"yellow":$yellow,"green":$green,"teal":$teal,"cyan":$cyan,"white":$white,"gray":$gray-600,"gray-dark":
  // 'primary','dark','warning','light','info','secondary','success'
  // '.text-primary','.text-secondary','.text-success','.text-danger','.text-warning','.text-info','.text-light','.text-dark','.text-body','.text-muted','.text-white','.text-black','.text-white-50','.text-black-50'
  let text_choices = {
    primary:'warning', dark:'light', warning:'info', light: 'dark',
    info:'light', secondary:'light', success:'primary'
  }
  let hover_choices = {
    primary:'green', dark:'light', warning:'info', light: 'dark',
    info:'light', secondary:'light', success:'primary'
  }
  console.log(props)

  const [hoverColor, setHoverColor] = useState("transparent");
  return (
    <div>
      <li className={`nav-item bg-${hoverColor} fs-5`}
      onMouseEnter={()=>{console.log(hoverColor);setHoverColor(hover_choices[props.theme])}}
      onMouseLeave={()=>{console.log(hoverColor);setHoverColor("transparent")}}>
        <a className={`nav-link text-${text_choices[props.theme]}`} aria-current="page" href={props.item.link}>{props.item.data}</a>
      </li>
    </div>
  )
}
