import CartItem from './CartItem'
function Cart(props) {
    let cart = props.cart
    cart = cart.map((item) => {
        return <CartItem cart={item} key={item.id} changeQuantity={props.changeQuantity} remove={props.remove} />
    })

    let sum = 0;
    props.cart.forEach((item) => {
        return sum += (parseInt(item.quantity) * parseInt(item.product_price))
    })

    return (
        <div className="cart-container">
            <div>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>TOTAL</td>
                            <td>{(Math.round(sum * 100) / 100).toLocaleString()} VND</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default Cart