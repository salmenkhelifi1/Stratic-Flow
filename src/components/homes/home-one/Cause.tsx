import cause_data from "@/data/CauseData"
import Link from "next/link"

const Cause = () => {
   return (
      <section className="use-cases-section pt-105 pb-85">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="section-title text-center mb-50">
                     <h2>Revenue-Driving Solutions</h2>
                     <h2>The Stratic Flow Method™ - Proven System for Predictable Growth</h2>
                     <p>Our integrated approach combines strategic planning, flawless execution, and continuous optimization to ensure every marketing dollar generates maximum ROI.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {cause_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                     <div className="iconic-info-box style-one text-center mb-25">
                        <div className="icon">
                           <i className={item.icon}></i>
                        </div>
                        <div className="content">
                           <h3><Link href="/services">{item.title}</Link></h3>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Cause
