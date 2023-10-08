import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./SliderTop.css";

const animation = { duration: 50000, easing: (t) => t };

const SliderTop = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src="/images/car1.jpg" alt="car" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src="/images/car2.jpg" alt="car" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="/images/car3.jpg" alt="car" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="/images/car4.jpg" alt="car" />
        </div>
      </div>
    </div>
  );
};

export default SliderTop;
