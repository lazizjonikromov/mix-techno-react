import React from 'react'

const Montaj = () => {
    return (
        <>
            <div className="montaj">
                <div className="container">
                    <div className="row">
                        <div className="zed col-12">
                            <div className="montaj-zed-blur mb-5">
                                <h2>Монтаж-демонтаж кранов</h2>
                                <h1>ВЫСШЕЕ КАЧЕСТВО СЕРВИСА</h1>
                                <p>Ввод и вывод из эксплуатации башенных кранов любой сложности</p>
                            </div>

                            <div className="d-flex justify-content-center align-items-center myBtns">
                                <a href="/" className='myBtn'>Наши услуги</a>
                                <a href="/" className='myBtn'>Оставить Заявку</a>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="blur"></div>
            </div>
        </>
    )
}

export default Montaj
 