import React from "react";
import BitmapImg from "../../images/instagram/Bitmap.jpg"
import BitmapOneImg from "../../images/instagram/Bitmap (1).jpg"
import BitmapTwoImg from "../../images/instagram/Bitmap (2).jpg"
import BitmapThreeImg from "../../images/instagram/Bitmap (3).jpg"
import BitmapFourImg from "../../images/instagram/Bitmap (4).jpg"
import BitmapFiveImg from "../../images/instagram/Bitmap (5).jpg"
import BitmapSixImg from "../../images/instagram/Bitmap (6).jpg"
import BitmapSevenImg from "../../images/instagram/Bitmap (7).jpg"
import BitmapEightImg from "../../images/instagram/Bitmap (8).jpg"
import BitmapNineImg from "../../images/instagram/Bitmap (9).jpg"

const HomeInstagram = () => {
    return (
        <>
            <div className="instagram">
                <div className="container">
                    <div className="instagram_inner">
                        <h2 className="instagram__title">Следите за нами в Instagram</h2>
                        <a className="instagram__link" href="https://msng.link/o/?@pizzamenu=ig">
                            <p>@pizzamenu</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="instagram__content">
                <div className="instagram__imge">
                    <img className="instagram__photo" src={BitmapImg} alt="instagram" />
                </div>
                <div className="instagram__imge">
                    <img className="instagram__photo" src={BitmapOneImg} alt="instagram" />
                </div>
                <div className="instagram__imge">
                    <img className="instagram__photo" src={BitmapTwoImg} alt="instagram" />
                </div>
                <div className="instagram__imge">
                    <img className="instagram__photo" src={BitmapThreeImg} alt="instagram" />
                </div>
                <div className="instagram__imge none2">
                    <img className="instagram__photo" src={BitmapFourImg} alt="instagram" />
                </div>
                <div className="instagram__imge none2">
                    <img className="instagram__photo" src={BitmapFiveImg} alt="instagram" />
                </div>
                <div className="instagram__imge none">
                    <img className="instagram__photo" src={BitmapSixImg} alt="instagram" />
                </div>
                <div className="instagram__imge none">
                    <img className="instagram__photo none" src={BitmapSevenImg} alt="instagram" />
                </div>
                <div className="instagram__imge none">
                    <img className="instagram__photo" src={BitmapEightImg} alt="instagram" />
                </div>
                <div className="instagram__imge none">
                    <img className="instagram__photo" src={BitmapNineImg} alt="instagram" />
                </div>
            </div>
        </>
    )
}

export default HomeInstagram;