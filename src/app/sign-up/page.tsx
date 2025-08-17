import SignUp from "@/components/pages/sign-up";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Sign Up | Stratic Flow",
};
const page = () => {
  return (
    <Wrapper>
      <SignUp />
    </Wrapper>
  )
}

export default page