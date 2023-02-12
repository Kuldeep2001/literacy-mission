import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
import CarouselImage1 from '../assets/images/carousel1.png'
import CarouselImage2 from '../assets/images/carousel2.JPG'
import CarouselImage3 from '../assets/images/carousel3.JPG'

const items = [
  {
    src: CarouselImage1,
    altText: "Image 1",
    caption: "Image 1"
  },
  {
    src: CarouselImage2,
    altText: "Image 2",
    caption: "Image 2"
  },
  {
    src: CarouselImage3,
    altText: "Alt Text",
    caption: "Text"
  }
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width:"100vw", height:"70vh"}} />
        <div className="carousel-caption d-none d-md-block">
          <h3>{item.caption}</h3>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default ImageCarousel;