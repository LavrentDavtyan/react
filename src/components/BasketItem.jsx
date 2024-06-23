export const BasketItem = ({ title, price, count, onRemove, onIncrease, onDecrease }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                {count}
            </td>
            <td>{count * price} USD</td>
            <td>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
                <button onClick={onRemove}>Remove</button>
            </td>
        </tr>
    );
};
