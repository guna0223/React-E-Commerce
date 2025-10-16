import React from "react";
import "./ProductCard.css"

// const img_server_path = "images/products/"
// Error ?//

const ProductCard = ({ product }) => {
    return (

        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={` images/products/${product.img_src}`} className="card-img-top card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.id}</h5>
                    <p className="card-text">{product.title}</p>
                    <p className="crad-text"> {product.price} </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;