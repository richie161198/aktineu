
import serviceImg01 from "../../assets/img/service/service3/01.jpg";
import serviceImg02 from "../../assets/img/service/service3/02.jpg";
import serviceImg03 from "../../assets/img/service/service3/03.jpg";
import serviceImg04 from "../../assets/img/service/service3/04.jpg";

export const ServiceAreaThree = () => {
  const serviceItems = [
    {
      delay: "0.3s",
      imgSrc: serviceImg01,
      // href: "/service-details",
      tag1: "Mutual Fund ",
      tag2: "Distribution (MF)",
      description:
        "Top Mutual Fund Plans in Chennai. A low‑cost entry point to steady, long‑term compounding.",
      number: "01",
    },
    {
      delay: "0.4s",
      imgSrc: serviceImg02,
      // href: "/service-details",
      tag1: "Portfolio ",
      tag2: "Management Services",
      description:
        "Chennai PMS-Experts professionally managed, bespoke portfolios aligned to your ₹10 Crore roadmap",
      number: "02",
    },
    {
      delay: "0.5s",
      imgSrc: serviceImg03,
      // href: "/service-details",
      tag1: "Alternative",
      tag2: "Investment Fund",
      description:
        "Diversify with AIFs in India. Advanced strategies for accredited investors seeking higher‑potential returns",
      number: "03",
    },
    {
      delay: "0.6s",
      imgSrc: serviceImg04,
      // href: "/service-details",
      tag1: "Fixed Income",
      tag2: "Instruments (FII)",
      description:
        "Safe Fixed Income Investments. Balanced allocations with predictable cash flows and risk mitigation",
      number: "04",
    },
  ];

  return (
    <div className="td-service-area fix pt-130">
      <div className="container-fluid g-0">
        <div className="row gx-0">
          {serviceItems.map((item, index) => (
            <div key={item.number} className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="td-service-3-item wow fadeInUp"
                data-wow-delay={item.delay}
                data-wow-duration="1s"
              >
                <div className="td-service-3-thumb">
                  <img className="w-100" src={item.imgSrc} alt="service" />
                </div>
                <div className="td-service-3-content">
                  <h3 className="td-service-3-title mb-15">
                    <a href={item.href}>
                      <span>{item.tag1}</span>
                      <span className="grey">{item.tag2}</span>
                    </a>
                  </h3>
                  <div className="td-service-3-para">
                    <p>{item.description}</p>
                  </div>
                  <div className="td-service-3-number">
                    <h2>{item.number}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaThree;
