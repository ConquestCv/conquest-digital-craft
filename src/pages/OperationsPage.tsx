import PageHeader from "@/components/PageHeader";
import Operations from "@/components/sections/Operations";

const OperationsPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="executive operations"
      title={<>Second brain for founder weeks.</>}
      lede="Two-plus years supporting executives and remote ops. Concept dashboards below — the real ones live behind client NDAs."
    />
    <Operations />
  </div>
);

export default OperationsPage;
