import Carousel from 'react-bootstrap/Carousel' 
import pic1 from '../images/pic1.jpg' 
import pic2 from '../images/pic2.jpg' 
import pic3 from '../images/pic3.jpg' 
import pic4 from '../images/pic4.jpg' 
import pic5 from '../images/pic5.jpg' 
import pic6 from '../images/pic6.jpg' 

function Carouselcp() {
        const carouselStyle = {
          height: '70vh'
        };
      
        const imageStyle = {
          height:'70vh',
          objectFit:"cover",
        };
  return (
    <Carousel style={carouselStyle} className="half-screen-carousel">
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={pic4}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={pic5}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={pic6}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselcp;