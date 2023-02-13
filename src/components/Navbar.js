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

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar bg-dark navbar-dark fixed-top bg-gradient navbar-expand-md`}>
      <div className="container-fluid">
        <a className="nav-brand" href="/">
          <img src={Literacy_logo} alt="Bootstrap" height="100" />
        </a>
        <button className="navbar-toggler" type="button"  onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav m-auto fs-4">
            {nav_links.map((item,index)=>{
              return <NavbarItem key={index} item={item} />
            })}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu bg-dark">
                {["NIT Hamirpur","Helping Hands", "Sponsors", "In Media", "Volunteers", "Support"].map((item,index)=>{
                  return <li key={index}>
                          <a className="dropdown-item text-light"
                          onMouseEnter={()=>{console.log("Mouse Entered");}}
    onMouseLeave={()=>{console.log(props.theme); }}
                          href="/">{item}</a>
                        </li>
                })}
                
                {/* <li><a className="dropdown-item" href="/">Helping Hands</a></li>
                <li><a className="dropdown-item" href="/">Sponsors</a></li>
                <li><a className="dropdown-item" href="/">In Media</a></li>
                <li><a className="dropdown-item" href="/">Volunteers</a></li>
                <li><a className="dropdown-item" href="/">Support</a></li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
