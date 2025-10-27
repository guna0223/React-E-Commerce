import React from "react";
import "./WomenCard.css"

const img_server_path = "/images/women-product/"

const WomenCard = ({ products }) => {
    return (
        <>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card-section" id="card">
                    <img src={`${img_server_path}${products.img_src}`} className="card-img-top card-img" alt="..." />
                    <div className="card-body">
                        {/* <h5 className="card-title">{products.id}</h5> */}
                        <span className="card-text product-title ">{products.title}</span><br />
                        <span className="crad-text product-price"> ₹ {products.price} </span>
                        <span className="card-text product-discount">{products.discount} %</span>
                        <span className="card-text product-offer"> {products.offer} </span>
                        <span className="card-text text" id="card-description"> {products.description} </span>
                        <button className="btn btn-secondary mt-3 product-btn">Add to Cart</button>
                        <button className="btn btn-secondary mt-3 view-btn">view</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomenCard;