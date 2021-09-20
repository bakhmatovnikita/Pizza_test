import React, { useState, useEffect } from 'react'
import HomeHeader from './HomeHeader';
import HomeDelivery from './HomeDelivery';
import HomeInfo from './HomeInfo';
import HomeInstagram from './HomeInstagram';
import './Home.scss'

import PizzaTabl from "../../images/pizza.png"

import ClassificationAll from "../../images/menu-pizza/Classification/1.svg"
import ClassificationSpicy from "../../images/menu-pizza/Classification/spicy.svg"
import ClassificationMeat from "../../images/menu-pizza/Classification/meat.svg"
import ClassificationCheese from "../../images/menu-pizza/Classification/cheese.svg"
import ClassificationVegatarian from "../../images/menu-pizza/Classification/vegatarian.svg"

import FooterOneImg from "../../images/Group.svg"
import FooterTwoImg from "../../images/003-pizza-slice.svg"
import PizzaItem from './pizza-item/pizza-item';
import { pizzaData } from '../../data'
import SliderPart from './SliderPart';

const Home = ({ setItemToBasket, toggleOpenBasketModal, basket }) => {
    const [currentData, setCurrentData] = useState(pizzaData)
    const [type, setType] = useState('all')

    useEffect(() => {
        if (type === 'all') {
            setCurrentData(pizzaData)
        } else {
            const newData = pizzaData.filter(pizza => pizza.types.includes(type))
            setCurrentData(newData)
        }
    }, [type])

    return (
        <div className="wrapper">
            <HomeHeader basket={basket} toggleOpenBasketModal={toggleOpenBasketModal} />
            <div className="content">
                <div className="container">
                    <div className="content__order">
                        <h1>Пицца на заказ</h1>
                        <p>Бесплатная и быстрая доставка за час <br />в любое удобное для вас время</p>
                        <span>
                            <button>Выбрать пиццу</button>
                        </span>
                    </div>
                    <div className="content__vizual">
                        <img style={{ width: '100%' }} src={PizzaTabl} alt="Pizza_tabl" />
                    </div>
                </div>
            </div>
            <SliderPart />
            <div className="menu__inner">
                <div className="container">
                    <div className="menu_heading">
                        <h1 className="title__menu">Выберите пиццу</h1>
                        <div className="categories">
                            <ul>
                                <li className={type === 'all' ? "categories__item active" : "categories__item"} onClick={() => setType('all')}>
                                    Все
                                    <img className="menu_classification" src={ClassificationAll}
                                        alt="classification" />
                                </li>
                                <li className={type === 'spicy' ? "categories__item active" : "categories__item"} onClick={() => setType('spicy')}>
                                    Острые
                                    <img className="menu_classification" src={ClassificationSpicy}
                                        alt="classification" />
                                </li>
                                <li className={type === 'meat' ? "categories__item active" : "categories__item"} onClick={() => setType('meat')}>
                                    Мясные
                                    <img className="menu_classification" src={ClassificationMeat}
                                        alt="classification" />
                                </li>
                                <li className={type === 'cheese' ? "categories__item active" : "categories__item"} onClick={() => setType('cheese')}>
                                    Сырные
                                    <img className="menu_classification" src={ClassificationCheese}
                                        alt="classification" />
                                </li>
                                <li className={type === 'vegan' ? "categories__item active" : "categories__item"} onClick={() => setType('vegan')}>
                                    Веганские
                                    <img className="menu_classification" src={ClassificationVegatarian}
                                        alt="classification" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="container" style={{ flexWrap: 'wrap' }}>
                    {currentData.map(pizza => {
                        return <PizzaItem key={pizza.id} item={pizza} setItemToBasket={setItemToBasket} />
                    })}
                </div>
            </div>
            <HomeDelivery />
            <HomeInfo />
            <HomeInstagram />
            <div className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__info">
                            <div className="footer_logo">
                                <div className="header__logo">
                                    <img width="90" height="80" src={FooterOneImg} alt="Name" />
                                    <img width="78" height="83" src={FooterTwoImg} alt="Pizza logo" />
                                </div>
                            </div>
                            <div className="footer_work">
                            <a className="footer__phone" href="tel: +7 (918) 432-65-87"> +7 (918) 432-65-87</a>
                            <p>Ежедневно с 9:00 до 23:00</p>
                            </div>
                        </div>
                        <div className="footer__item">
                            <p>Политика конфиденциальности</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;