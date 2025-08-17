import Login from "@/components/pages/Login";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Login | Stratic Flow",
};
const page = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  )
}

export default page