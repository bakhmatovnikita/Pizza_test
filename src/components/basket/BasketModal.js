import React, { useState, useEffect } from 'react'
import './Basket.scss'
import BasketItem from './BasketItem';

const BasketModal = ({ data, onClose, setData }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal()
    }, [data])

    const calculateTotal = () => {
        let total = 0
        data.map(pizza => pizza.price * pizza.count).forEach(price => total += price)
        setTotal(total)
    }

    const subCount = (id) => {
        const copyData = [...data]
        const idx = copyData.findIndex(el => el.id === id)
        if (copyData[idx].count > 1) {
            copyData[idx].count = copyData[idx].count - 1
        }
        setData(copyData)
    }

    const addCount = (id) => {
        const copyData = [...data]
        const idx = copyData.findIndex(el => el.id === id)
        copyData[idx].count = copyData[idx].count + 1
        setData(copyData)
    }

    const deleteItem = (id) => {
        const copyData = [...data]
        const idx = copyData.findIndex(el => el.id === id)
        const beforeData = copyData.splice(0, idx)
        const afterData = copyData.splice(idx + 1, copyData.length)
        const newData = [...beforeData, ...afterData]
        setData(newData)
    }

    return (
        <div className="basket-wrapper">
            <div className="basket-modal">
                <div className="basket-title">
                    <h2>Ваш заказ</h2>
                    <div className="basket-title-close-icon" onClick={onClose}>
                        <span className="close-icon close-icon-one" />
                        <span className="close-icon close-icon-two" />
                    </div>
                </div>
                <div className="items-wrapper">
                    {data.map(pizza => {
                        return <BasketItem deleteItem={deleteItem} addCount={addCount} subCount={subCount} item={pizza} />
                    })}
                </div>
                <div className="basket-total">
                    <span />
                    <div>Сумма заказа: {total}</div>
                </div>
                <div className="basket-form">
                    <div className="basket-form-title">Контакты</div>
                    <div className="basket-form-double-input">
                        <input className="basket-form-input first-input" placeholder="Ваше имя" />
                        <input className="basket-form-input" placeholder="Телефон" />
                    </div>
                    <input className="basket-form-input" placeholder="Адрес доставки" />
                </div>
                <div className="basket-checkboxes">
                    <div className="basket-checkboxes-title">Способ оплаты</div>
                    <label className="basket-checkboxes-flex">
                        <input type="checkbox" />
                        <div>Оплата наличными или картой курьеру</div>
                    </label>
                    <label className="basket-checkboxes-flex">
                        <input type="checkbox" />
                        <div>Оплата картой онлайн на сайте</div>
                    </label>
                </div>
                <button className="basket-checkboxes-submit">ОФОРМИТЬ ЗАКАЗ</button>
            </div>
        </div>
    )
}

export default BasketModal;