export const BasketItem = ({title, price, count, id, addToBasket, subtractFromBasket, removeFromBasket})=>{


    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price} USD</td>
        <td>
            <button onClick={()=>subtractFromBasket(id)}>-</button>
            <button onClick={()=>addToBasket(id)}>+</button>
            <button onClick={()=>removeFromBasket(id)}>X</button>
        </td>   
    </tr>

}