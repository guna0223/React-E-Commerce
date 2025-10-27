import React from "react";

const img_server_path = "/images/products/"

const WomenCard = ({ product }) => {
    return (
        <>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card-section" id="card">
                    <img src={`${img_server_path}${product.img_src}`} className="card-img-top card-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.id}</h5>
                        <span className="card-text product-title ">{product.title}</span><br />
                        <span className="crad-text product-price"> ₹ {product.price} </span>
                        <span className="card-text product-discount">{product.discount} %</span>
                        <span className="card-text product-offer"> {product.offer} </span>
                        <span className="card-text text" id="card-description"> {product.description} </span>
                        <button className="btn btn-secondary mt-3 product-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomenCard;