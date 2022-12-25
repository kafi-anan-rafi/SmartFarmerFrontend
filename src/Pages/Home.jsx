import React from 'react'
// import carousel from '../Assets/carousel.jpeg';
import farmer from '../Assets/Farmer.jpg';

function Home() {
  return (
    <div className='text-center mb-8'>
      {/* <h1>Welcome to Smart Farmer!</h1> */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={farmer} className="d-block w-100" alt="Slider" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home