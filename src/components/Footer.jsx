import React, { useState } from 'react'

import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [phone_number, setPhoneNumber] = useState('')


    const sendForm = (e) => {
        e.preventDefault()
        setIsLoading(true)

        axios.post('https://mix-techno.uz/bot/', { phone_number })
            .then((res) => {
                toast.success('Ваша заявка успешно отправлена ​​и мы свяжемся с вами в ближайшее время')
                setPhoneNumber('')
                setIsLoading(false)
            })
            .catch((err) => {
                toast.error('Ошибка! Проверьте подключение к интернету')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <>

            <div className="footer">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="zed col-lg-4 d-flex flex-column">
                            <div className="img w-50 text-center">
                                <img src="./image/logo.svg" alt="" className='w-100'/>
                            </div>
                            {/* <div className="icons">
                                <a href="" >
                                    <img src="./image/telegram.png" alt="" />
                                </a>
                                <a href="" >
                                    <img src="./image/instagram.png" alt="" />
                                </a>
                                <a href="" className=''>
                                    <img src="./image/facebook.png" alt="" />
                                </a>
                            </div> */}
                            <ul className='mt-3'>
                                <li><Link to="/">ГЛАВНАЯ</Link></li>
                                <li><Link to="/services">НАШИ УСЛУГИ</Link></li>
                                <li><Link to="/portfolio" className='pl-0'>ПОРТФОЛИО</Link></li>
                                
                            </ul>
                        </div>
                        <div className="zed col-lg-5 d-flex flex-column footer-two-section">
                            {/* <div className="img w-100 text-center">
                                <img src="./image/logo.svg" alt="" className='w-25'/>
                            </div> */}

                            <h2>Получить информацию</h2>
                            <div className="footer-input">
                                <form onSubmit={sendForm} className='d-flex'>
                                    <input 
                                        type="number" 
                                        id='phone' 
                                        min={1}
                                        name='phone_number'
                                        className='form-control' 
                                        placeholder='(XX)-XXX-XX-XX' 
                                        autoComplete='off'
                                        required 
                                        value={phone_number}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    <label htmlFor="phone">+998 </label>

                                    <button type='submit' className='btn d-flex align-items-center' disabled={isLoading}>{isLoading ? <span className="spinner-border spinner-border-sm text-warning"/> : ""}
                                        Отправить
                                    </button>
                                </form>
                            </div>
                            <ul>
                                <li><Link to="/about" className='pl-0'>О КОМПАНИИ</Link></li>
                                <li><Link to="/contact" className='pl-0'>КОНТАКТЫ</Link></li>
                            </ul>
                        </div>
                        <div className="zed col-lg-3 d-flex flex-column footer-three">
                            <h2>Контакты</h2>
                            <div className="phone-call">
                                <div className="">
                                    <img src="./image/phone.png" alt="" />
                                    <a href="tel:+998901255696">+998 (90) 125-56-96</a>
                                </div>
                                <div className="mt-4">
                                    <img src="./image/phone.png" alt="" />
                                    <a href="tel:+998909724199">+998 (90) 972-41-99</a>
                                </div>
                                <div className="mt-4">
                                    <img src="./image/phone.png" alt="" />
                                    <a href="tel:+998998173508">+998 (99) 817-35-08</a>
                                </div>
                            </div>
                            <div className="location-footer mt-4">
                                <img src="./image/location.png" alt="" />
                                <Link to="/contact" >100022, Узбекистан, г. <br /> Ташкент, ул. Кушбеги, 18А</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="blur"></div>
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