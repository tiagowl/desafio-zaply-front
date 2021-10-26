import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaProductHunt, FaSearch } from 'react-icons/fa';
import './style.css';

export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{marginRight: "40px", marginLeft: "20px"}} href="/"><FaProductHunt/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <form className="d-flex" style={{marginRight: "40px"}}>
                            <input style={{backgroundColor: "#E4ECEC ", border: "none", borderRadius: "4px"}} className="form-control me-2" type="search" placeholder="Search Product" aria-label="Search" />
                            <button className="btn btn-dark" type="submit"><FaSearch/></button>
                        </form>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}