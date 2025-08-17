"use client"
import price_data from "@/data/PriceData";
import Link from "next/link";

const Price = () => {
   return (
      <section className="pricing-section">
         <div className="pricing-wrapper black-dark-bg pt-110 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title text-center title-white mb-50">
                        <h2>Investment Options</h2>
                        <h2>Choose Your Growth Path</h2>
                        <p>Select the engagement level that matches your business goals and growth timeline - from strategic foundation to full-service execution.</p>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-center">
                  {price_data[0].price_details.map((item) => (
                     <div key={item.id} className="col-xl-4 col-md-6 col-sm-12">
                        <div className="pricing-item style-one mb-40">
                           <div className="pricing-head text-center">
                              <span className="package">{item.sub_title}</span>
                              <h3 className="custom-quote-text">Custom Quote</h3>
                              <Link href="#contact" className="theme-btn style-two">{item.btn}</Link>
                           </div>
                           <div className="pricing-body">
                              <ul className="check-list style-one">
                                 {item.feature.map((list, i) => (
                                    <li key={i}><i className="flaticon-check"></i>{list}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Price
