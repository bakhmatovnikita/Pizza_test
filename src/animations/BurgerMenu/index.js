import React, { useState } from "react";
import Menu from "./Menu";
import "./style.scss"

const BurgerMenu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <>
            <div
                className={`header__burger ${isOpenMenu ? 'burger_active' : ''}`}
                role="button"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
                <span className="burger_item" />
                <span className="burger_item" />
                <span className="burger_item" />
            </div>
            {isOpenMenu && <Menu />}
        </>
    );
};

export default BurgerMenu;