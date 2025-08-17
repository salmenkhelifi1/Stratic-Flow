import Image from "next/image"
import Link from "next/link"

import dashboard_img from "@/assets/images/hero/HeroSectionImage(970x571).webp"

const Hero = () => {
   return (
      <section className="hero-section">
         <div className="hero-wrapper bg_cover" style={{ backgroundImage: `url(/assets/images/hero/hero-bg-1.png)` }}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="hero-content text-center">
                        <h1 className="heading-title">Transform Marketing Chaos Into Predictable Growth</h1>
                        <p className="para-one">We help Vietnamese businesses scale with precision-engineered digital marketing strategies that generate consistent leads, increase revenue, and build lasting competitive advantage.</p>
                        <div className="hero-button">
                           <Link href="#contact" className="theme-btn gradient-btn">Book your complimentary strategy session</Link>
                        </div>
                        <p className="para-two"><strong>Ready to 10X Your Business Growth?</strong><br/>Discover how to turn your marketing budget into a predictable revenue engine.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="hero-one_image-box text-center">
                        <Image src={dashboard_img} alt="Stratic Flow Dashboard" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
