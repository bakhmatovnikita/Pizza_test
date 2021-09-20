import React, { useState } from "react";
import './pizza-item.scss'

const PizzaItem = ({ item, setItemToBasket }) => {
    const prices = item.prices
    const sizesKeys = Object.keys(prices)
    const [currentSize, setCurrentSize] = useState(sizesKeys[1])

    return (
        <div className="menu__items">
            <div className="pizza-block">
                <img className="pizza-block__image" src={item.image} alt="Pizza" />
                <div className="pizza-block-info">
                    <h4 className="pizza-block__title">
                        {item.name}
                    </h4>
                    <p className="pizza-block__text">
                        {item.desc}
                    </p>
                    <h6 className="size">Размер, см:</h6>
                    <div className="pizza-block__selector">
                        <ul>
                            {sizesKeys.map(size => {
                                return <li
                                    onClick={() => setCurrentSize(size)}
                                    className={
                                        size === currentSize
                                            ? "active"
                                            : ""
                                    }>
                                    {size}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="pizza-block__button">
                        <div className="pizza-block__price">от {prices[currentSize]}.</div>
                        <div onClick={() => setItemToBasket(item.name, currentSize, item.prices[currentSize], item.image)} className="button button--outline button--add">
                            <button >Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem;