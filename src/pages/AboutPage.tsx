import PageHeader from "@/components/PageHeader";
import About from "@/components/sections/About";

const AboutPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="about"
      title={<>I look for the friction,<br />then build the fix.</>}
      lede="I didn't set out to work in AI operations — I got there by being the person who noticed the same problem happening every week and quietly built something to stop it."
    />
    <About />
  </div>
);

export default AboutPage;
