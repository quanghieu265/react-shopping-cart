import { useState } from 'react'
import './App.css';
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [listProduct, setListProduct] = useState(localStorage.getItem('product') && localStorage.getItem('product') !=="[]"? JSON.parse(localStorage.getItem('product')) : [{
    id: 1,
    product_cap: "128GB",
    product_color: "Silver",
    product_img: "https://www.xtmobile.vn/vnt_upload/product/12_2019/thumbs/600_2625_p2_1530071508_3.png",
    product_name: "Iphone X",
    product_price: "10000000"
  }])
  const [listCart, setListCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
  const [message, setMessage] = useState("")
  const [displayForm, setDisplayForm] = useState(true)

  let onAddProduct = (data) => {
    let cloneState = [...listProduct]
    cloneState.push(data)
    localStorage.setItem('product', JSON.stringify(cloneState))
    setListProduct(cloneState)
  }

  let onAddToCart = (id) => {
    let result = listCart.some((item) => {
      return item.id === id
    })

    if (result) {
      let cloneState = [...listCart]
      cloneState.forEach((item) => {
        if (item.id === id) {
          item.quantity += 1
        }
      })
      localStorage.setItem('cart', JSON.stringify(cloneState))
      setListCart(cloneState)
      setMessage("Successfully added to cart")
    } else {
      let cart = listProduct.find((item) => {
        return item.id === id
      })
      cart.quantity = 1
      let cloneState = [...listCart]
      cloneState.push(cart)
      localStorage.setItem('cart', JSON.stringify(cloneState))
      setListCart(cloneState)
      setMessage("Successfully added to cart")
    }

  }

  let onChangeQuantity = (id, quantity) => {
    let cloneState = [...listCart]
    cloneState.forEach((item) => {
      if (item.id === id) {
        item.quantity = quantity
        console.log(item.quantity)
      }
    })
    localStorage.setItem('cart', JSON.stringify(cloneState))
    setListCart(cloneState)
  }

  let onRemoveCart = (id) => {
    let index = listCart.findIndex(item => item.id === id)
    let cloneState = [...listCart];
    cloneState.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cloneState))
    setListCart(cloneState)
    setMessage("Successfully removed from cart")
  }

  let onRemoveProduct = (id) => {
    let index = listProduct.findIndex(item => item.id === id)
    let cloneState = [...listProduct];
    cloneState.splice(index, 1)
    localStorage.setItem('product', JSON.stringify(cloneState))
    setListProduct(cloneState)
  }

  let onDisplayForm = () => {
    setDisplayForm(!displayForm)
  }
  
  return (
    <div>
      <div className="container-content row">

        {displayForm ? <AddProduct onAddProduct={onAddProduct} display={onDisplayForm} /> : <button type="button" className="btn btn-primary add-button" onClick={onDisplayForm}>ADD NEW PRODUCT</button>}
        <ProductList product={listProduct} onAddToCart={onAddToCart} remove={onRemoveProduct} />
      </div>
      <div className="shopping-cart">
        <div className="cart-message">
          <span style={{ color: message === "Successfully added to cart" ? "green" : "red" }}>{message}</span>
        </div>
        {listCart.length === 0 ? "Chưa có sản Phẩm nào trong giỏ hàng" : <Cart cart={listCart} changeQuantity={onChangeQuantity} remove={onRemoveCart} />}
      </div>
    </div>
  );
}

export default App;
