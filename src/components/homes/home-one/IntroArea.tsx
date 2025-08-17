"use client"
import Image from 'next/image'
import { useState } from 'react';
import VideoPopup from "@/modals/VideoPopup"

import video_thumb from "@/assets/images/gallery/Gemini_Generated_Image_tyaqrmtyaqrmtyaq.png"

const IntroArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="intro-section pb-120">
            <div className="container">
               <div className="intro-wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-6">
                        <div className="video-one_image-box p-r z-1 mb-50">
                           <Image src={video_thumb} alt="Digital marketing strategy consultation Vietnam" />
                           <div className="play-button">
                              <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-popup"><i
                                 className="flaticon-play-button-arrowhead"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div className="section-content-box text-white mb-50">
                           <div className="section-title mb-55">
                              <span className="sub-title style-one">Our Mission</span>
                              <h2>Tunisia&apos;s Premier Digital Growth Catalyst</h2>
                           </div>
                           <p>We exist to transform Vietnamese businesses into market leaders through strategic digital marketing that delivers predictable, scalable growth and lasting competitive advantage.</p>
                           <ul className="circle-list style-one">
                              <li>Strategic Excellence - Replace marketing chaos with systematic, results-driven processes</li>
                              <li>Measurable Impact - Transform business potential into quantifiable revenue growth</li>
                              <li>Flawless Execution - Deliver precision implementation from strategy to scale</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={""}
         />
      </>
   )
}

export default IntroArea
