import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Bascet } from './components/Bascet'

function App() {

    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        setTotal(basket.reduce((acc, item) => acc + (item.price * item.count), 0));
    }, [basket]);


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
            <Bascet items={basket} total={total}  addToBasket={addToBasket} subtractFromBasket={subtractFromBasket} removeFromBasket={removeFromBasket}/>
        </div>
    )
}

export default App
