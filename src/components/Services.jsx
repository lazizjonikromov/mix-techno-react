import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-12 text-center">
                            <h2>НАШИ УСЛУГИ</h2>
                            <div className="img"><img src="/image/service.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="row services-bt">
                        <div className="col-12">

                            <Swiper
                                slidesPerView={1}
                                loop={true}
                                speed={1000}
                                spaceBetween={40}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="col-lg-12 col-md-6">
                                        <Link to='/service-1' className="card service-card-one">
                                            <div className="card-header">
                                                <img src="./image/service-01.jpg" alt="" className='w-100' />
                                            </div>
                                            <div className="card-body">
                                                <p>Модернизация, обслуживание</p>
                                                <h5>МОДЕРНИЗАЦИЯ И РЕМОНТ ВСЕХ ВИДОВ КРАНОВ</h5>
                                                <div className="srv-btn">
                                                    <img src="./image/service-btn.png" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="col-lg-12 col-md-6">
                                        <Link to='/service-2' className="card service-card-one">
                                            <div className="card-header">
                                                <img src="./image/service-02.png" alt="" className='w-100' />
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    Перевозка, сборка
                                                </p>
                                                <h5>
                                                    Монтаж-демонтаж кранов
                                                </h5>
                                                <div className="btn1">
                                                    <img src="./image/service-btn.png" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="col-lg-12 col-md-6">
                                        <Link to='/service-3' className="card service-card-one">
                                            <div className="card-header">
                                                <img src="./image/service-04.jpg" alt="" className='w-100' />
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    Комплектующие, краны
                                                </p>
                                                <h5>
                                                    Продажа техники и комплектующих
                                                </h5>
                                                <div className="btn1">
                                                    <img src="./image/service-btn.png" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="col-lg-12 col-md-6">
                                        <Link to='/' className="card service-card-one">
                                            <div className="card-header">
                                                <img src="./image/service-03.jpg" alt="" className='w-100' />
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    Автоматизация
                                                </p>
                                                <h5>
                                                    Автоматизация технологических процессов
                                                </h5>
                                                <div className="srv-btn" id='btn-srv-top'>
                                                    <img src="./image/service-btn.png" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

