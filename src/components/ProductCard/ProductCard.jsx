import React from "react";
import "./ProductCard.css"

const img_server_path = "/images/products/"



const ProductCard = ({ product }) => {
    return (

        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card card-section" id="card">
                <img src={`${img_server_path}${product.img_src}`} className="card-img-top card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.id}</h5>
                    <p className="card-text">{product.title}</p>
                    <p className="crad-text"> {product.price} </p>
                    <button className="btn btn-secondary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;