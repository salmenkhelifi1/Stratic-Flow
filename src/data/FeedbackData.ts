import { StaticImageData } from "next/image";

import avatar_1 from "@/assets/images/testimonial/thumb-1.jpg"
import avatar_2 from "@/assets/images/testimonial/thumb-2.jpg"
import avatar_3 from "@/assets/images/testimonial/thumb-3.jpg"

interface DataType {
   id: number;
   page: string;
   avatar: StaticImageData;
   name: string;
   designation: string;
   desc: string;
   rating: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      avatar: avatar_1,
      name: "Huy Tran",
      designation: "Founder, Saigon SaaS",
      desc: "Saigon SaaS increased qualified leads by 340% in 4 months - Stratic Flow transformed our scattered marketing efforts into a predictable lead generation system. We went from 12 qualified leads per month to over 50, with a 23% lower cost per acquisition.",
      rating: "5.0"
   },
   {
      id: 2,
      page: "home_1",
      avatar: avatar_2,
      name: "Thao Nguyen",
      designation: "CEO, Mekong E-commerce",
      desc: "Mekong E-commerce achieved 250% ROI increase within 6 months - The Stratic Flow Method revolutionized our advertising strategy. Our ROAS improved from 2.1x to 5.2x, and our monthly revenue grew by 180% while reducing ad spend by 15%.",
      rating: "5.0"
   },
   {
      id: 3,
      page: "home_1",
      avatar: avatar_3,
      name: "Dung Phan",
      designation: "Director, Da Nang Realty",
      desc: "Da Nang Realty doubled sales conversions in 90 days - Their systematic approach transformed our sales funnel. We went from 8% to 16% conversion rate and generated $2.3M in additional revenue in the first quarter alone.",
      rating: "5.0"
   },
];

export default testi_data;
