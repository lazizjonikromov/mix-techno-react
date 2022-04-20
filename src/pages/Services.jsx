import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

import { Autoplay, EffectFade, Navigation } from "swiper";

const Services = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <div className="services-page">
                <div className="service-page-header">

                </div>

                <div className="service-page-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">



                            </div>
                            <div className="catalogs col-lg-3">

                                <h3>Каталог продукции</h3>

                                <Nav tabs className='justify-content-end myNavs nav-pills nav-justified'>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Системы управления краном
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Шкафы и пульты управления
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            Кабины крановые
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4'); }}
                                        >
                                            Кресло-пульты
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' })}
                                            onClick={() => { toggle('5'); }}
                                        >
                                            Ремонт электрооборудования кранов
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '6' })}
                                            onClick={() => { toggle('6'); }}
                                        >
                                            Модернизация кранов
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '7' })}
                                            onClick={() => { toggle('7'); }}
                                        >
                                            Перевод кранов на радиоуправление
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                            </div>
                            <div className="catalog-product col-lg-9">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1" className=''>
                                    <Row className='myRow'>
                                            <h1>Системы управления краном</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
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
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
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

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2" className='   '>
                                        <Row className='myRow'>
                                            <h1>Шкафы и пульты управления</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
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
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
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

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3" className='   '>
                                    <Row className='myRow'>
                                            <h1>Кабины крановые</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
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
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
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

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4" className='   '>
                                    <Row className='myRow'>
                                            <h1>Кресло-пульты</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
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
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
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

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="5" className='   '>
                                    <Row className='myRow'>
                                            <h1>Ремонт электрооборудования кранов</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
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
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
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

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="6" className='   '>
                                    <Row className='myRow'>
                                            <h1>Модернизация кранов</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
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
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
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

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="7" className='   '>
                                    <Row className='myRow'>
                                            <h1>Перевод кранов на радиоуправление</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
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
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
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

                                        </Row>
                                    </TabPane>

                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

