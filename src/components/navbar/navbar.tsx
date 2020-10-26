import * as React from 'react'
import './navbar.scss'
import { HiPhoneIncoming } from 'react-icons/hi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import LogoBlack from '../../icons/logo/logoBlack'
import { pickDay } from './dayPicker'
import { Link } from 'react-scroll'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link
          className="navbar__container__logo"
          activeClass="active"
          to="introductionSection"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1000}
        >
          <LogoBlack height="40px" />
          <p className="navbar__container__logo__text">INSTALACJE ELEKTRYCZNE</p>
        </Link>
        <a href="tel:+48660519193" className="navbar__container__menu-icon">
          <HiPhoneIncoming className="hi-phone" />
        </a>
        <div className="navbar__container__nav-menu">
          <a className="navbar__container__nav-menu__text" href="tel:+48660519193">
            <HiPhoneIncoming className="icon" /> +48 660 519 193
          </a>
        </div>
        <div className="navbar__container__nav-menu">
          <p className="navbar__container__nav-menu__text">
            <FaRegCalendarAlt className="icon" />
            {pickDay}
          </p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
