import React from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../../context/CurrencyContext";
import "./ProductCard.css";

const img_server_path = "/images/products/"

const ProductCard = ({ product }) => {

    const { convertPrice, getSymbol, loading } = useCurrency();

    const converted = convertPrice(product.price)

    return (

        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card card-section h-100" id="card">
                <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="card-link-area text-dectration-none text-dark"
                    area-abbel={`Vew details for ${product.title}`}
                >
                    <img
                        src={`${img_server_path} ${img_server_src}`} 
                        className="crad-img-top"
                        alt={product.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title"> {product.title} </h5>
                    </div>
                    {loading ? (
                        <p className="card-text text-muted">Loafing currency....</p>
                    )  : (
                        <>
                        <p className="card-text mb-1 fw-bold">
                            {getSymbol()} {converted}
                        </p>
                        <p className="card-text text-secondary small">
                            (Base: ${product.price} USD)
                        </p>
                        </>
                    )}
                </Link>
                    <div className="card-footer bg-transparent border-0">
                        <button className="btn btn-primary w-100" type="button">
                            Add To Cart
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;