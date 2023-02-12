import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
import CarouselImage1 from '../assets/images/carousel1.png'
import CarouselImage2 from '../assets/images/carousel2.JPG'
import CarouselImage3 from '../assets/images/carousel3.JPG'

const items = [
  {
    src: CarouselImage1,
    altText: "Image 1",
    caption: <>
      <h1>LITERACY MISSION NIT</h1>
      <p>
        <span style={{display:"block"}}> is working towards its mission of providing maximum possible support to those who struggle even for the basic amenities of life.</span>
        <span style={{display:"block"}}>We aim to impart them the quality education and hence, enable them to stand firm in this competitive world.</span>
      </p>
    </>
  },
  {
    src: CarouselImage2,
    altText: "Image 2",
    caption: <>
      <h1>HERE IN AND AROUND NITH</h1>
      <p>there are many children who are in need of education, but can't get it owing to lack of resources. They are those who can do much more in life but are restricted because their parents don't have enough money to support them. Literacy Mission is working hard to change that.</p>
    </>
  },
  {
    src: CarouselImage3,
    altText: "Alt Text",
    caption: <>
        <h1>WE THINK THAT</h1>
      <p>
        <span style={{display:"block"}}>Let Us Give Them What They Need,</span>
        <span style={{display:"block"}}>And Make Them Achieve What They Can,</span>
        <span style={{display:"block"}}>But Not Leave Them What They Are.</span>
      </p>
    </>
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
        <img src={item.src} alt={item.altText} style={{width:"100vw", height:"80vh"}} />
        <div className="carousel-caption d-none d-md-block">
          {item.caption}
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