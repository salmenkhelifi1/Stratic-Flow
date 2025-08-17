import { StaticImageData } from "next/image";

import team_1 from "@/assets/images/team/team-1.jpg"
import team_2 from "@/assets/images/team/team-2.jpg"
import team_3 from "@/assets/images/team/team-3.jpg"
import team_4 from "@/assets/images/team/team-4.jpg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   designation: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      img: team_1,
      title: "Anh Nguyen",
      designation: "Digital Strategist",
   },
   {
      id: 2,
      img: team_2,
      title: "Bao Pham",
      designation: "Project Manager (Flow Coordinator)",
   },
   {
      id: 3,
      img: team_3,
      title: "Linh Tran",
      designation: "Multidisciplinary Digital Specialist",
   },
   {
      id: 4,
      img: team_4,
      title: "Minh Le",
      designation: "Head of Client Success",
   },
];

export default team_data;
