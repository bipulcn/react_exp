import React  from "react";

const NavTwo = () => {
    return (
        <div className="custom-navbar border-bottom">
        <div className="nav-top">
            <div className="row justify-content-between">
                <div className="col-6 text-start">
                    <div className="px-3">hello world</div>
                </div>
                <div className="col-6 text-end">
                    <div className="px-3">&#128222; 019929929939</div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand px-3" href="#">&#9918; X Company</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link me-2 px-3 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2 px-3" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2 px-3" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <div className="d-flex d-none">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button class="btn btn-outline-primary">&#9906;</button>
                            </div>
                            <div>
                                <button class="btn btn-outline-primary">&#9906;</button>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav></div>
    );
}

export default NavTwo