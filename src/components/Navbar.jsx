import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [burger, setBurger] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <>
            <div className={`navBar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className={`row align-items-center `}>
                        {/* Burger */}
                        
                        <div className="col-lg-1 col-4">
                            <Link to="/">
                                <img src="./image/logo.svg" alt="" className='logo' />
                            </Link>
                        </div>

                        <div onClick={() => setBurger(!burger)} class={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div class="burger1"></div>
                            <div class="burger2"></div>
                            <div class="burger3"></div>
                        </div>
                        
                        <div className={`col-lg-11 nimadur ${burger ? '' : 'burgered'}`}>
                            <ul className={`nav-menu d-flex justify-content-around align-items-center`}>


                                <li><a href="/" className='nav-text'> ГЛАВНАЯ </a></li>
                                <li><a href="" className='nav-text'> НАШИ УСЛУГИ </a></li>
                                <li><a href="" className='nav-text'> ПОРТФОЛИО </a></li>
                                <li><a href="/about" className='nav-text'> О КОМПАНИИ </a></li>
                                <li><a href="" className='nav-text'> КОНТАКТЫ </a></li>

                                <a href="" className="myBtn text-uppercase">
                                    +998 (94) 640-83-56
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar