interface DataType {
   id: number;
   page: string;
   icon: string;
   title: string;
   desc: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      page: "about",
      icon: "flaticon-idea",
      title: "Strategy First",
      desc: "We don't act without a plan. Every project begins with deep thinking and a clear, intelligent roadmap tailored to your goals.",
   },
   {
      id: 2,
      page: "about",
      icon: "flaticon-clarity",
      title: "Clarity in Complexity",
      desc: "We make the complex world of digital marketing simple. We communicate openly, honestly, and without confusing jargon.",
   },
   {
      id: 3,
      page: "about",
      icon: "flaticon-report",
      title: "Measurable Momentum",
      desc: "We believe in tangible results. Our success is measured by the continuous, positive movement of your key performance indicators (KPIs).",
   },
];

export default feature_data;
