import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Bascet } from './components/Bascet'

function App() {

    const [basket, setBasket] = useState([])

    const [products, setProduct] = useState([
        {id:101, title: "Phisology", price: 123, photo: "https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg"},
        {id:102, title: "Islam", price: 132, photo: "https://m.media-amazon.com/images/I/81ntPHZ00CL._AC_UF1000,1000_QL80_.jpg"},
        {id:103, title: "Mats", price: 929, photo: "https://images.penguinrandomhouse.com/cover/9780744080834"},
        {id:104, title: "Literatur", price: 712, photo: "https://images.booksense.com/images/015/491/9781465491015.jpg"},
        {id:105, title: "Exam", price: 124, photo: "https://images.pangobooks.com/images/c0bd88da-3f03-4816-ae7f-98b0f1d25dfa?quality=85&width=1200&crop=1%3A1"},
    ])

    const moveToCart = id => {

        const found = products.find(product => product.id === id)

        const indexInBasket = basket.findIndex(item => item.id === id)

        if (indexInBasket !== -1) {
            const updatedBasket = [...basket]
            updatedBasket[indexInBasket] = {
                ...updatedBasket[indexInBasket],
                count: updatedBasket[indexInBasket].count + 1
            };
            setBasket(updatedBasket);
        } else {
            setBasket([...basket, { ...found, count: 1 }]);
        }
    }

    const addToBasket = id =>{
        setBasket(basket.map(elm => elm.id === id ? { ...elm, count: elm.count + 1 } : elm));
    }

    const subtractFromBasket = id =>{
        
        const itemIndex = basket.findIndex(elm => elm.id === id);

        if (itemIndex !== -1) {
            if (basket[itemIndex].count - 1 <= 0) {
                removeFromBasket(id);
            } else {
                setBasket(basket.map(elm => elm.id === id ? { ...elm, count: elm.count - 1 } : elm));
            }
        }
    }

    const removeFromBasket = id =>{
        setBasket(basket.filter(elm => elm.id !== id));
    }

    return (
        <div className="row">
            <ProductList items={products} onMove={moveToCart} />
            <Bascet items={basket}  addToBasket={addToBasket} subtractFromBasket={subtractFromBasket} removeFromBasket={removeFromBasket}/>
        </div>
    )
}

export default App
