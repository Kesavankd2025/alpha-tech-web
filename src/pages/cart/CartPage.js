import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../../redux/cartSlice";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    return (
        <div className="container py-5 mt-5">
            <h2 className="mb-4">Shopping Cart ({totalQuantity} items)</h2>

            {cartItems.length === 0 ? (
                <div className="alert alert-info">
                    Your cart is empty. <Link to="/products">Browse Products</Link>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm">
                            <div className="table-responsive">
                                <table className="table align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th>Product</th>
                                            <th>Part No.</th>
                                            <th>Quantity</th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <h6 className="mb-0">{item.name}</h6>
                                                </td>
                                                <td>{item.partNo}</td>
                                                <td>{item.quantity}</td>
                                                <td className="text-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() => dispatch(removeFromCart(item.id))}
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-3 text-end">
                            <button className="btn btn-outline-danger me-2" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
