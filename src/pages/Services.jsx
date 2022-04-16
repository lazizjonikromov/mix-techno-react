import React from 'react'
import { Link } from 'react-router-dom'

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
                                <Link>
                                    Системы управления краном
                                </Link> <br />
                                <Link>
                                    Шкафы и пульты управления
                                </Link> <br />
                                <Link>
                                    Кабины крановые
                                </Link> <br />
                                <Link>
                                    Кресло-пульты
                                </Link> <br />
                                <Link>
                                    Ремонт электрооборудования кранов
                                </Link> <br />
                                <Link>
                                    Модернизация кранов
                                </Link> <br />
                                <Link>
                                    Перевод кранов на радиоуправление
                                </Link>
                            </div>
                            <div className="catalog-product col-lg-9">
                                <h1>Шкафы и пульты управления</h1>
                                <div className="section-01">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
