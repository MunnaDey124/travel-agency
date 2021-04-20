import React from 'react';
import winter1 from '../../../images/winter1.jpg';
import winter2 from '../../../images/winter2.jpg';
import winter3 from '../../../images/winter3.jpg';

const HeaderMain = () => {
    return (
        <div className="container pt-4">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img style={{height:'500px'}} className="img-fluid" src={winter1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h6>Enjoy Your</h6>
                        <h1>Winter Vacation</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img style={{height:'500px'}} src={winter2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h6>from Alps</h6>
                        <h1>Snow Adventure</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img style={{height:'500px'}} src={winter3} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h6>Visit</h6>
                        <h1>Magic Of Italy</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
};

export default HeaderMain;