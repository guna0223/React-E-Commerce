import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useCurrency } from "../../context/CurrencyContext";
import "./Navbar.css";
import "@fontsource/roboto";
const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-light" id="navbar" data-bs-theme="">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Shop it</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link women" to="women">WOMEN</Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#">MEN</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#">KIDS</Link>
                            </li>
                        </ul>
                        <div className="d-flex collapse navbar-collapse justify-content-end">
                            <form className="d-flex seaech" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-secondary" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="d-flex align-items-center text-light">
                            <label htmlFor="currencySelect" className="me-2 small mb-0">
                                Currency:
                            </label>
                            {loading ? (
                                <span className="text-light small">Loading...</span>
                            ) : (
                                <select
                                    id="currencySelect"
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    className="form-select form-select-sm bg-dark text-light border-light w-auto"
                                    aria-label="Currency selector"
                                >
                                    {["USD", "EUR", "INR", "GBP", "JPY"].map((code) => (
                                        <option key={code} value={code}>
                                            {code}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                            <li className="nav-item">
                                <Link className="nav-link " to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="contact">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>

    );

}

export default Navbar;