import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SlideShow = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container h-1/2">
        <AwesomeSlider>
          <div data-src="/img/ForSlideShow/BajuSlide2.jpg">
            <p>I want to see what you got.</p>
          </div>
          <div data-src="/img/ForSlideShow/BarangeElektronikHD.jpg">
            <p>The answer is -- Don't think about it.</p>
          </div>
          <div data-src="/img/ForSlideShow/BajuSlide1.jpg">
            <p>The answer is -- Don't think about it.</p>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};
export default SlideShow;
