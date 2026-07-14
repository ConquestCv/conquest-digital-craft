import PageHeader from "@/components/PageHeader";
import Contact from "@/components/sections/Contact";

const ContactPage = () => (
  <div className="animate-fade-in">
    <PageHeader
      eyebrow="contact"
      title={<>Let's build something that runs on its own.</>}
      lede="Full-time remote. AI-first teams. Founder-led ops. Reach out below."
    />
    <Contact />
  </div>
);

export default ContactPage;
