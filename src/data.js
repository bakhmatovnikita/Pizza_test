import ItalianImg from './images/pizza-types/01.png'
import MargaritaImg from './images/pizza-types/02.png'
import BarbekuImg from './images/pizza-types/03.png'
import VeganImg from './images/pizza-types/04.png'
import MeatImg from './images/pizza-types/05.png'
import SaladImg from './images/pizza-types/06.png'
import RomeImg from './images/pizza-types/07.png'
import MushroomsImg from './images/pizza-types/08.png'
import CheeseImg from './images/pizza-types/09.png'
import FourCheeseImg from './images/pizza-types/10.png'
import SomeImg from './images/pizza-types/11.png'
import MeatAndCheeseImg from './images/pizza-types/12.png'

export const pizzaData = [
    {
        name: 'Итальянская',
        desc: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
        image: ItalianImg,
        id: 1,
        types: ['cheese'],
        prices: {
            20: 399,
            30: 499,
            40: 599
        }
    }, {
        name: 'Маргарита',
        desc: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
        image: MargaritaImg,
        id: 2,
        types: ['cheese', 'meat'],
        prices: {
            20: 299,
            30: 400,
            40: 479
        }
    }, {
        name: 'Барбекю',
        desc: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
        image: BarbekuImg,
        id: 3,
        types: ['meat'],
        prices: {
            20: 499,
            30: 699,
            40: 879
        }
    }, {
        name: 'Вегетарианская',
        desc: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
        image: VeganImg,
        id: 4,
        types: ['cheese', 'spicy', 'vegan'],
        prices: {
            20: 299,
            30: 400,
            40: 479
        }
    }, {
        name: 'Мясная',
        desc: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
        image: MeatImg,
        id: 5,
        types: ['spicy'],
        prices: {
            20: 599,
            30: 699,
            40: 879
        }
    }, {
        name: 'Овощная',
        desc: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
        image: SaladImg,
        id: 6,
        types: ['vegan'],
        prices: {
            20: 299,
            30: 479,
            40: 479
        }
    }, {
        name: 'Римская',
        desc: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
        image: RomeImg,
        id: 7,
        types: ['meat'],
        prices: {
            20: 499,
            30: 699,
            40: 779
        }
    }, {
        name: 'С грибами',
        desc: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
        image: MushroomsImg,
        id: 8,
        types: [],
        prices: {
            20: 299,
            30: 399,
            40: 579
        }
    }, {
        name: 'Сырная',
        desc: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
        image: CheeseImg,
        id: 9,
        types: ['cheese'],
        prices: {
            20: 500,
            30: 699,
            40: 800
        }
    }, {
        name: 'Четыре сыра',
        desc: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
        image: FourCheeseImg,
        id: 10,
        types: ['cheese'],
        prices: {
            20: 399,
            30: 499,
            40: 579
        }
    }, {
        name: 'Пепперони Фреш с томатами',
        desc: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
        image: SomeImg,
        id: 11,
        types: ['meat'],
        prices: {
            20: 299,
            30: 400,
            40: 479
        }
    }, {
        name: 'Ветчина и сыр',
        desc: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
        image: MeatAndCheeseImg,
        id: 12,
        types: ['meat', 'cheese'],
        prices: {
            20: 300,
            30: 399,
            40: 475
        }
    }
]