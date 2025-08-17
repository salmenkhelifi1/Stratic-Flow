import process_data from "@/data/ProcessData"
import Image from "next/image"

const Process = () => {
   return (
      <section className="works-process-section pb-75">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="section-title text-center mb-55">
                     <h2>Our Proven Growth Process</h2>
                     <h2>From Strategy to Scale - The 3-Phase Success System</h2>
                     <p>Our streamlined methodology eliminates guesswork and delivers consistent results through strategic planning, precision execution, and continuous optimization.</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {process_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6 col-sm-6">
                     <div className="ac-process-item mb-40">
                        <div className="process-inner-content">
                           <div className="thumbnail">
                              <Image src={item.img} alt={item.title} />
                           </div>
                           <div className="content">
                              <span className="number">{item.count}</span>
                              <h5>{item.title}</h5>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Process
