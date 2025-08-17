import UseCaseDetails from "@/components/causes/use-cases-details";
import Wrapper from "@/layouts/Wrapper";

// TODO: This title should be dynamically generated based on the use case.
export const metadata = {
  title: "Use Case Title | Stratic Flow",
};
const page = () => {
  return (
    <Wrapper>
      <UseCaseDetails />
    </Wrapper>
  )
}

export default page