import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import teamDetailsImage from "../../assets/img/team/team5/y1.jpg";

export const TeamDetails2 = () => {
  return (
    <div className=" pt-140 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="td-team-details-content mb-30">
              <h3 className="td-team-details-title">Yuvaraj Vishwanath</h3>
              <span className="td-team-details-subtitle mb-35">
                Managing Partner, Aktineu LLP
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
                        Certified Mutual Fund Distributor /
                      </h3>
                      {/* <Link to="#">Business Consultancy</Link> */}
                    </li>
                    <li>
                      <h3 className="td-team-details-biography-title mb-15">
                        Personal Finance Strategist
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

              <div className="td-team-details-biography mb-45">
                <h3 className="td-team-details-biography-title mb-20">
                  Biography
                </h3>
                <p>
                  From an academic background in Computer Applications to
                  managing 400+ clients, Yuvaraj Vishwanath’s journey is defined
                  by one word: intentionality. His foray into finance wasn’t
                  accidental. Fueled by a genuine passion for financial markets
                  and a desire to bring structure and clarity to personal
                  finance, Yuvaraj made a deliberate career shift. Today, he
                  leads with a mission to simplify wealth-building for
                  individuals and help them achieve true financial independence.
                </p>
                {/* <br /> */}
                {/* <h4 className="td-team-details-biography-title text-bold">
            Philosophy & Vision
          </h4> */}
                <div className="td-team-details-education text-center text-bold mb-30 mt-30">
                  <h4 className="td-team-details-biography-title mb-15">
                    <b>
                      “Wealth isn’t about luxury. It’s about freedom to make
                      bold decisions, take a sabbatical, switch careers, or say
                      yes to what truly matters.”
                    </b>
                  </h4>
                </div>
                As the Managing Partner at Aktineu, Yuvaraj’s day-to-day
                involves much more than transactions. He is actively engaged in:
                <li className="mt-10">
                  Peer discussions to form neutral perspectives (he likens to{" "}
                  <b>“independent directorship”</b>)
                </li>
                <li>
                  Curating portfolios aligned with each client’s long-term
                  vision
                </li>
                <li>
                  Conducting review sessions and rebalancing strategies with
                  surgical precision
                </li>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="td-team-details-thumb mb-30 ">
              <img className="w-100" src={teamDetailsImage} alt="thumb" />
            </div>
          </div>
        </div>
        {/* <div className="td-team-details-biography-title container">
          <h4 className="td-team-details-biography-title text-bold">
            Philosophy & Vision
          </h4>
          <br />
          <h4>
            “Wealth isn’t about luxury. It’s about freedom to make bold
            decisions, take a sabbatical, switch careers, or say yes to what
            truly matters.”
          </h4>
        </div> */}
        <div className="td-team-details-biography ">
          <p>
            But what truly sets him apart is how clients experience him, not
            just as an advisor, but as someone they can trust like family. One
            client, in fact, introduced him to their in-laws at a wedding,
            calling him “one of the reasons this moment was even possible.”
            Yuvaraj’s approach centers around discipline over speculation,
            process over product, and goals over noise. Whether it’s helping a
            30-year-old plan for early retirement or supporting a 50-year-old in
            funding their child’s education abroad, each portfolio is tailored,
            and every decision is backed by logic and empathy.
          </p>
          <p>
            Yuvaraj believes most investors fail not because of bad markets, but
            because they deviate mid-journey or fall prey to hype. His vision is
            to correct that course to guide individuals from confusion to
            clarity, and from short-term thinking to ₹10 Crore in long-term,
            compounding-led wealth. With a strong reading habit, constant
            upskilling, and an unshakable client-first mindset, Yuvaraj is
            building a firm and a future where smart investing is not just for
            the wealthy but for the wise.
          </p>
        </div>
      </div>
    </div>
  );
};
