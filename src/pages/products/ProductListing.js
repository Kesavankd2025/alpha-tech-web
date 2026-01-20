import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import productDetails from "../../data/productDetails.json";
import { toast } from "react-toastify";

const ProductListing = () => {
    const { subcategoryId } = useParams();
    const [productData, setProductData] = useState(null);
    const dispatch = useDispatch();

    // State to track quantity for each item
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        if (subcategoryId && productDetails[subcategoryId]) {
            setProductData(productDetails[subcategoryId]);
        } else {
            // Fallback for unmapped categories - showing a generic O-Ring set as default for demo or "Not Found"
            // For this task, we will default to o-rings if not found to ensure UI is visible
            setProductData(productDetails["o-rings"]);
        }
    }, [subcategoryId]);

    const handleQuantityChange = (partNo, value) => {
        setQuantities({
            ...quantities,
            [partNo]: parseInt(value) || 1
        });
    };

    const handleAddToCart = (item) => {
        const qty = quantities[item.partNo] || 1;
        dispatch(addToCart({
            id: item.partNo,
            name: `${productData.title} - ${item.partNo}`,
            partNo: item.partNo,
            quantity: qty
        }));
        toast.success(`Added ${qty} x ${item.partNo} to cart!`);
    };

    if (!productData) return <div className="container py-5">Loading...</div>;

    return (
        <div className="product-listing-page bg-industrial-light pb-5 mt-5">
            {/* 1. Header Section */}
            <div className="bg-white border-bottom py-4 mb-4">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{productData.title}</li>
                        </ol>
                    </nav>
                    <h2 className="mb-0 text-uppercase" style={{ borderLeft: '5px solid var(--accent-color)', paddingLeft: '15px' }}>{productData.title}</h2>
                </div>
            </div>

            <div className="container">
                {/* 2. Banner/Intro Section */}
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                        <div className="row align-items-center">
                            <div className="col-md-4 text-center">
                                {/* Using a placeholder image if specific one fails, or the one from JSON */}
                                <div className="p-3 bg-light rounded">
                                    <i className="bi bi-gear-wide-connected display-1 text-muted"></i>
                                    {/* <img src={productData.image} alt={productData.title} className="img-fluid" style={{maxHeight: '200px'}} /> */}
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h4 className="fw-bold mb-3">{productData.title}</h4>
                                <p className="text-muted lead display-6 fs-5">{productData.description}</p>

                                <div className="mt-4">
                                    <h6 className="fw-bold text-uppercase text-muted small">Categories</h6>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-outline-secondary btn-sm active">{productData.title}</button>
                                        <button className="btn btn-outline-secondary btn-sm">Custom Parts</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Product Table */}
                <div className="card border-0 shadow-sm">
                    <div className="card-header bg-white py-3 border-bottom">
                        <h5 className="mb-0 fw-bold">Part Specifications</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped align-middle mb-0">
                            <thead className="bg-light text-dark">
                                <tr>
                                    <th className="py-3 ps-4">Part No.</th>
                                    <th>ID (mm)</th>
                                    <th>OD (mm)</th>
                                    <th>Thk (mm)</th>
                                    <th>Material</th>
                                    <th>Mould No.</th>
                                    <th>Qty</th>
                                    <th className="pe-4 text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData.specs && productData.specs.map((item, index) => (
                                    <tr key={index}>
                                        <td className="fw-bold ps-4 text-primary">{item.partNo}</td>
                                        <td>{item.id}</td>
                                        <td>{item.od}</td>
                                        <td>{item.thk}</td>
                                        <td><span className="badge bg-secondary">{item.material}</span></td>
                                        <td className="text-muted small">{item.mouldNo}</td>
                                        <td style={{ width: '100px' }}>
                                            <input
                                                type="number"
                                                className="form-control form-control-sm text-center"
                                                min="1"
                                                defaultValue="1"
                                                onChange={(e) => handleQuantityChange(item.partNo, e.target.value)}
                                            />
                                        </td>
                                        <td className="pe-4 text-end">
                                            <button
                                                className="btn btn-sm btn-industrial-primary"
                                                onClick={() => handleAddToCart(item)}
                                                style={{ minWidth: '100px', fontSize: '0.8rem', padding: '6px 12px' }}
                                            >
                                                Add to Cart
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {!productData.specs && (
                                    <tr><td colSpan="8" className="text-center py-4">No specifications available for this category.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
