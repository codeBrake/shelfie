import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            inventory: [],
            imageUrl: '',
            productName: '',
            price: 0
        }
    }
    handleChange = (val, key) => {
        let obj = {}
        obj[key] = val 
        this.setState(obj)
    }
    cancelAdd = () => {
        this.setState({
            imageUrl: '',
            productName: '',
            price: 0
        })
    }
    addInventory = () => {
        let {imageUrl, productName, price} = this.state
        axios.post('/api/product', {imageUrl, productName, price}).then(response => {
            console.log(response.data)
            this.setState({
                inventory: response.data,
                imageUrl: '',
                productName: '',
                price: 0
            })
        })
    }
    editButton = (inventory) => {
        axios.put('/api/product', {inventory}).then(results => {
            console.log(results)
            this.setState({
                inventory: results.data
            })
        })
    }
    deleteButton = () => {
        let {id} = this.state.inventory
        axios.delete(`/api/delete/${id}`).then( response => {
            this.setState({
                inventory: response.data
            })
        })
    }
    render(){
        let {inventory, imageUrl, productName, price} = this.state
        return(
            <div>
                <div>
                    <div className="addInventory">
                        <div>Image URL: <input value={imageUrl} onChange={(e) => this.handleChange(e.target.value, 'imageUrl')}/></div>
                        <div>Product Name: <input value={productName} onChange={(e) => this.handleChange(e.target.value, 'productName')}/></div>
                        <div>Price: <input value={price} onChange={(e) => this.handleChange(e.target.value, 'price')}/></div>
                        <div><button onClick={this.cancelAdd}>Cancel</button></div>
                        <div><button onClick={this.addInventory}>Add to Inventory</button></div>
                    </div>
                    <div>
                    {
                        inventory.map((param, index) => {
                            return(
                                
                                <Product
                                imageUrl={param.imageurl}
                                productName={param.productname}
                                price={param.price}
                                ></Product>                            
                            )
                        })
                    }
                    <button className="edit-button" onClick={this.editButton}>Edit</button>
                    <button className="delete-button" onClick={this.deleteButton}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard
