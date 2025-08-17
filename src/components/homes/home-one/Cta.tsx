import cta_1 from "@/assets/images/gallery/robot2.png"
import cta_2 from "@/assets/images/gallery/base2.png"
import Image from "next/image"
import Link from "next/link"
const Cta = () => {
   return (
      <section className="cta-section">
         <div className="container">
            <div className="cta-wrapper_one">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="cta-one_content-box">
                        <h2>Ready to Scale Your Business?</h2>
                        <p>Join 200+ Vietnamese businesses that have transformed their growth with our proven system. Book your complimentary strategy session and discover your custom path to predictable revenue growth.</p>

What You'll Get in Your Free Session:
✓ Comprehensive business growth audit
✓ Custom marketing strategy recommendations  
✓ ROI projections for your industry
✓ Clear next steps to accelerate growth

No obligation. No pushy sales tactics. Just strategic insights you can implement immediately.

                        <Link href="#contact" className="theme-btn gradient-btn">Book Your Free Strategy Session - Limited spots available each month</Link>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="cta-one_image-box p-r z-1 text-xl-end">
                        <Image src={cta_1} className="image-one" alt="Stratic Flow marketing analytics dashboard" />
                        <Image src={cta_2} className="image-two" alt="Vietnamese business client success story" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Cta
