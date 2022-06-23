import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import "../App.css"

import slider1 from './photo/slider1.png';
import slider2 from './photo/slider2.jpg';

const Carousel = () => {

    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <img className="embla__slide" src={slider1} />
                <img className="embla__slide" src={slider2} />
            </div>
        </div>
    )
};

export default Carousel;
