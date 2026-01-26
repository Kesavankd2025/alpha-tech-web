import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from '../../context/TranslationContext';
import categoryData from '../../data/categories.json'; // To get titles/images if needed
import subcategoryVariants from '../../data/subcategoryVariants.json';

const SubcategoryVariants = () => {
    const { subcategoryId } = useParams();
    const navigate = useNavigate();
    const { translateSync } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [subcategoryId]);

    // Find parent category info if needed, or just use subcategoryId
    // In categoryData, we have to search which category contains this subcategory
    const parentCategory = categoryData.find(cat =>
        cat.subcategories.some(sub => sub.id === subcategoryId)
    );
    const subcategoryInfo = parentCategory?.subcategories.find(sub => sub.id === subcategoryId);

    const variants = subcategoryVariants[subcategoryId];

    // If no variants defined, maybe redirect to a default "all" view or handle handle it.
    // For now, if no variants, we might just redirect to the list view directly (legacy behavior), 
    // but the user wants this intermediate page. We'll show a message or generic item if empty.

    // If variants are empty/undefined, we could "fake" a single variant or redirect.
    // But since the user specifically asked for this page, let's render it even if empty or allow "View All".

    return (
        <div className="subcategory-variants-page" style={{ marginTop: '100px', minHeight: '60vh', paddingBottom: '50px' }}>
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary display-5 mb-3">
                        {subcategoryInfo ? subcategoryInfo.name : translateSync('Products')}
                    </h1>
                    <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--accent-color)', margin: '0 auto', borderRadius: '2px' }}></div>
                    <p className="lead mt-3">
                        {translateSync('Select a specific type below for technical specifications.')}
                    </p>
                </div>

                {/* Variants Grid */}
                {variants ? (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 justify-content-center">
                        {variants.map((variant) => (
                            <div className="col" key={variant.id}>
                                <div
                                    className="card h-100 shadow-sm hover-lift cursor-pointer"
                                    onClick={() => navigate(`/products/${subcategoryId}/${variant.id}`)}
                                    style={{ transition: 'all 0.3s ease', cursor: 'pointer', border: '2px solid var(--accent-color)' }}
                                >
                                    <div className="card-body p-4 text-center d-flex flex-column align-items-center">
                                        {/* Image or Icon */}
                                        <div className="mb-4 d-flex align-items-center justify-content-center"
                                            style={{ height: '120px', width: '100%' }}>
                                            {variant.image ? (
                                                <img src={variant.image} alt={variant.name} style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
                                            ) : (
                                                <div className="rounded-circle d-flex align-items-center justify-content-center"
                                                    style={{ width: '80px', height: '80px', backgroundColor: '#e3f2fd', color: 'var(--primary-color)' }}>
                                                    <i className="bi bi-layers-half fs-1"></i>
                                                </div>
                                            )}
                                        </div>

                                        <h5 className="card-title fw-bold text-dark">{variant.name}</h5>
                                        {variant.desc && (
                                            <p className="card-text text-muted small">{variant.desc}</p>
                                        )}

                                        <button className="btn btn-sm mt-auto rounded-pill px-4 view-specs-btn" style={{ fontWeight: '600' }}>
                                            {translateSync('View Specs')} <i className="bi bi-arrow-right ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <div className="alert alert-info">
                            {translateSync('No specific variants found for this category. View all products directly.')}
                        </div>
                        <button onClick={() => navigate(`/products/${subcategoryId}/all`)} className="btn btn-primary">
                            {translateSync('View All Products')}
                        </button>
                    </div>
                )}
            </div>

            <style>
                {`
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                }
                .view-specs-btn {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    transition: background-color 0.3s ease;
                }
                .view-specs-btn:hover {
                    background-color: var(--accent-color);
                    color: white;
                }
                `}
            </style>
        </div>
    );
};

export default SubcategoryVariants;
