interface DataType {
   id: number;
   page: string;
   quesstion: string;
   answer: string;
}

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      quesstion: "What is the Stratic Flow Method™?",
      answer: "The Stratic Flow Method™ is our proprietary 3-phase system that transforms chaotic marketing efforts into predictable revenue growth. It combines strategic analysis, precision implementation, and continuous optimization to ensure every marketing dollar generates maximum ROI. Unlike other agencies that focus on individual tactics, our method ensures all marketing activities work together as an integrated growth engine.",
   },
   {
      id: 2,
      page: "home_1",
      quesstion: "Who is your ideal client?",
      answer: "We work best with Vietnamese businesses generating $500K+ annual revenue who are serious about scaling. Our ideal clients include e-commerce businesses ready to scale beyond $1M annually, SaaS companies seeking predictable lead generation, professional services firms wanting to dominate their market, and established businesses struggling with inconsistent marketing results. We focus on companies that value strategic thinking over quick fixes.",
   },
   {
      id: 3,
      page: "home_1",
      quesstion: "What makes you different from other agencies?",
      answer: "Three key differences set us apart: 1) Strategy-First Approach - We build comprehensive growth strategies before executing any tactics, 2) Integrated Method - All services work together as one cohesive system, not isolated campaigns, 3) Transparent Results - Real-time dashboards and monthly reports show exactly how your investment generates ROI. Most agencies focus on individual services. We focus on your complete business growth.",
   },
];

export default faq_data;
