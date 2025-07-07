// import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroThree } from "../../components/hero_sections/HeroThree";
import { ServiceAreaThree } from "../../components/service/ServiceAreaThree";
import { AboutThree } from "../../components/about/AboutThree";
import { VideoAreaTwo } from "../../components/video_areas/VideoAreaTwo";
import { ExperienceOne } from "../../components/experience/ExperienceOne";
import { FaqOne } from "../../components/faq/FaqOne";
// import { TestimonialThree } from "../../components/testimonials/TestimonialThree";
// import { PricingOne } from "../../components/pricing/PricingOne";
// import { BusinessOne } from "../../components/business/BusinessOne";
import { ContactTwo } from "../../components/contact/ContactTwo";
import { MapOne } from "../../components/map/MapOne";
import { FaqTwo } from "../../components/faq/FaqTwo";
import { ChooseOne } from "../../components/choose/ChooseOne";
// import { SubscribeOne } from "../../components/subscribe/SubscribeOne";
import { TestimonialFour } from "../../components/testimonials/TestimonialFour";
import { ServiceAreaFive } from "../../components/service/ServiceAreaFive";
import { CtaOne } from "../../components/cta/CtaOne";
import { AboutTwo } from "../../components/about/AboutTwo";
// import { HeroFour } from "../../components/hero_sections/HeroFour";

export const HomeThree = () => {
  return (
    <Layout header={3} footer={3}>
      {/* hero */}
      <HeroThree />
      {/* <HeroFour/> */}
   
            
 <div id="solutions">
        <ServiceAreaThree />
      </div>
      
            {/* <AboutTwo /> */}
      
            {/* services */}
            {/* <ServiceAreaTwo /> */}
    <div id="aboutus">
      <ServiceAreaFive/>
{/* <CtaOne/> */}
      </div>
      {/* about */}
     
        {/* <AboutThree /> */}

      {/* video */}
      <VideoAreaTwo />

      {/* experience */}
      <ExperienceOne />
  <FaqOne />
      {/* faq */}
      <div id="blog">
      
      <ChooseOne />
      </div>



      {/* testimonial */}
      {/* <TestimonialThree /> */}

      {/* pricing */}
      {/* <PricingOne /> */}


      {/* choose */}

      {/* faq */}
      <FaqTwo />
      {/* business */}
      {/* <BusinessOne /> */}
      
            <TestimonialFour />
            <MapOne />

      {/* contact */}
        <div id="contactus">
      
      <ContactTwo />
      </div>
    </Layout>
  );
};
