
function CartItem(props) {
    let onChangeQuantity=(event) => {
        props.changeQuantity(props.cart.id,event.target.value)
    }

    let onRemove=(id)=>{
        props.remove(id)
    }

    return (
        <tr>
            <td>1</td>
            <td>
                <div className="d-flex">
                    <img src={props.cart.product_img} alt="iphone" style={{ maxWidth: 100 }} />
                    <div className="d-flex flex-column">
                        <span>{props.cart.product_name}</span>
                        <span>{props.cart.product_color}</span>
                        <span>{props.cart.product_cap}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="quantity-button">
                    <input value={props.cart.quantity} className="quantity-input" type="number" name="quantity" id="quantity" min="1" max="100" onChange={onChangeQuantity}/>
                </div>
            </td>
            <td>{(Math.round(props.cart.product_price * 100) / 100).toLocaleString()} VND</td>
            
            <td>{(Math.round(props.cart.quantity * props.cart.product_price * 100) / 100).toLocaleString()} VND</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={()=>onRemove(props.cart.id)}>Remove</button>
            </td>
        </tr>
    )
}
export default CartItem