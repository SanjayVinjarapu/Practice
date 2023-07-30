import React from "react";
import './Header.css';

function Header(){

    const handleCartClick = () => {
        // Add your logic to open the cart here
        console.log('Cart clicked!');
      };
      
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">


                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-light search" type="submit">Search</button>
                </form>


                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <button className="btn btn-light cart" onClick={handleCartClick}>
                    <i className="bi bi-cart"></i> Cart
                </button>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>

        // <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div classNameName="container-fluid">
        //         <a classNameName="navbar-brand" href="#">Company</a>
        //         <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span classNameName="navbar-toggler-icon"></span>
        //         </button>
        //         <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
        //         <form classNameName="d-flex" role="search">
        //             <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //             <button classNameName="btn" type="submit">Search</button>
        //         </form>

        //         <ul classNameName="navbar-nav mb-2 mb-lg-0 ms-auto">
        //         <ul classNameName="dropdown-menu">
        //                 <li><a classNameName="dropdown-item" href="#">Action</a></li>
        //                 <li><a classNameName="dropdown-item" href="#">Another action</a></li>
        //                 <li><hr classNameName="dropdown-divider"/></li>
        //                 <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
        //             </ul>
        //             <li classNameName="nav-item">
        //             <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        //             </li>
        //             <li classNameName="nav-item">
        //             <a classNameName="nav-link" href="#">Login</a>
        //             </li>
        //             <li classNameName="nav-item">
        //             <a classNameName="nav-link" href="#">Register</a>
        //             </li>
        //             <li classNameName="nav-item dropdown">
        //             <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Dropdown
        //             </a>
                    
        //             </li>
                    
        //         </ul>
                
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header;