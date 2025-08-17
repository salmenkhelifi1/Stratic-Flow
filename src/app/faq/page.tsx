import Faq from "@/components/pages/faq";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "FAQ | Stratic Flow",
};
const page = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  )
}

export default page