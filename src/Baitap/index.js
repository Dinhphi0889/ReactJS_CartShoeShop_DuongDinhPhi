import React, { Component } from 'react'
import ModalCartProduct from './_modalCart';
import ListProduct from './_listProduct';
import ModalDetail from './_modalDetail';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listProduct: data,
            cartProduct: [],
            productDetail: null,
        }
    }
    getDetailProduct = (product) => {
        this.setState({
            productDetail: product,
        })

    }


    handleCartProduct = (product) => {
        const cartProduct = {
            id: product.id,
            name: product.name,
            img: product.image,
            price: product.price,
            quantity: 1,
        }

        const listCartClone = [...this.state.cartProduct]
        const index = this.findIndexProduct(cartProduct.id)

        if (index !== -1) {
            listCartClone[index].soLuong += 1;
        }
        else {
            listCartClone.push(cartProduct);
        }
        this.setState({
            cartProduct: listCartClone,
        })
    }

    findIndexProduct = (id) => {
        return this.state.cartProduct.findIndex((product) => product.id === id)
    }

    totalQuantity = () => {
        return this.state.cartProduct.reduce((total, product) =>
            total += product.quantity, 0)
    }

    handleUpdateQuantity = (id, boolean) => {
        const productClone = [...this.state.cartProduct]
        const index = this.findIndexProduct(id)
        if (index !== -1) {
            if (boolean) {
                productClone[index].quantity += 1;
            } else {
                if (productClone[index].quantity > 1) {
                    productClone[index].quantity -= 1;
                }
            }
        }
        this.setState({
            cartProduct: productClone,
        })
    }

    handleUpdatePrice = () => { 
        
    }


    render() {
        return (
            <>
                <div className="container">
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Cart ({this.totalQuantity()})
                    </button>
                    <ModalCartProduct showCartProduct={this.state.cartProduct} updateQuantity={this.handleUpdateQuantity} />
                </div>
                <ListProduct data={this.state.listProduct} getDetailProduct={this.getDetailProduct} handleCartProduct={this.handleCartProduct} />
                <div className='container'>

                    <ModalDetail showDetail={this.state.productDetail} />
                </div>
            </>
        )
    }
}
