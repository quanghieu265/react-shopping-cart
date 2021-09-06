function ProductItem(props) {
    let onAddCart=(id)=>{
        props.onAddToCart(id)
    }
    let onRemoveProduct=(id)=>{
        props.remove(id)
    }

    return (
        <div className="col-4">
            <div className="card">
                <img src={props.product.product_img} className="card-img-top product-img" alt={props.product.product_name} />
                <div className="card-body">
                    <h5 className="card-title">{props.product.product_name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Color: {props.product.product_color}</li>
                    <li className="list-group-item">{props.product.product_cap}</li>
                    <li className="list-group-item">{(Math.round(props.product.product_price * 100) / 100).toLocaleString()}VND</li>
                </ul>
                <div className="button-group" style={{ padding: "16px 0px" }}>
                    <button type="button" className="btn btn-success" onClick={()=>onAddCart(props.product.id)}>Add To Cart</button>
                    <button type="button" className="btn btn-danger" onClick={()=>onRemoveProduct(props.product.id)}>Remove</button>
                </div>

            </div>
        </div>
    )
}
export default ProductItem