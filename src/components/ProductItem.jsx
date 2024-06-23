export const ProductItem = ({ title, id, price, photo, onMove }) => {
    return (
        <div>
            <img src={photo} alt={title} />
            <p>{title}</p>
            <p><strong>{price}</strong> USD</p>
            <button onClick={() => onMove(id)}>Add to Cart</button>
        </div>
    );
};
