import React, { useState, useRef } from "react";
import { useSwipeable } from 'react-swipeable'

import EventOne from "../../images/stock/Event1.jpg"
import EventTwo from "../../images/stock/Event2.jpg"
import EventThree from "../../images/stock/Event3.jpg"

const SliderPart = () => {
    const [activeSlide, setActiveSlide] = useState(1)
    const handlers = useSwipeable({
        onSwipedRight: () => {
            if (activeSlide > 1) {
                setActiveSlide(activeSlide - 1)
            }
        },
        onSwipedLeft: () => {
            if (activeSlide !== 3) {
                setActiveSlide(activeSlide + 1)
            }
        }
    })
    const myRef = useRef();

    const refPassthrough = (el) => {
        handlers.ref(el);
        myRef.current = el;
    }

    return (
        <div className="stock">
            <div className="container" ref={refPassthrough}>
                <div className="stock__inner">
                    <div id="arrow-left" className="arrow arrow-left"><span /></div>
                    <div className={activeSlide === 1 ? "stock__item stock__1 stock-img-active" : "stock__item stock__1"} id="img1">
                        <img className="stock_tabl stock_tabl-active" width="100%" src={EventOne}
                            alt="ctock_tabl" />
                        <h3 className="stock_name">Закажи 2 пиццы – 3-я в подарок</h3>
                        <div className="stock_text">
                            <p>При заказе 2-х больших пицц – средняя пицца в подарок</p>
                        </div>
                    </div>
                    <div className={activeSlide === 2 ? "stock__item stock__2 stock-img-active" : "stock__item stock__1"} id="img2">
                        <img className="stock_tabl" width="100%" src={EventTwo} alt="ctock_tabl" />
                        <h3 className="stock_name">Напиток в подарок</h3>
                        <div className="stock_text">
                            <p>Скидка на заказ от 3 000 рублей + напиток в подарок</p>
                        </div>
                    </div>
                    <div className={activeSlide === 3 ? "stock__item stock__3 stock-img-active" : "stock__item stock__1"} id="img3">
                        <img className="stock_tabl" width="100%" src={EventThree} alt="ctock_tabl" />
                        <h3 className="stock_name">25% при первом заказе</h3>
                        <div className="stock_text">
                            <p>Скидка новым клиентам!</p>
                        </div>
                    </div>
                    <div id="arrow-right" className="arrow arrow-right"><span /></div>
                </div>
            </div>
            <div className="stock-indicate__container">
                <div className={activeSlide === 1 ? "indicate-point__item point-item-active" : "indicate-point__item"} id="indicate-point__item1" />
                <div className={activeSlide === 2 ? "indicate-point__item point-item-active" : "indicate-point__item"} id="indicate-point__item2" />
                <div className={activeSlide === 3 ? "indicate-point__item point-item-active" : "indicate-point__item"} id="indicate-point__item3" />
            </div>
        </div>
    )
}

export default SliderPart;
