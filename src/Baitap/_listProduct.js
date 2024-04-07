import React, { Component } from 'react'
import Product from './_product'



export default class ListProduct extends Component {

    renderListProduct = () => {
        const { data, getDetailProduct, handleCartProduct } = this.props
        return data?.map((item) => {
            return <Product key={item.id} data={item} getDetailProduct={getDetailProduct} handleCartProduct={handleCartProduct} />
        })
    }

    render() {
        return (
            <div className="container" style={{
                width: '900px',
            }}>
                <div className="row">
                    {this.renderListProduct()}
                </div>
            </div>

        )
    }


}
