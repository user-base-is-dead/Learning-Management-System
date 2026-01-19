import React, { useState } from 'react'
import {navbarStyles} from "../assets/dummyStyles"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);



  return (
    <nav className={`${navbarStyles.navbar}
    ${showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden}
    ${isScrolled ? navbarStyles.navbarScrolled : navbarStyles.navbarDefault}
    `}>
        <div className={navbarStyles.container}>
            <div className={navbarStyles.innerContainer}>
                <div className='flex item-center gap-3 select-none'></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar