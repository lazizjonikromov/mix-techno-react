import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 d-flex flex-column">
                            <h2>Подпишитесь на нас</h2>
                            <div className="icons">
                                <a href="" >
                                    <img src="./image/telegram.png" alt="" />
                                </a>
                                <a href="" >
                                    <img src="./image/instagram.png" alt="" />
                                </a>
                                <a href="" className=''>
                                    <img src="./image/facebook.png" alt="" />
                                </a>
                            </div>
                            <ul>
                                <li><a href="#">Контакты</a></li>
                                <li><a href="#">Обратная связь</a></li>
                                <li><a href="#">Правила</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-5 d-flex flex-column footer-two-section">
                            <h2>Получить информацию</h2>
                            <div className="footer-input">
                                <form action="" className='d-flex'>
                                    <input type="number"  id='phone'  className='form-control' placeholder='(XX)-XXX-XX-XX' autoComplete='off' />
                                    <label htmlFor="phone">+998 </label>
                                    <button type='submit' className='btn'>
                                        Отправить
                                    </button>
                                </form>
                            </div>
                            <ul>
                                <li><a href="">Как добраться</a></li>
                                <li><a href="">Реклама</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 d-flex flex-column footer-three">
                            <h2>Контакты</h2>
                            <div className="phone-call">
                                <div className="">
                                    <img src="./image/phone.png" alt="" />
                                    <a href="tel:+998946408356">+998 (94) 640-83-56</a>
                                </div>
                                <div className="mt-4">
                                    <img src="./image/phone.png" alt="" />
                                    <a href="tel:+998946408356">+998 (94) 640-83-56</a>
                                </div>
                            </div>
                            <div className="location-footer mt-4">
                                <img src="./image/location.png" alt="" />
                                <a href="" >100022, Узбекистан, г. <br /> Ташкент, ул. Кушбеги, 18А</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="last-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>© 2022 Mixtechno by <a href="https://kokoagency.uz/">Koko Digital Agency</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer