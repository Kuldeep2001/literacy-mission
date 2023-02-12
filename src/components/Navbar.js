import React,{useState} from 'react'
import NavbarItem from './NavbarItem'
import Literacy_logo from '../assets/images/literacy_logo.png'

export default function Navbar(props) {
  let nav_links = [
    {link:"/", data:"Home"},
    {link:"/", data:"Activities"},
    {link:"/", data:"Achievements"},
    {link:"/", data:"GyanManthan"},
    {link:"/", data:"Spardha"},
    {link:"/", data:"Make a Donation"},
  ]

  let color_theme = {
    primary:{text:'dark',hover:'dark'},
    dark:{text:'light',hover:'light'},
    warning:{text:'dark',hover:'secondary'},
    light:{text:'dark',hover:'dark'},
    info:{text:'success',hover:'success'},
    secondary:{text:'primary',hover:'primary'},
    success:{text:'info',hover:'info'},
  }
  console.log(color_theme);

  const changeTheme = (event) => {
    const theme = event.target.className.substr(7);
    props.setTheme(theme);
    console.log(textColor);
    setTextColor(color_theme[props.theme].text);

  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [textColor, setTextColor] = useState(color_theme[props.theme].text);
  return (
    <nav className={`navbar bg-${props.theme} header-nav fixed-top bg-gradient navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="nav-brand" href="/">
          <img src={Literacy_logo} alt="Bootstrap" height="100" />
        </a>
        <button className="navbar-toggler" type="button"  onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav m-auto fs-4">
            {nav_links.map((item,index)=>{
              return <NavbarItem key={index} item={item} theme={props.theme} color_theme={color_theme} textColor={textColor}/>
            })}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className={`dropdown-menu bg-${props.theme}`}>
                <li><a className="dropdown-item" href="/">NIT Hamirpur</a></li>
                <li><a className="dropdown-item" href="/">Helping Hands</a></li>
                <li><a className="dropdown-item" href="/">Sponsors</a></li>
                <li><a className="dropdown-item" href="/">In Media</a></li>
                <li><a className="dropdown-item" href="/">Volunteers</a></li>
                <li><a className="dropdown-item" href="/">Support</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav flex-row">
            {Object.keys(color_theme).map((key,value)=>{
              if(key !== props.theme)
                return <div className={`m-auto nav-item p-2 bg-${key}`} onClick={changeTheme} key={value} style={{borderRadius: '50%', width: '2rem', height: '2rem'}}></div>
              else
                return null
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
