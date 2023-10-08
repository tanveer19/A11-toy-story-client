import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Gallery.css";

const Gallery = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function () {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [Gallery]
  );

  return (
    <div>
      <h2 className="text-4xl text-center bg-sky-600 p-3">Gallery</h2>

      <div className="wrapper my-4">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1 ">
              <img src="/images/car4.jpg" alt="" />
            </div>
            <div className="carousel__cell number-slide2">
              <img src="/images/car3.jpg" alt="" />
            </div>
            <div className="carousel__cell number-slide3">
              <img src="/images/car2.jpg" alt="" />
            </div>
            <div className="carousel__cell number-slide4">
              <img src="/images/car1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
