import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => (
  <Carousel className='slider'
    autoPlay
    interval={2000} // Slide every 1 second
    infiniteLoop // Keeps the carousel looping
    stopOnHover={false} // Continue sliding even when hovered over
    showThumbs={false} // Hide thumbnails
  >
    <div><img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="Slide 1" /></div>
    <div><img src="https://www.holidify.com/images/bgImages/DELHI.jpg" alt="Slide 2" /></div>
    <div><img src="https://media.istockphoto.com/id/506393198/photo/great-wall-of-china.jpg?s=612x612&w=0&k=20&c=cJti-RrdUUkLX_zgzi6KgPbgApHoxJtMJSvlRUYqOzg=" alt="Slide 2" /></div>
    <div><img src="https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzdCUyMGF0dHJhY3Rpb258ZW58MHx8MHx8fDA%3D" alt="Slide 2" /></div>
  </Carousel>
);

export default CarouselComponent;
