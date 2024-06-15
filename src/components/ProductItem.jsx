export const ProductItem = ({title, id, price, photo, onMove})=>{


    return <div>
        <img src={photo} />
        <p>{title}</p>
        <p><strong>{price}</strong> UsD</p>
        <button onClick={()=>onMove(id)}>more</button>
    </div>

}