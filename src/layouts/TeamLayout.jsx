import ButtonDarkComponent from "../components/ButtonDarkComponent";
import SectionTitleComponent from "../components/SectionTitleComponent";
import TeamCardComponent from "../components/TeamCardComponent";
function TeamLayout() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
      image: "./images/profile-1.png",
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
      image: "./images/profile-2.png",
    },
    {
      name: "Micahel Brown",
      position: "Senior SEO Specialist",
      desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
      image: "./images/profile-3.png",
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
      image: "./images/profile-4.png",
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
      image: "./images/profile-5.png",
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
      image: "./images/profile-6.png",
    },
  ];
  return (
    <>
      <SectionTitleComponent
        title="Team"
        desc="Meet the skilled and experienced team behind our successful digital marketing strategies"
      ></SectionTitleComponent>

      <div
        style={{
          margin: "70px 85px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {teamMembers.map((member, index) => (
          <TeamCardComponent key={index} props={member} />
        ))}
      </div>
      <div
        style={{
          margin: "0 85px",

          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ButtonDarkComponent name="See all team" />
      </div>
    </>
  );
}

export default TeamLayout;
