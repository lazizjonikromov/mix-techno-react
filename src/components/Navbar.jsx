import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navBar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-1">
                        <a href="/">
                            <img src="./image/logo.svg" alt="" className='w-100'/>
                        </a>
                    </div>
                    <div className="col-7 ml-auto">
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li><a href=""> ГЛАВНАЯ </a></li>
                            <li><a href=""> НАШИ УСЛУГИ </a></li>
                            <li><a href=""> ПРЕИМУЩЕСТВА </a></li>
                            <li><a href=""> О КОМПАНИИ </a></li>
                            <li><a href=""> КОНТАКТЫ </a></li>
                        </ul>
                    </div>
                    <div className="col-3 ml-auto">
                        <a href="" className="myBtn text-uppercase">
                            +998 (94) 640-83-56
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar