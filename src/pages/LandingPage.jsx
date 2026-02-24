import CaseStudiesLayout from "../layouts/CaseStudiesLayout";
import ContactsLayout from "../layouts/ContactsLayout";
import FooterLayout from "../layouts/FooterLayout";
import HeroLayout from "../layouts/HeroLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import ProcessLayout from "../layouts/ProcessLayout";
import ServicesLayout from "../layouts/ServicesLayout";
import TeamLayout from "../layouts/TeamLayout";
import TestimonialsLayout from "../layouts/TestimonialsLayout";

function App() {
  return (
    <>
      <NavbarLayout />
      <HeroLayout />
      <ServicesLayout />
      <CaseStudiesLayout />
      <ProcessLayout />
      <TeamLayout />
      <TestimonialsLayout />
      <ContactsLayout />
      <FooterLayout />
    </>
  );
}

export default App;
