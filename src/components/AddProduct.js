import { v4 as uuidv4 } from 'uuid';

function AddProduct(props){
    let onSubmit=(event)=>{
        event.preventDefault();
        let data = new FormData(event.target);
        let formData = Object.fromEntries(data.entries());
        formData.id=uuidv4()
        props.onAddProduct(formData);
    }

let onDisplayForm = ()=>{
    props.display()
}

    return(
        <div className="add-product col-4">
            <button type="button" className="btn btn-primary add-button" onClick={onDisplayForm}>ADD NEW PRODUCT</button>
            <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <span>Create New Product</span>
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                    </div>
                    <form className="card-body" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="creatTask">Product Name:</label>
                            <input type="text" className="form-control"  name="product_name" placeholder="Enter product name" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="creatTask">Product Img:</label>
                            <input type="text" className="form-control"  name="product_img" placeholder="Enter url image" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="creatTask">Product Color:</label>
                            <input type="text" className="form-control"  name="product_color" placeholder="Red,Blue,Green...." required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="creatTask">Product Price:</label>
                            <input type="number" className="form-control"  name="product_price" placeholder="10000000VND" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="taskStatus">Product Capacity:</label>
                            <select className="form-control"  name="product_cap">
                                <option value="32GB">32GB</option>
                                <option value="64GB">64GB</option>
                                <option value="128GB">128GB</option>
                            </select>
                        </div>
                        <div className="button-group">
                        <button type="submit" className="btn btn-success mr-3">Save</button>
                        <button type="button" className="btn btn-danger" >Clear</button>
                        </div>

                    </form>
                </div>
        
        </div>
    )
}
export default AddProduct