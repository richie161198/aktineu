import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import teamDetailsImage from "../../assets/img/team/team5/s1.jpg";

export const TeamDetails = () => {
  return (
    <div className="td-team-details-area pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="td-team-details-thumb mb-40 mr-20">
              <img className="w-100" src={teamDetailsImage} alt="thumb" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="td-team-details-content mb-40">
              <h3 className="td-team-details-title">Shandhanu K</h3>
              <span className="td-team-details-subtitle mb-35">
                Founder, Aktineu LLP
              </span>
              <div className="td-team-details-social mb-35">
                {/* <span className="mb-10">
                    <a href="mailto:info@Aktineu.com">
                      <i className="fa-solid fa-envelope-open"></i>
                      info@Aktineu.com
                    </a>
                  </span>
                  <span className="mb-10">
                    <a href="tel:+(123)45678900">
                      <i className="fa-solid fa-phone-flip"></i> +(123) 456 789
                      00
                    </a>
                  </span>
                  <ul className="float-right mb-10">
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                  </ul> */}
                <div className="td-team-details-skill">
                  {/* <h3 className="td-team-details-biography-title mb-15">
                    Skillset
                  </h3> */}

                  <ul>
                    <li>
                      <h3 className="td-team-details-biography-title mb-15">
                        Engineer Turned Wealth Strategist |
                      </h3>
                      {/* <Link to="#">Business Consultancy</Link> */}
                    </li>
                    <li>
                      <h3 className="td-team-details-biography-title mb-15">
                        {" "}
                        AMFI & NISM Certified
                      </h3>
                      {/* <Link to="#">Business Consultancy</Link> */}
                    </li>
                    {/* <li> */}

                    {/* <Link to="#">ROI Development</Link> <span>/</span> */}
                    {/* </li> */}
                    {/* <li>
                      <Link to="#">Business Growth</Link> <span>/</span>
                    </li>
                    <li>
                      <Link to="#">UX Design</Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="td-team-details-biography mb-45 text-justify">
                <h3 className="td-team-details-biography-title  mb-20">
                  Biography
                </h3>
                <p className=" ">
                  Some journeys begin with numbers. Shandhanu’s began with
                  intent. Born into a family of equity market participants, his
                  natural curiosity toward finance grew alongside the scent of
                  newspapers and the hum of trading terminals. Though trained as
                  an engineer, it was capital markets that truly captured his
                  interest and led him to pursue certifications from NISM, AMFI,
                  and APMI in Mutual Fund and PMS distribution. With over 200
                  clients and ₹100+ crores of advisory experience behind him.
                </p>
                <div className="td-team-details-education text-center text-bold mb-30 mt-30">
                  <h4 className="td-team-details-biography-title mb-15">
                    <b>
                      “Investment advice should be strategic, timely, and always
                      unbiased.”{" "}
                    </b>
                  </h4>
                </div>
                He thrives in the analytical depths of fund fact sheets, client
                profiling, and tactical rebalancing. His typical day spans:
                <li className="mt-10">
                  Deep fund research and market analysis
                </li>
                <li>Client strategy sessions</li>
              </div>
            </div>
          </div>
        </div>
        <div className="td-team-details-biography ">
          <p>
            Shandhanu’s mission is clear: to manage investor portfolios with
            precision, educate clients on why decisions are made, and ultimately
            help them build toward ₹10 Crore and beyond.
          </p>
          <p>
            In the next 5 years, Shandhanu envisions helping 300+ families
            achieve the milestone of ₹10 Cr wealth. Through smarter tools,
            deeper client education, and a more robust digital presence, he aims
            to make strategic investing more accessible and sustainable. At his
            core, Shandhanu is not just a finance professional. He’s a builder
            of portfolios, of trust, and of a new age of Indian investors who no
            longer chase the market but outgrow it.
          </p>
        </div>
      </div>
    </div>
  );
};
