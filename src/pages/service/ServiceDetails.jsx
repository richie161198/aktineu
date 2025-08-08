
import { Layout } from "../../layouts/Layout";
import { ServiceLayout } from "../../layouts/ServiceLayout";
import thumb from "../../assets/img/service/details/thumb.jpg";
import { ServiceDetailsAccordion } from "../../components/service/ServiceDetailsAccordion";
import { ServiceDetailsCircularProgress } from "../../components/service/ServiceDetailsCircularProgress";

export const ServiceDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Terms & Conditions"}
      breadcrumbSubtitle={"Single Service"}
    >
      <div className="td-service-details-wrap container">
        <div className="td-service-details-thumb mb-60">
          {/* <img className="w-100" src={thumb} alt="details" /> */}
        </div>

        <div className="td-service-details-content mb-60">
          <h3 className="td-service-details-title mb-25">
            Aktineu LLP - ARN-295214
          </h3>
          <p>
            By engaging with Aktineu LLP for mutual fund investments and related
            financial services, you agree to the following terms and conditions:
          </p>
          <p className=" container">
            <b>1. Advisory Scope</b> <br />
            <ul className=" pl-30">
              <li>
                Aktineu LLP is a SEBI-registered Mutual Fund Distributor (not a
                financial advisor under RIA regulations).
              </li>{" "}
              <li>
                Recommendations are based on the client's declared risk profile,
                goals, and investment horizon.{" "}
              </li>{" "}
              <li>
                {" "}
                Final investment decisions lie solely with the investor.{" "}
              </li>{" "}
            </ul>
          </p>
          <p className=" container">
            <b>2. Data Accuracy</b> <br />
            <ul className=" pl-30">
              <li>
                Clients must provide accurate and up-to-date personal,
                financial, and KYC information.
              </li>{" "}
              <li>
                Aktineu LLP is not responsible for delays or rejections due to
                incomplete/inaccurate information.
              </li>{" "}
            </ul>
          </p>
          <p className=" container">
            <b>3. Execution of Transactions</b> <br />
            <ul className=" pl-30">
              <li>
                All transactions are executed through authorized platforms or
                partners (RTAs, AMCs, etc.)
              </li>{" "}
              <li>
                Aktineu LLP does not accept cash or handle funds directly.
              </li>{" "}
              <li>
                Clients should ensure sufficient bank balance and timely mandate
                approvals.
              </li>{" "}
            </ul>
          </p>
          <p className=" container">
            <b>4. Communication</b> <br />
            <ul className=" pl-30">
              <li>
                All communication (recommendations, updates, statements) may be
                done via email, phone, or WhatsApp.{" "}
              </li>{" "}
              <li>
                Clients are responsible for reviewing and confirming all
                transactions.
              </li>{" "}
            </ul>
          </p>

          <p className=" container">
            <b>5. Third-Party Links & Services</b> <br />
            <ul className=" pl-30">
              <li>We may share links or integrate services from AMCs, RTAs, and third-party platforms.</li>
              <li>Aktineu LLP is not liable for any losses or issues arising from third-party platforms.</li>
             
            </ul>
          </p>

      <p className=" container">
            <b>6. Privacy & Security</b> <br />
            <ul className=" pl-30">
              <li>Personal and financial data is handled with strict confidentiality.</li>
              <li>For full details, refer to our Privacy Policy.</li>

            </ul>
          </p>

           <p className=" container">
            <b>7. Limitations of Liability</b> <br />
            <ul className=" pl-30">
              <li>Investments in mutual funds are subject to market risk. Past performance is not indicative of future results.</li>
              <li>Aktineu LLP shall not be liable for any direct or indirect loss arising from investment decisions.</li>

            </ul>
          </p>

           <p className=" container">
            <b>8. Termination</b> <br />
            <ul className=" pl-30">
              <li>Clients may discontinue our services at any time by notifying us in writing.</li>
              <li>Aktineu LLP also reserves the right to withdraw services under special circumstances.</li>
            
            </ul>
          </p>

           <p className=" container">
            <b>9. Dispute Resolution</b> <br />
            <ul className=" pl-30">
              <li>Any disputes shall be addressed amicably. If unresolved, they will fall under the jurisdiction of courts in Chennai, Tamil Nadu.</li>
           
            </ul>
          </p>
          {/* 
             
            <p>
              As a venture capital agency, we specialise in partnering with
              companies at various stages of their growth journey. From seed
              funding to growth-stage investments, we offer tailored solutions
              that address the unique needs and challenges of each portfolio
              company.Our track record speaks for itself. We have successfully
              invested in and nurtured the growth of over 40 companies across
              diverse industries, positioning our portfolio companies as market
              leaders. Lorem ipsum dolor sit amet consectetur adipiscing diam
              tortor sit feugiat dictum eu diam euismod ultrices convallis eget
              vel velit posuere mi consequat leo egestas sed odio molestie non
              imperdiet malesuada. We are a leading venture capital firm
              committed to supporting visionary entrepreneurs and fueling the
              growth of transformative businesses.
            </p> */}
        </div>

        {/* content */}
        <div className="td-service-details-content">
          {/* <p>
              With 22 years of experience and a proven track record, we have
              become a trusted partner for startups and high-potential companies
              seeking to disrupt industries and create lasting impact. As a
              venture capital agency, we specialise in partnering with companies
              at various stages of their growth journey.
            </p>
            <p>
              A consultant is a professional who provides expert advice and
              guidance to individuals or organizations in a particular field or
              industry. Consultants are typically hired to solve problems,
              improve performance, or provide specialized knowledge that the
              client lacks internally. Consultants can work independently or as
              part of consulting firms. They may specialize in various areas
              such as management, finance, technology, human resources,
              marketing, or specific industries like healthcare, IT, or
              manufacturing.
            </p> */}
        </div>
      </div>
    </Layout>
  );
};
