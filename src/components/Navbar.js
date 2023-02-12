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

  let color_list = ['primary','dark','warning','light','info','secondary','success']

  const changeTheme = (event) => {
    const classes = event.target.className;
    props.setTheme(classes.substr(7));
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className={`navbar bg-${props.theme} bg-gradient navbar-expand-lg`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Literacy_logo} alt="Bootstrap" height="100" />
          </a>
          <button className="navbar-toggler" type="button"  onClick={toggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto">
              {nav_links.map((item,index)=>{
                return <NavbarItem key={index} item={item} theme={props.theme}/>
              })}
              <li className="nav-item dropdown fs-5">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {color_list.map((item,index)=>{
            if(item !== props.theme)
              return <div className={`p-2 bg-${item}`} onClick={changeTheme} key={index} style={{borderRadius: '50%', width: '2rem', height: '2rem'}}></div>
            else
              return null
          })}
        </div>
      </nav>
    </div>
  )
}
