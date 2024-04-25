import React from "react";
import avt1 from '../imgs/prof/img1.png';
import avt2 from '../imgs/prof/img2.png';
import avt3 from '../imgs/prof/img3.png';
import avt4 from '../imgs/prof/img4.png';


const Home = () => {
    return (
        <div className="container">
            <h1 className="display-4 mb-5">Hello world</h1>
            <div className="row">
                <div className="col-4">
                    <div className="box bx5">
                        <div className="burst"></div>
                        <img src={avt1} alt="avt1" className="img-fluid" /><h3>Maecenas</h3><div>3230 Point</div>
                    </div>
                    <div className="strip">
                        <div className="icon"><img src={avt2} className="fluid-img" alt="Avater" /></div>
                        <div className="text">
                            <h6>Mengenal Music onak</h6>
                        </div>
                        <div className="ends"><span>N</span></div>
                    </div>
                    <div className="strip st1">
                        <div className="icon"><img src={avt3} className="fluid-img" alt="Avater" /></div>
                        <div className="text">
                            <h6>Mengenal Music onak</h6>
                        </div>
                        <div className="ends"><span>M</span></div>
                    </div>
                    <div className="strip st2">
                        <div className="icon"><img src={avt1} className="fluid-img" alt="Avater" /></div>
                        <div className="text">
                            <h6>Mengenal Music onak</h6>
                            <div>Loram ipsum dolor sit amet</div>
                        </div>
                        <div className="ends"><span>P</span></div>
                    </div>
                    <div className="strip st2">
                        <div className="icon"><img src={avt4} className="fluid-img" alt="Avater" /></div>
                        <div className="text">
                            <h6>Mengenal Music onak</h6>
                            <div>Loram ipsum dolor sit amet</div>
                        </div>
                        <div className="ends"><span>Q</span></div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="marktop mt5"><h3>Card title</h3>
                    not working <br />Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                    <div className="corner cc4"><h3>Card title</h3>
                     not working <br />Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                     <div className=""><div className="name"><img src={avt1} className="fluid-img" alt="Avater" /><h6>Card title</h6></div>
                     <div className="name"><img src={avt2} className="fluid-img" alt="Avater" /><h6>Anirudha</h6></div></div>
                     <div className="name"><img src={avt4} className="fluid-img" alt="Avater" /><h6>Bipul Chandra Dev Nath</h6></div>
                    <div className="row">
                        <div className="col">
                            <div className="bdg bd1">
                                <img src={avt3} className="fluid-img" alt="Avater" /><h5>1</h5>
                                <h6>Sumi Nath</h6>
                                <div>3249</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bdg bd2 bdlg">
                                <img src={avt2} className="fluid-img" alt="Avater" /><h5>1</h5>
                                <h6>Anirudha Nath</h6>
                                <div>3249</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="bdg bd3">
                                <img src={avt4} className="fluid-img" alt="Avater" /><h5>1</h5>
                                <h6>Bipul Nath</h6>
                                <div>3249</div>
                            </div>
                        </div>
                    </div>
                     
                </div>
                <div className="col-4">
                    <div className="btn btn-primary m-3">My Btn</div>
                    <div className="btn btn-secondary m-3">My Btn</div>
                    <div className="btn btn-success m-3">My Btn</div>
                    <div className="btn btn-warning m-3">My Btn</div>
                    <div className="btn btn-info m-3">My Btn</div>
                    <div className="btn btn-danger m-3">My Btn</div>
                    <div className="btn btn-dark m-3">My Btn</div>
                </div>
                <div className="col-4">
                </div>
                <div className="col-4">
                </div><div className="col-4">
                    <div className="card mb-5">
                        <img src="https://via.placeholder.com/300" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home