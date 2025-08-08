
import BG from "../../assets/img/hero/hero3/bg4.jpg";
import IMG_VIDEO from "../../assets/img/video/video.jpg";
import { VideoPlayer } from "../video/VideoPlayer";
import { Link } from "react-router-dom";import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";


export const HeroThree = () => {
  return (
    <div className="td-hero-area">
      <div className="td-hero-3-spacing bg-position" 
       style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "flex-end", // Align content to bottom
        }}
      >
        <div className="container pr-150 ">
          <div className="">
            <div className="">
              <div className="td-hero-3-title-wrap">
                {/* <h2 className="td-hero-3-title "
                style={{ fontSize: "5.4rem" }}>
                  <span
                    className=" wow fadeInRight"
                    data-wow-delay=".3s"
                    data-wow-duration="1.5s"
                  >
                    Curated investments
                  </span>
                  <br />
                  <b
                    className="last wow fadeInLeft"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <span className="first wow">Crafted for your tomorrow</span>
                  </b>
                </h2> */}
                 {/* <div className="td-hero-text-slider mb-70">
          <TextSlider />

                </div>     */}
              
              </div>
            </div>
          </div>
        </div>
        
      </div>
  
      
    </div>
  );
};


const TextSlider = () => {
  const LIST_OF_TEXT_SLIDES = [
    "Business",
    "Agency",
    "Business",
    "Agency",
    "Business",
    "Agency",
  ];

  const swiper_settings = {
    loop: true,
    speed: 400000,
    allowTouchMove: false,
    slidesPerView: "auto",
    slidesPerGroup: 10,
    spaceBetween: 0,
    autoplay: { delay: 0, disableOnInteraction: false },
  };

  return (
    <div className="r td-hero-text-slider-active">
      <div className="swiper-wrapper slide-transtion">
        <Swiper {...swiper_settings}>
          {LIST_OF_TEXT_SLIDES.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <div className="td-hero-text-slider-content text-center">
                  <h4 className="td-hero-text-slider-title">{text}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
