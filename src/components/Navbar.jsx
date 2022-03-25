import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <a href="/">
                                <img src="./image/logo.svg" alt="" className='logo' />
                            </a>
                        </div>
                        <div className="col-11">
                            <ul className='d-flex justify-content-around align-items-center'>
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
                        <div className="col-3 ml-auto">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar