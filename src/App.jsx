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
        let found = products.find(x=>x.id ===id)
        setBasket([...basket, {...found, count:1}])
    }


    return (
        <div className="row">
            <ProductList items={products} onMove={moveToCart} />
            <Bascet items={basket}/>
        </div>
    )
}

export default App
