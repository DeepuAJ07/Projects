import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BusinessCard(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1025 },
          items: 5,
          slidesToSlide: 1
        },
        desktop: {
          breakpoint: { max: 1024, min: 801 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 800, min: 465 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
      return <div className="container">
        <h4>Trending Business</h4>
   <Carousel responsive={responsive}  showDots={true} autoPlay={true} autoPlaySpeed={3000} >
  <div className="card">
    <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2>
  </div>
  <div className="card">  <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2></div>
  <div className="card">  <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2></div>
  <div className="card">  <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2></div>
    <div className="card">  <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2></div>
    <div className="card">  <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2></div>
    <div className="card">  <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2></div>
    <div className="card">  <img src="https://vemalls.online/images/slider-main-vemalls.jpg" alt="Vemalls"></img>
    <h2>Shop Name</h2>
    <h2>Location</h2></div>
</Carousel>


      </div>
}