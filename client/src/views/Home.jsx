import React from "react";

const Home = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + './img/front-entrance.jpeg'} class="img-fluid" alt="front-entrance" />
            <div className='container d-block mx-auto w-85 my-3 p-3' >
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">Photo Group 1</button>
                        <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Photo Group 2</button>
                        <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false">Photo Group 3</button>
                    </div>
                </nav>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + './img/front-door.jpeg'} class="card-img-top img-size" alt="front-door" />
                                    <div class="card-body">
                                        <h5 class="card-title">Dinning Area</h5>
                                        <p class="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + './img/entry-way.jpeg'} class="card-img-top img-size" alt="entry-way" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Room Sized</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + './img/dinning-room1.jpeg'} class="card-img-top img-size" alt="dinning-room" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + './img/dinning-room2.jpeg'} class="card-img-top img-size" alt="dinning-room" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + './img/dinning-room3.jpeg'} class="card-img-top img-size" alt="dinning-room" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + './img/kitchen.jpeg'} className="card-img-top img-size" alt="kitchen" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + './img/room1.jpeg'} className="card-img-top img-size" alt="room1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + './img/bathroom1.jpeg'} className="card-img-top img-size" alt="bathroom1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + './img/bathroom2.jpeg'} className="card-img-top img-size" alt="bathroom2" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="3-tab" tabindex="0">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + './img/back-yard1.jpeg'} className="card-img-top img-size" alt="backyard" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + './img/back-yard2.jpeg'} className="card-img-top img-size" alt="backyard" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Room Size</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home