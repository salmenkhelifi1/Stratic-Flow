import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";

// TODO: This title should be dynamically generated based on the blog post.
export const metadata = {
  title: "Blog Post Title | Stratic Flow",
};
const page = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}

export default page