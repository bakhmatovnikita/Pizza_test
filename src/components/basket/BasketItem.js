import React from "react";

const BasketItem = ({ item, addCount, subCount, deleteItem }) => {
    return (
        <div className="basket-item-wrapper">
            <div className="basket-item-img">
                <img className="basket-item-image" src={item.img} />
                <div className="basket-item-img-text">
                    <div>{item.name}</div>
                    <p>{item.size} см</p>
                </div>
            </div>
            <div className="basket-item-actions">
                <div className="basket-item-count">
                    <div onClick={() => subCount(item.id)} className="button button--outline button--circle cart__item-count-minus">
                        <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#ffffff" />
                        </svg>
                    </div>
                    <input className="basket-item-count-input" readOnly value={item.count} />
                    <div onClick={() => addCount(item.id)} className="button button--outline button--circle cart__item-count-plus">
                        <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#ffffff" />
                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#ffffff" />
                        </svg>
                    </div>
                </div>
                <div className="basket-item-price">
                    {item.price} руб
                </div>
            </div>
            <div onClick={() => deleteItem(item.id)} className="basket-item-delete">
                <span className="basket-item-delete-item basket-item-delete-one" />
                <span className="basket-item-delete-item basket-item-delete-two" />
            </div>
        </div>
    )
}

export default BasketItem