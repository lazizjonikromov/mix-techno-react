import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation } from "swiper";

const Services = () => {
    return (
        <>
            <div className="services-page">
                <div className="service-page-header">

                </div>

                <div className="service-page-main">
                    <div className="container">
                        <div className="row">
                            <div className="catalogs col-lg-3">
                                <h3>Каталог продукции</h3>

                                <ul>
                                    <li>
                                        <Link>
                                            Системы управления краном
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Шкафы и пульты управления
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Кабины крановые
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Кресло-пульты
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Ремонт электрооборудования кранов
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Модернизация кранов
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Перевод кранов на радиоуправление
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="catalog-product col-lg-9">
                                <h1>Шкафы и пульты управления</h1>
                                <div className="section-01">
                                    <div className="left">
                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                        <h6>Гарантия: <span>1 год</span></h6>

                                        <a href="" className="btn myBtn">
                                            ЗАПРОСИТЬ СТОИМОСТЬ
                                        </a>

                                        <p>Производим под заказ, учитывая индивидуальные особенности проекта</p>
                                    </div>
                                    <div className="right">
                                        <Swiper
                                            spaceBetween={30}
                                            effect={"fade"}
                                            navigation={true}
                                            loop={true}
                                            modules={[Autoplay, EffectFade, Navigation]}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                            }}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <img src="/image/shkaf.jpg" className='w-100' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/image/shkaf-01.jpg" className='w-100' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/image/shkaf-02.jpg" className='w-100' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/image/shkaf-03.jpg" className='w-100' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/image/shkaf-04.jpg" className='w-100' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/image/shkaf-05.jpg" className='w-100' />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>

                                <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                <div className="section-02 d-flex flex-column">
                                    <div className="section-02-1">
                                        <img src="/image/shkaf-06.jpg" alt="" />
                                        <img src="/image/shkaf-01.jpg" alt="" />
                                    </div>
                                    <div className="section-02-2">
                                        <img src="/image/shkaf-07.jpg" alt="" />
                                        <img src="/image/shkaf-08.jpg" alt="" />
                                    </div>
                                </div>

                                <h1 className='mt-5'>Производство шкафов и пультов управления</h1>
                                <p className='mt-3'>«БРИЗ» выпускает различные модификации продукции в соответствии с отраслевыми стандартами. Предоставляет возможность изготовления агрегатов по техническим заданиям заказчиков. Все товары сопровождаются пакетом документов и сертификатами. Купить шкафы и станции управления, узнать цены, сроки изготовления можно по телефону у специалистов или онлайн по форме обратной связи.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

