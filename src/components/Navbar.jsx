import React, { useState } from 'react'

const Navbar = () => {
    const [burger, setBurger] = useState(false)
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <div className={`row align-items-center `}>
                        {/* Burger */}
                        
                        <div className="col-lg-1 col-4">
                            <a href="/">
                                <img src="./image/logo.svg" alt="" className='logo' />
                            </a>
                        </div>

                        <div onClick={() => setBurger(!burger)} class={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div class="burger1"></div>
                            <div class="burger2"></div>
                            <div class="burger3"></div>
                        </div>
                        
                        <div className={`col-lg-11 nimadur ${burger ? '' : 'burgered'}`}>
                            <ul className={`nav-menu d-flex justify-content-around align-items-center`}>


                                <li><a href=""> ГЛАВНАЯ </a></li>
                                <li><a href=""> НАШИ УСЛУГИ </a></li>
                                <li><a href=""> ПРЕИМУЩЕСТВА </a></li>
                                <li><a href=""> О КОМПАНИИ </a></li>
                                <li><a href=""> КОНТАКТЫ </a></li>

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