import PageHeader from "@/components/PageHeader";
import Research from "@/components/sections/Research";

const ResearchPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="research & knowledge"
      title={<>A structured way to know things.</>}
      lede="Every research pass produces the same artefact shape — context, comparison, risks, recommendation. So the next reader (usually the executive) sees exactly what they need without hunting for it."
    />
    <Research />
  </div>
);

export default ResearchPage;
