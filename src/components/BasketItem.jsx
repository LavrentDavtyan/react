export const BasketItem = ({title, price, count})=>{


    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price} USD</td>
        <td></td>   
    </tr>

}