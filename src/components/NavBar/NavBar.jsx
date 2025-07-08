import { useState } from "react"
import { Link } from "react-scroll"
import './NavBar.css'

const NavBar = ({ name, navItems, navLogos, navPopup, handlePopup}) => {
  const [activeSection, setActiveSection] = useState('')
  return (
    <nav>
      <h1>{name}</h1>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.href} smooth={true} duration={500} spy={true} className={activeSection === item.href ? 'active' : ''}>
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
      {navPopup && (
        <div className="popupOverlay" onClick={handlePopup}>
          <div className="popupContent">
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} smooth={true} duration={500}>
                    {item.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="icons">
        {navLogos.map((item, index) => (
          <div key={index}>
            {item.logo}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default NavBar