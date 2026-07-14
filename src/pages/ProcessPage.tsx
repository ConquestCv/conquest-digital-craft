import PageHeader from "@/components/PageHeader";
import Process from "@/components/sections/Process";

const ProcessPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="how i work"
      title={<>A repeatable loop, not a burst of inspiration.</>}
      lede="Nine steps that run on every problem I take on. Observe first, document last. Everything in between is negotiable."
    />
    <Process />
  </div>
);

export default ProcessPage;
