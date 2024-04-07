import React, { Component } from 'react'

export default class ModalCartProduct extends Component {

    renderCartProduct = () => {
        const { showCartProduct } = this.props;
        return showCartProduct?.map((item, index) => {
            return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                    <img src={item.img} width={50} alt=''></img>
                </td>
                <td>
                    <button onClick={() => { this.props.updateQuantity(item.id, false) }}>-</button>
                    {item.quantity}
                    <button onClick={() => { this.props.updateQuantity(item.id, true) }} >+</button>
                </td>
                <td>{item.price * item.quantity}</td>
            </tr>
        })
    }



    render() {
        return <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
        >
            <div
                className="modal-dialog"
                style={{ maxWidth: "1000px" }}
                role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead style={{
                                textAlign: 'center',
                            }}>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                {this.renderCartProduct()}
                            </thead>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }
}
