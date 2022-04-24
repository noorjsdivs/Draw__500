import { React } from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImageOne from "../assets/images/1.jpg";
import sliderImageTwo from "../assets/images/2.jpg";
import sliderImageThree from "../assets/images/3.jpg";
import sliderImageFour from "../assets/images/4.jpg";
import sliderImageFive from "../assets/images/5.jpg";
import sliderImageSix from "../assets/images/6.jpg";
import sliderImageSeven from "../assets/images/7.jpg";
import nextImage from "../assets/images/next.png";

function Slider() {
  return (
    <>
      <div className="w-auto h-96">
        <Carousel
          className="w-auto h-96"
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img
              className="w-auto h-96"
              loading="lazy"
              src={sliderImageOne}
              alt="image_1"
            />
          </div>
          <div>
            <img
              className="w-auto h-96"
              loading="lazy"
              src={sliderImageTwo}
              alt="image_2"
            />
          </div>
          <div>
            <img
              className="w-auto h-96"
              loading="lazy"
              src={sliderImageFour}
              alt="image_3"
            />
          </div>
          <div>
            <img
              className="w-auto h-96"
              loading="lazy"
              src={sliderImageFive}
              alt="image_3"
            />
          </div>
          <div>
            <img
              className="w-auto h-96"
              loading="lazy"
              src={sliderImageSix}
              alt="image_3"
            />
          </div>
          <div>
            <img
              className="w-auto h-96"
              loading="lazy"
              src={nextImage}
              alt="image_3"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
