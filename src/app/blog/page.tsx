import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Stratic Flow Blog | Digital Marketing Insights",
};
const page = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}

export default page