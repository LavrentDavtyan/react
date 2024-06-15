import { BasketItem } from "./BasketItem"

export const Bascet = ({items, total, addToBasket, subtractFromBasket, removeFromBasket})=>{

    return <div>
        <h3>Basket</h3>
        <h2>Total sum : {total}</h2>

        <table>
            <thead>
                <tr>
                    <th> Product</th>
                    <th> Price</th>
                    <th> Count</th>
                    <th> Subtotal</th>
                    <th> Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(elm=> <BasketItem key={elm.id} {...elm} addToBasket={addToBasket} subtractFromBasket={subtractFromBasket} removeFromBasket={removeFromBasket}/>)
                }
            </tbody>
        </table>
    </div>

}