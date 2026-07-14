import PageHeader from "@/components/PageHeader";
import Problems from "@/components/sections/Problems";

const WorkPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="problems i solved"
      title={<>Not projects. Problems.</>}
      lede="Every one of these started with something breaking, being slow, or being repetitive. Here's the friction, the fix, and what changed after."
    />
    <Problems />
  </div>
);

export default WorkPage;
