import React, { Component } from 'react'

export default class Product extends Component {

    handleDetailProducts = () => {
        this.props.getDetailProduct(this.props.data);
    }
    
    render() {
        const { data } = this.props
        return (
            <div className="col-sm-4" style={{
                marginBottom: '10px'
            }}>
                <div className="card" style={{
                    alignItems: 'center'
                }}>
                    <img className="card-img-top" src={data.image} alt="" />
                    <div className="card-body">
                        <h6 className="card-title">{data.name}</h6>
                        <p className='card-price'>{data.price}$</p>
                        <button className="btn btn-warning" data-toggle="modal" data-target="#modalDetail" onClick={this.handleDetailProducts} style={{
                            margin: '10px',
                        }}>Detail</button>
                        <button className="btn btn-success" onClick={() => {
                            this.props.handleCartProduct(data)
                        }}>Add Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
