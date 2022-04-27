import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header">
                <video className='video'
                    autoPlay
                    loop
                    playsInline
                    muted >
                    <source
                        src="/image/bg-header.mp4"
                        type="video/mp4"
                        id="bgvid"
                    />
                </video>

                <div className="container">
                    <div className="row">
                        <div data-aos="flip-down" className="col-12 zed" >
                            <h1 data-aos="fade-down">
                                MIX TECHNO HYDRAULICS
                            </h1>
                            <h3 data-aos="fade-up">
                                ВДОХНОВЕНИЕ ВОПЛОЩЁННОЕ В РЕАЛЬНОСТЬ
                            </h3>
                            <a href="/send-contact" className="myBtn">
                                Оставить Заявку
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="blur"></div> */}
            </div>

        </>
    )
}

export default Header