import React from "react";
import img1 from '../src/image/college.jpg';
import img2 from '../src/image/college1.jpg';
import img3 from '../src/image/college2.jpg';



import './index.css'
function Slider() {
    return (
        <div className="slider">
            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active ">
                        <img src={img1} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

      
        
          

         


           </div>





    );
}
export default Slider;