import React, { Component } from 'react'

export default class ModalDetail extends Component {


    render() {
        const { showDetail } = this.props
        return <div
            className="modal fade"
            id="modalDetail"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
        >
            <div
                className="modal-dialog"
                style={{ maxWidth: "700px" }}
                role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Detail</h5>
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
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{showDetail?.name}</td>
                                </tr>
                                <tr>
                                    <td>Alias:</td>
                                    <td>{showDetail?.alias}</td>
                                </tr>
                                <tr>
                                    <td>Image:</td>
                                    <td>
                                        <img src={showDetail?.image} alt='' width={100}>
                                        </img>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price:</td>
                                    <td>{showDetail?.price}</td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td>{showDetail?.description}</td>
                                </tr>
                                <tr>
                                    <td>Short Description:</td>
                                    <td>{showDetail?.shortDescription}</td>
                                </tr>
                                <tr>
                                    <td>Quantity:</td>
                                    <td>{showDetail?.quantity}</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        </div>
    }
}
