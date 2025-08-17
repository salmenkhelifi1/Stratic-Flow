import { StaticImageData } from "next/image";

import work_1 from "@/assets/images/gallery/3.svg"
import work_2 from "@/assets/images/gallery/Isometric Entrepreneur Analyzing Business Strategies.svg"
import work_3 from "@/assets/images/gallery/Man Analyzing Data Business Performance on Computer Monitor Illustration.svg"

interface DataType {
   id: number;
   page: string;
   img: StaticImageData
   count: string
   title: string;
   desc: string;
}

const process_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: work_1,
      count: "01",
      title: "Strategic Foundation",
      desc: "Comprehensive business audit, market analysis, and competitive research to identify your biggest growth opportunities and create a data-backed action plan.",
   },
   {
      id: 2,
      page: "home_1",
      img: work_2,
      count: "02",
      title: "Precision Implementation",
      desc: "Rapid deployment of all marketing assets including high-converting websites, compelling creative content, and optimized ad campaigns - all aligned with your strategic objectives.",
   },
   {
      id: 3,
      page: "home_1",
      img: work_3,
      count: "03",
      title: "Performance Optimization",
      desc: "Continuous monitoring, A/B testing, and strategic refinements based on real performance data to maximize ROI and ensure consistent growth month over month.",
   },
];

export default process_data;