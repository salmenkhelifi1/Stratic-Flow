"use client";
import HeaderOne from "@/layouts/headers/HeaderOne"
import Hero from "./Hero"
import Cause from "./Cause"
import Process from "./Process"
import Price from "./Price"
import Feature from "./Feature"
import IntroArea from "./IntroArea"
import Feedback from "./Feedback"
import Faq from "./Faq"
import Cta from "./Cta"
import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "./Brand"

const HomePage = () => {
   return (
      <div className="home-one">
         <div className="ac-page-wrapper">
            <HeaderOne />
            <div className="smooth-wrapper">
               <div id="smooth-content">
                  <section id="home"><Hero /></section>
                  <Brand />
                  <section id="use-case"><Cause /></section>
                  <Process />
                  <section id="pricing"><Price /></section>
                  <Feature />
                  <section id="about"><IntroArea /></section>
                  <Feedback />
                  <section id="faq"><Faq /></section>
                  <section id="contact"><Cta /></section>
               </div>
            </div>
            {/* You may need to update FooterOne similar to HeaderOne */}
            <FooterOne />
         </div>
      </div>
   )
}

export default HomePage;