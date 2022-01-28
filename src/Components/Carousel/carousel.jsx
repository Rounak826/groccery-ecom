import React from "react";
import { Carousel } from "react-bootstrap";


export default function CarouselComp() {
  return (
      <Carousel className="carousal" style={{borderRadius:2+'rem',overflow:'hidden'}} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.fbho2-1.fna.fbcdn.net/v/t1.6435-9/107957460_108016594315931_6584421409128574454_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=lb4JR2Ldm8sAX_hUVOA&_nc_ht=scontent.fbho2-1.fna&oh=00_AT9VM3xO0DartdYTBnBziEqnT56l6C15YC2_syn-ZtWgyw&oe=620DD883"
            height={"500px"}
            width={"50px"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://trak.in/wp-content/uploads/2021/01/IMG_20210114_163421.jpg"
            height={"500px"}
            //width={"50px"}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.worldbakers.com/wp-content/uploads/flours-750x400.jpg"
            height={"500px"}
            // width={"50px"}
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
  );
}
