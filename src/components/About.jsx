import React from 'react'

const About = () => {
    return (
        <>
            <div className="about">
                <div className="header">

                </div>

                <div className="about-main">
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-12 text-center">
                                <h2>О компании</h2>
                                <div className="img"><img src="/image/about.png" alt="" /></div>
                            </div>
                        </div>

                        <div className="row about-main-text">
                            <h1>НАДЕЖНОСТЬ, СТАБИЛЬНОСТЬ И ПЕРСПЕКТИВА</h1>
                            <p>
                                «Для нас основное значение имеют стабильность и надёжность в долгосрочной перспективе».
                                    <br /><br />
                                С нашими заказчиками и партнёрами мы поддерживаем тесное сотрудничество, основанное на взаимном доверии и уважении.При этом мы не придаём значения краткосрочным успехам, так как для нас самую большую ценность представляетдолгосрочная перспектива.
                            </p>

                            <img src="/image/about-main.png" alt="" className='w-100'/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About