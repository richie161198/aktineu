import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceLayout } from "../../layouts/ServiceLayout";
import thumb from "../../assets/img/service/details/thumb.jpg";
import { ServiceDetailsAccordion } from "../../components/service/ServiceDetailsAccordion";
import { ServiceDetailsCircularProgress } from "../../components/service/ServiceDetailsCircularProgress";

export const ServiceDetails2 = () => {
  return (
    <Layout
      breadcrumbTitle={"Privacy Policy"}
      breadcrumbSubtitle={"Privacy Policy"}
    >
      {/* <ServiceLayout> */}
        <div className="td-service-details-wrap container">
          <div className="td-service-details-thumb mb-60">
            {/* <img className="w-100" src={thumb} alt="details" /> */}
          </div>

          <div className="td-service-details-content mb-60">
            <h3 className="td-service-details-title mb-25">
              Aktineu LLP - ARN-295214
            </h3>
            <p>
              At Aktineu LLP, we value your privacy and are committed to
              protecting your personal and financial information. This Privacy
              Policy explains how we collect, use, store, and protect the
              information you share with us while availing our mutual fund
              distribution and related services.
            </p>
            <p className=" container">
              <b>1. Information We Collect</b> <br />
              We may collect the following personal and financial information:
              <ul className=" pl-30">
                <li>Full name, address, contact number, and email ID</li>{" "}
                <li>PAN, Aadhaar, and other KYC-related documents </li>{" "}
                <li> Bank account details for investment transactions </li>{" "}
                <li> Investment preferences, goals, and risk profile</li>
              </ul>
            </p>
            <p className=" container">
              <b>2. How We Use Your Information</b> <br />
              Your information is used to:
              <ul className=" pl-30">
                <li>
                  Facilitate mutual fund transactions (SIP, lumpsum,
                  redemptions, switches, etc.)
                </li>{" "}
                <li>
                  Conduct risk profiling and suggest suitable investment options
                </li>{" "}
                <li>
                  {" "}
                  Comply with SEBI, AMFI, and other regulatory requirements{" "}
                </li>{" "}
                <li>
                  Generate reports, account statements, and portfolio reviews
                </li>
                <li>
                  Communicate important updates, alerts, and personalized
                  content
                </li>
              </ul>
            </p>
            <p className=" container">
              <b>3. Sharing of Information</b> <br />
              We do not sell or rent your personal data to third parties.We may
              share your information with:
              <ul className=" pl-30">
                <li>Mutual Fund AMCs (Asset Management Companies)</li>{" "}
                <li>Registrar and Transfer Agents (e.g., CAMS, KFintech)</li>{" "}
                <li>
                  {" "}
                  Technology and payment partners (only as needed for service
                  delivery){" "}
                </li>{" "}
                <li>
                  Regulatory and compliance authorities as required by law
                </li>
              </ul>
            </p>
            <p className=" container">
              <b>4. Data Protection and Security</b> <br />
              We adopt industry-standard practices to protect your data,
              including:
              <ul className=" pl-30">
                <li>Encryption of sensitive data </li>{" "}
                <li>Secure storage of documents and records</li>{" "}
                <li>Restricted access controls</li>{" "}
                <li>
                  Despite our efforts, no system is 100% secure. We urge you to
                  maintain caution while sharing credentials.
                </li>
              </ul>
            </p>

            <p className=" container">
              <b>5. Your Rights</b> <br />
              As our client, you have
            the right to:
              <ul className=" pl-30">
                <li>Access and review your personal information</li>{" "}
                <li>Request corrections or updates</li>{" "}
                <li>Withdraw consent (as long as it
            doesn’t conflict with legal obligations)</li>{" "}
                <li>
                 Opt-out of marketing
            messages
                </li>
              </ul>
            </p>
            
            <p className=" container">
              <b>6. Updates to This Policy</b> <br />
         This policy may be revised
            periodically to reflect changes in legal requirements or business
            practices. Updated versions will be posted on our official
            communication channels.
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
      {/* </ServiceLayout> */}
    </Layout>
  );
};
