//
import { Link } from "react-router-dom";
import d from "../../assets/img/testimonial/tes4/1.jpg";
import c from "../../assets/img/testimonial/tes4/2.jpg";
import bp from "../../assets/img/testimonial/tes4/bp.jpg";
import h from "../../assets/img/testimonial/tes4/h.jpg";
import k from "../../assets/img/testimonial/tes4/k.jpg";
import m from "../../assets/img/testimonial/tes4/m.jpg";
import rb from "../../assets/img/testimonial/tes4/rb.jpg";
// import pattern from "../../assets/img/testimonial/tes4/pattern.png";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const TestimonialFour = () => {
  const testimonials = [
    {
      src: rb,
      title: "Ramesh babu",
      designation: "CEO - Benchmark broadcast systems , Malaysia",
      description:
        "Shandhanu has been instrumental in bringing structure and clarity to my investments. His approach is very personalized—he first understood my financial goals, risk appetite, and cash flow needs before recommending any solution. Through his guidance, I’ve built a diversified mutual fund portfolio and also gained access to carefully selected PMS strategies at the right stages. What sets him apart is the way he simplifies complex concepts and focuses on long-term wealth creation rather than chasing short-term returns. I truly value the trust and transparency in our relationship and would confidently recommend his services to anyone looking for a disciplined and goal-oriented investment approach. ",
    },
    {
      src: d,
      title: "Ashwath V S",
      designation: "Head of software engineer , BOOKING.COM- Netherlands",
      description:
        "I’ve been working with Shanthanu for two years, and he’s been incredibly reliable — always just a call away. He actively monitors and reallocates my investments, which shows he genuinely cares. Even without a huge portfolio, I’ve felt well-guided and supported throughout. Highly recommend him to anyone looking for a proactive and trustworthy wealth manager.",
    },

    {
      src: m,
      title: "Murali V",
      designation:
        "Vice President- coromandel international Ltd , A Murugappa group conglomerate",
      description:
        "I am honored to share my experience with aktineu LLP, who has proven to be an exceptional investment planner. His deep expertise in financial markets, coupled with a strategic mindset, has been instrumental in helping me achieve my investment goals.   What truly sets shandhanu apart is his unwavering dedication to his clients. He takes the time to thoroughly understand individual financial objectives, risk tolerance, and market preferences, ensuring that every recommendation is both personalized and effective. His insights are always well-researched, timely, and yield tangible results.   Moreover, Shandhanu's professionalism and integrity inspire immense trust. He communicates complex market trends in a way that is easy to understand and always prioritizes his clients' best interests. Thanks to his guidance, I have not only grown my portfolio but also gained a deeper understanding of investing.   I wholeheartedly recommend Shandhanu to anyone seeking a knowledgeable, reliable, and results-driven advisor.",
    },
    {
      src: h,
      title: "Haareesh Sathiyaseelan",
      designation: "Director - analytics & BI - APNA jobs",
      description:
        "I've been working with Mr.Shandhanu, for over five years now, and I can confidently say that partnering with him has been one of the best financial decisions I’ve made. As an independent investment advisor running his own startup, he brings a rare combination of deep market expertise, personalized attention, and complete integrity. He has managed my entire portfolio across mutual funds and PMS with diligence, clarity, and a long-term view aligned with my FIRE goals. What sets him apart is not just his consistently sharp and up-to-date market insights, but his ability to translate them into actionable strategies tailored specifically for me. Every recommendation he gives is backed by thorough research and a strong point of view, always putting my financial goals ahead of any personal interest. His commitment to ongoing portfolio reviews, timely course corrections, and transparent communication has been instrumental in navigating market cycles with confidence. The returns I’ve seen under his guidance have far outperformed what I experienced with large private banks or traditional wealth managers. If you're looking for someone who truly partners with you in your financial journey—with honesty, intelligence, and unwavering focus on your success — I couldn't recommend Mr. Shandhanu more highly.",
    },
    {
      src: bp,
      title: "Bhaskar Prashant",
      designation: "Deputy Manager at a Private Manufacturing Company",
      description:
        " To be honest, I wouldn’t have known about Aktineu if it wasn’t for Yuvaraj. He’s the reason I trusted the company in the first place. His energy is something else — always positive, always ready to help, and most importantly, he doesn’t give up. Even when things get tough, Yuvaraj stays transparent and solution-focused, which is rare these days. What really impressed me is how well-informed he is. Be it the process, the product, or the tiniest details — Yuvaraj knows his stuff and explains things in a way that actually makes sense. No confusion, no jargon — just clear and honest communication In a world where people often overpromise and underdeliver, Yuvaraj stands out. Through him, I’ve seen what Aktineu stands for — commitment, clarity, and the kind of work ethic that reflects true Indian values: hard work, sincerity, and respect. Grateful to have come across Yuvaraj and through him, Aktineu. Wishing them more success ahead — they truly deserve it.",
    },
    {
      src: c,
      title: "Suresh Srinivasan ",
      designation: "Regional sales Head- Orange business services",
      description:
        "Aktineu LLP is an Ethical, knowledgeable and customer-focused Financial Advisor . He has been supporting me in  establishing a sound financial plan that is tailored to our specific goals and objectives.He is completely grounded and continuously keeps up to date on the market developments making consultative suggestions needed time to time. With his support and expertise, I am confident in achieving my family's financial future.",
    },
    {
      src: k,
      title: "Karthik K C",
      designation: "Technical Architect in a IT Firm",
      description:
        "I have known Yuvaraj for the last 4 years now. He has got amazing work ethics and calls spade a spade. I trust Yuvaraj with all of my financial decisions. For Wealth Creation and Preservation, Yuvaraj is the go-to person. Wishing the Aktineu Team the very best.",
    },
  ];

  const swiper_settings = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    a11y: false,
    navigation: {
      prevEl: ".td-testimonial-4-prev",
      nextEl: ".td-testimonial-4-next",
    },
  };

  return (
    <div className="td-testimonial-area td-black-bg-2 pt-140 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="td-testimonial-title-wrap mb-80">
              <span className="td-section-title-pre td-white mb-10">
                Clients Thinking
              </span>
              <h2 className="td-section-title td-white">Testimonials</h2>
            </div>
          </div>

          <div className="col-lg-4 col-md-5">
            <div className="td-testimonial-4-btn d-flex justify-content-end">
              <div className="td-testimonial-4-btn-inner">
                <div className="td-testimonial-4-prev">
                  <i className="fa-sharp fa-regular fa-arrow-left"></i>
                </div>
                <div className="td-testimonial-4-next">
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="td-testimonial-4-border pb-100">
              <div className="swiper-container td-testimonial-4-slider-active">
                <div className="swiper-wrapper">
                  <Swiper {...swiper_settings}>
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="swiper-slide">
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <div className="td-testimonial-avater">
                                <div className="td-testimonial-avater-thumb mb-40">
                                  <img src={testimonial.src} alt="thumb" className="  w-50" />
                                </div>
                                <div className="td-testimonial-avater-info">
                                  <h5 className="td-testimonial-avater-title">
                                    {testimonial.title}
                                  </h5>
                                  <span className="td-testimonial-avater-designation">
                                    {testimonial.designation}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                              <div className="td-testimonial-4-content">
                                <span></span>
                                {/* <img
                                  className="mb-40 d-none d-md-block"
                                  src={pattern}
                                  alt="pattern"
                                /> */}
                                <p>{testimonial.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row align-items-center">
          <div className="col-lg-8 col-md-8">
            <div className="td-testimonial-4-bottom-content pt-30">
              <h4 className="td-testimonial-4-title">
                Hire us for your next project.
              </h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="td-testimonial-4-bottom-btn td-hero-4-btn d-flex justify-content-end pt-30">
              <Link to="/contact" className="td-btn td-btn-7 td-left-right">
                Let's Started
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
        </div> */}
      </div>
    </div>
  );
};
