import ProductItem from './ProductItem'

function ProductList(props) {
    let product = props.product
    product = product.map((item) => {
        return <ProductItem product={item} key={item.id} onAddToCart={props.onAddToCart} remove={props.remove} />
    })
    return (
        <div className="col-8">
            <div className="row g-3">
                {product}
            </div>
        </div>
    )
}
export default ProductList