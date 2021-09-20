import React from 'react'
import DeliveryOne from "../../images/delivery/1.svg"
import DeliveryTwo from "../../images/delivery/2.svg"
import DeliveryThree from "../../images/delivery/3.svg"

const HomeDelivery = () => {
    return (
        <div className="delivery">
            <div className="container">
                <div className="delivery__payment">
                    <h1 className="delivery__payment-title">Доставка и оплата</h1>
                    <div className="delivery_block">
                        <div className="delivery__item">
                            <img className="delivery_block-image" src={DeliveryOne} alt="order" />
                            <div className="delivery__content">
                                <h6 className="delivery_title">Заказ</h6>
                                <div className="delivery_text">
                                    <p>После оформления заказа мы свяжемся <br />с вами для уточнения деталей.</p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery__item">
                            <img className="delivery_block-image" src={DeliveryTwo} alt="delivery courier" />
                            <div className="delivery__content">
                                <h6 className="delivery_title">Доставка курьером</h6>
                                <div className="delivery_text">
                                    <p>Мы доставим вашу пиццу горячей.<br /> Бесплатная доставка по городу.</p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery__item">
                            <img className="delivery_block-image" src={DeliveryThree} alt="payment" />
                            <div className="delivery__content">
                                <h6 className="delivery_title">Оплата</h6>
                                <div className="delivery_text">
                                    <p>Оплатить можно наличными или картой курьеру.<br /> И золотом тоже можно.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDelivery;