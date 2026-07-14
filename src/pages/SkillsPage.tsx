import PageHeader from "@/components/PageHeader";
import Skills from "@/components/sections/Skills";

const SkillsPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="skills & tools"
      title={<>The stack, grouped by intent.</>}
      lede="No progress bars. What matters is what these tools let me ship — research pipelines, automations, executive support systems."
    />
    <Skills />
  </div>
);

export default SkillsPage;
