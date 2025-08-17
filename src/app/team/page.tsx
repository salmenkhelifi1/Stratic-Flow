import Team from "@/components/pages/teams/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Our Team | Stratic Flow",
};
const page = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  )
}

export default page