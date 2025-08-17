import Image from "next/image";

import feature_img from "@/assets/images/gallery/work-together-as-a-team-business-persons-on-meetin-2025-01-16-21-46-42-utc.jpg"

interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: string;
}

const feature_list: DataType[] = [
   {
      id: 1,
      icon: "flaticon-idea",
      title: "Strategy-Led Approach",
      desc: "Every campaign, creative asset, and optimization is guided by data-driven strategy, ensuring maximum impact and ROI for your investment.",
   },
   {
      id: 2,
      icon: "flaticon-clarity",
      title: "Transparent Communication",
      desc: "We translate complex marketing data into clear, actionable insights and maintain open communication throughout every project phase.",
   },
   {
      id: 3,
      icon: "flaticon-report",
      title: "Results-Driven Execution",
      desc: "Every strategy is designed for measurable outcomes. We track, report, and optimize based on real performance metrics that matter to your bottom line.",
   },
];

const Feature = () => {
   return (
      <section className="features-section pt-120 pb-70">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-5">
                  <div className="section-content-box mb-50">
                     <div className="section-title mb-50">
                        <span className="sub-title style-one">Our Commitment to Excellence</span>
                        <h2>The Principles That Drive Our Success</h2>
                     </div>
                     <div className="iconic-info-list">
                        {feature_list.map((item) => (
                           <div key={item.id} className="iconic-info-box style-two mb-30">
                              <div className="icon">
                                 <i className={item.icon}></i>
                              </div>
                              <div className="content">
                                 <h4>{item.title}</h4>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-xl-7">
                  <div className="section-image-box style-one mb-50">
                     <Image src={feature_img} alt="Our values in action" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Feature
