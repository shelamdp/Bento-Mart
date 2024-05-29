import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='container-md w-75'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/711eb2845309fb5d2a30ba308c8d8a5f-1668050904645"
                    alt="First slide" style={{height: '500px', width: '200px'}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/ae37f388c1ffa5c88c47898920163e58-1664558041321"
                    alt="Second slide"
                    style={{height: '500px', width: '200px'}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/525911fbfd26e612ea336f2e756f193b-1675838676547"
                    alt="Third slide"
                    style={{height: '500px', width: '200px'}}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;