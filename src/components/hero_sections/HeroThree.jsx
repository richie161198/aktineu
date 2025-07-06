import React from "react";
import BG from "../../assets/img/hero/hero3/bg.jpg";
import IMG_VIDEO from "../../assets/img/video/video.jpg";
import { VideoPlayer } from "../video/VideoPlayer";
import { Link } from "react-router-dom";import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";


export const HeroThree = () => {
  return (
    <div className="td-hero-area">
      <div className="td-hero-3-spacing bg-position" 
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="td-hero-3-title-wrap">
                <h2 className="td-hero-3-title">
                  <span
                    className="first wow fadeInRight"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    Expert
                  </span>
                  <br />
                  <b
                    className="wow fadeInLeft"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <span className="last">Advisors</span>
                  </b>
                </h2>
                 {/* <div className="td-hero-text-slider mb-70">
          <TextSlider />

                </div>     */}
              
              </div>
            </div>
          </div>
        </div>
        
      </div>
  
      {/* <div className="td-hero-3-video-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="td-hero-3-video-wrap pb-50">
                <div className="td-hero-3-video-thumb p-relative">
                  <img className="w-100" src={IMG_VIDEO} alt="video" />
                  <div className="td-video-popup td-hero-3-video-popup">
                    <VideoPlayer
                      trigger={
                        <a
                          className="td-video-play td-hero-3-video-play popup-video td-pulse-border"
                          href="#vid"
                        >
                          <span className="p-relative z-index-11">
                            <svg
                              width="14"
                              height="20"
                              viewBox="0 0 14 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 10L0 20V0L14 10Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="td-hero-3-bottom-content">
                <p>
                  Let’s Build Your ₹10 Crore Portfolio <a href="#"> with Aktineu.</a>
                </p>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-4">
              <div className="td-hero-3-bottom-btn text-right">
                <Link className="td-btn td-btn-3 td-left-right" to="/contact">
                  Get Appointment
                  <span className="td-arrow-angle ml-10">
                    <svg
                      className="td-arrow-svg-top-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10.00 10.00"
                    >
                      <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                      <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div> 
          </div>
        </div>
      </div> */}
      
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
