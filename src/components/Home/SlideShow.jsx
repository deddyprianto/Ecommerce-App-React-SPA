import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SlideShow = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container h-1/2">
        <AwesomeSlider>
          <div data-src="https://lzd-img-global.slatic.net/g/p/15d70b91295ca31c3c3b3f3daec40edd.jpg_720x720q80.jpg_.webp">
            <p>I want to see what you got.</p>
          </div>
          <div data-src="https://blog.atome.id/wp-content/uploads/2021/04/Tas-Selempang-Kekinian-Remaja-Wanita.jpg">
            <p>The answer is -- Don't think about it.</p>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};
export default SlideShow;
