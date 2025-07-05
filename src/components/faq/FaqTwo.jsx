import React from "react";
import bgImage from "../../assets/img/faq/home4/bg.jpg";

export const FaqTwo = () => {
  return (
    <div
      className="td-faq-area bg-position pt-140 pb-110"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div
              className="td-chose-title-wrap text-center mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Impressions</span>
              <h2 className="td-section-title">Fun fact about company</h2>
            </div>
            <div className="td-faq-wrapper">
              <div
                className="accordion td-faq-4-accordion"
                id="return_faqaccordion"
              >
                <div
                  className="accordion-item td-faq-active td-faq-4-item wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_one">
                    <button
                      className="accordion-button td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_one"
                      aria-expanded="true"
                      aria-controls="digital__collapse_one"
                    >
                      How often do we emphasize “Long-Term”?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_one"
                    className="accordion-collapse collapse show"
                    aria-labelledby="digital_one"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Quite often—over 50 times a day. That’s how committed we are to disciplined, long-term wealth creation.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item td-faq-4-item wow fadeInUp"
                  data-wow-delay=".6s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_two">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_two"
                      aria-expanded="false"
                      aria-controls="digital__collapse_two"
                    >
                      Which client is the farthest from our office?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_two"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_two"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        We proudly serve clients across the globe, with our farthest based in the Netherlands—6,963 km away by air.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item td-faq-4-item wow fadeInUp"
                  data-wow-delay=".8s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_three">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_three"
                      aria-expanded="false"
                      aria-controls="digital__collapse_three"
                    >
                      What’s the most common goal clients invest toward?

                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_three"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_three"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                       Early Retirement tops the list. Many of our clients follow the FIRE movement—Financially Independent, Retire Early.
                      </p>
                    </div>
                  </div>
                </div>
                  <div
                  className="accordion-item td-faq-4-item wow fadeInUp"
                  data-wow-delay=".8s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_five">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_five"
                      aria-expanded="false"
                      aria-controls="digital__collapse_five"
                    >
                      How do we guarantee clarity in every client conversation?

                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_five"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_five"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                       We close every interaction by summarizing key takeaways, inviting questions, and encouraging feedback—ensuring complete understanding and confidence.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item td-faq-4-item wow fadeInUp"
                  data-wow-delay=".9s"
                  data-wow-duration="1s"
                >
                  <h2 className="accordion-header" id="digital_four">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_four"
                      aria-expanded="false"
                      aria-controls="digital__collapse_four"
                    >
                      How many mutual fund schemes have we reviewed?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_four"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_four"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        In just the last two years, we’ve analyzed over 400+ mutual fund schemes to ensure the best-fit portfolios for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
