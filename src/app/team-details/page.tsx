import TeamDetails from "@/components/pages/teams/team-details";
import Wrapper from "@/layouts/Wrapper";

// TODO: This title should be dynamically generated based on the team member's name.
export const metadata = {
  title: "Team Member Name | Stratic Flow",
};
const page = () => {
  return (
    <Wrapper>
      <TeamDetails />
    </Wrapper>
  )
}

export default page