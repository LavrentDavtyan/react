import { useContext } from "react";
import { UserContext, REMOVE_FROM_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY  } from "../UserContex";
import { BasketItem } from "./BasketItem";

export const Basket = ({ items }) => {
    const { dispatch } = useContext(UserContext);

    const handleRemove = (id) => {
        dispatch({ type: REMOVE_FROM_BASKET, payload: { id } });
    };

    const handleIncrease = (id) => {
        dispatch({ type: INCREASE_QUANTITY, payload: { id } });
    };

    const handleDecrease = (id) => {
        dispatch({ type: DECREASE_QUANTITY, payload: { id } });
    };

    const total = items.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(elm => (
                        <BasketItem
                            key={elm.id}
                            {...elm}
                            onRemove={() => handleRemove(elm.id)}
                            onIncrease={() => handleIncrease(elm.id)}
                            onDecrease={() => handleDecrease(elm.id)}
                        />
                    ))}
                </tbody>
            </table>
            <h3>Total: {total} USD</h3>
        </div>
    );
};
