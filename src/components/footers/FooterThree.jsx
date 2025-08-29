import { Link } from "react-router-dom";
import LOGO_WHITE from "../../assets/img/logo/logo-white3.png";
import LOGO_WHITE_Font from "../../assets/img/logo/logo-white.png";

export const FooterThree = () => {
  return (
    <footer>
      <div className="td-footer-area td-black-bg-2 pt-120">
        <div className="td-footer-3-top pb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="td-footer-3-logo">
                  <img src={LOGO_WHITE} alt="logo" />
                  {/* <img src={LOGO_WHITE_Font} alt="" /> */}
                </div>
              </div>
              <div className="col-lg-6 mb-50">
                <div className="td-footer-3-top-content">
                  <p>
                    Looking for coonection? Send an email to{" "}
                    <a href="mailto:connect@aktineu.com">connect@aktineu.com</a>{" "}
                    for valuable enquires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-3-wrap pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="td-footer-3-widget mt-45 mb-50">
                  <h2 className="td-footer-3-widget-big-title">
                    Your Goal
                    <br />
                    <span>Our Strategy</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-6 col-lg-5 col-md-6 col-sm-5 mb-40">
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">Menu</h2>
                      <ul>
                        <li>
                          <Link to="/terms&condition">Terms & Condition</Link>
                          <Link to="/privacypolicy">Privacy Policy</Link>

                          {/* <a href="#">Careers</a> */}
                          {/* <a href="#"></a> */}

                          {/* <a href="#">Press Media</a> */}
                          {/* <a href="#">Our Blog</a> */}
                          {/* <a href="#">Privacy Policy</a> */}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-7 col-md-6 col-sm-7 mb-40">
                    <div className="td-footer-3-widget mb-40">
                      <h2 className="td-footer-3-widget-title mb-20">
                        Contact Us
                      </h2>
                      <div className="td-footer-3-link">
                        <a href="mailto:connect@aktineu.com">
                          Mail : connect@aktineu.com
                        </a>
                        <a href="tel:+(123)45678900">Call : +(91) 9994031721</a>
                      </div>
                    </div>
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">
                        Our Address
                      </h2>
                      <div className="td-footer-3-link">
                        <a
                          href="https://www.google.com/maps/@13.033732,80.262212,18.17z"
                          target="_blank"
                        >
                          Flat No. 4, Sri Ganesh Apartments,
                          <br />
                          #3 Abhiramapuram 3rd Street,
                          <br /> Chennai – 600018
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="td-footer-3-bottom-border td-footer-3-bottom-spacing">
                  <div className="row">
                    <div className="col-lg-6 mb-15">
                      <div className="td-footer-3-bottom-copyright">
                        <p>
                          © 2025 <a href="#">Aktineu</a>, All rights reserved.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-15">
                      <div className="td-footer-3-bottom-social text-right p-20">
                        <ul className="">
                          <li>
                            <div className="">
                              <a
                                href="https://play.google.com/store/apps/details?id=com.aktineu.app"
                                target="_blank"
                                className=""
                              >
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                  alt="Get it on Google Play"
                                  height="40"
                                />
                              </a>

                              <a
                                href="https://apps.apple.com/in/app/aktineu/id6740485980"
                                target="_blank"
                                className="pl-20 pr-40"
                              >
                                <img
                                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                  alt="Download on the App Store"
                                  height="40"
                                />
                              </a>
                            </div>
                          </li>

                          <li>
                            <a href="https://www.facebook.com/aktineullp">
                              <i className="fa-brands fa-facebook-f fa-2x pr-10"></i>
                            </a>
                          </li>
                          {/* <li>
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                              </svg>
                            </a>
                          </li> */}

                          <li>
                            <a href="https://www.youtube.com/@aktineullp">
                              <i className="fa-brands fa-youtube fa-2x pr-10"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/aktineullp"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa-brands fa-linkedin-in fa-2x pr-10"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://wa.me/+919994031721?text=Hi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa-brands fa-whatsapp fa-2x pr-10"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/aktineu.llp/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa-brands fa-instagram fa-2x pr-10"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
