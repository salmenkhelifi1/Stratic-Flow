interface DataType {
   id: number;
   page: string;
   price_details: {
      id: number;
      sub_title: string;
      btn: string;
      feature: string[];
   }[]
}

const price_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      price_details: [
         {
            id: 1,
            sub_title: "Strategic Foundation Package",
            btn: "Book a Consultation",
            feature: [
               "Comprehensive business & market analysis",
               "In-depth competitor intelligence report",
               "Custom brand messaging framework",
               "12-month growth roadmap with clear KPIs",
               "Implementation guidelines and priorities",
            ]
         },
         {
            id: 2,
            sub_title: "Complete Growth Acceleration",
            btn: "Book a Consultation",
            feature: [
               "Everything in Strategic Foundation",
               "Custom website or e-commerce platform",
               "Full content and creative asset creation",
               "Multi-channel advertising campaign management",
               "Monthly performance reports and optimization",
            ]
         },
         {
            id: 3,
            sub_title: "Ongoing Growth Partnership",
            btn: "Book a Consultation",
            feature: [
               "Dedicated account management team",
               "Continuous ad campaign optimization",
               "Regular content creation and design",
               "Technical support and website maintenance",
               "Priority access and strategic consultation",
            ]
         }
      ]
   },
];

export default price_data;