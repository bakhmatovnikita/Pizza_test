import React from "react";
import InfoOneImg from "../../images/content/content-imge1.jpg"
import InfoTwoImg from "../../images/content/content-imge2.jpg"
import InfoThreeImg from "../../images/content/content-imge3.jpg"

const HomeInfo = () => {
    return (
        <div className="content__info">
            <div className="container">
                <div className="info_block">
                    <div className="info_item">
                        <img className="info_imge" src={InfoOneImg} alt="info_imge" />
                        <div className="info_content">
                            <h4 className="info_title">Изготавливаем пиццу по своим рецептам в лучших традициях</h4>
                            <div className="info_text">
                                <p>Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной
                                    начинкой, готовим по своим итальянским рецептам</p>
                            </div>
                        </div>
                    </div>
                    <div className="info_item">
                        <div className="info_content">
                            <h4 className="info_title">Используем только свежие ингридиенты</h4>
                            <div className="info_text">
                                <p>Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения
                                </p>
                            </div>
                        </div>
                        <img className="info_imge" src={InfoTwoImg} alt="info_imge" />
                    </div>
                    <div className="info_item">
                        <img className="info_imge" src={InfoThreeImg} alt="info_imge" />
                        <div className="info_content">
                            <h4 className="info_title">Доставка в течение 60 минут или заказ за нас счёт</h4>
                            <div className="info_text">
                                <p>Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally
                                    Championship и World Superbike во всех категориях</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInfo;