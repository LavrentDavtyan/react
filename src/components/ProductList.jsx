import { useContext } from "react";
import { ProductItem } from "./ProductItem";
import { UserContext , ADD_TO_BASKET} from "../UserContex";

export const ProductList = ({ items }) => {
    const { dispatch } = useContext(UserContext);

    const handleMoveToCart = (id) => {
        dispatch({ type: ADD_TO_BASKET, payload: { id } });
    };

    return (
        <div>
            <h3>Product List</h3>
            <div className="list">
                {items.map(elm => <ProductItem key={elm.id} {...elm} onMove={handleMoveToCart} />)}
            </div>
        </div>
    );
};
