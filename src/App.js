import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import Basket from './components/basket/BasketModal';
import Home from './components/home/Home';
import './App.scss';
import BasketModal from './components/basket/BasketModal';

const App = () => {
  const [basketData, setBasketData] = useState([])
  const [newId, setNewId] = useState(1)
  const [isOpenBasketModal, setIsOpenBasketModal] = useState(false)

  const setItemToBasket = (name, size, price, img) => {
    const some = basketData.some(pizza =>
      pizza.name === name && pizza.size === size && pizza.price === price)

    if (some) {
      const newData = basketData.map(pizza => {
        if (pizza.name === name && pizza.size === size, pizza.price === price) {
          return { ...pizza, count: pizza.count + 1 }
        } else {
          return pizza
        }
      })
      setBasketData(newData)
    } else {
      const obj = { name, size, price, id: newId, count: 1, img }
      setBasketData(prevData => ([...prevData, obj]))
      setNewId(prevId => prevId + 1)
    }
  }

  const toggleOpenBasketModal = () => setIsOpenBasketModal(!isOpenBasketModal)

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props =>
          <Home
            {...props}
            setItemToBasket={setItemToBasket}
            toggleOpenBasketModal={toggleOpenBasketModal}
            basket={basketData}
          />}
      />
      {isOpenBasketModal && <BasketModal setData={setBasketData} onClose={toggleOpenBasketModal} data={basketData} />}
    </div>
  );
}

export default App;
