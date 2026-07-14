import PageHeader from "@/components/PageHeader";
import Writing from "@/components/sections/Writing";

const WritingPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="writing & content"
      title={<>Threads, briefs, teachable systems.</>}
      lede="Writing is how I stress-test a workflow. If I can explain it clearly to someone else, the system works."
    />
    <Writing />
  </div>
);

export default WritingPage;
