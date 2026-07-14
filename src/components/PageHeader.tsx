import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}

const PageHeader = ({ eyebrow, title, lede }: Props) => (
  <section className="pt-32 sm:pt-40 pb-6 relative">
    <div className="section-container">
      <div className="max-w-3xl space-y-4 animate-slide-up">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading" style={{ letterSpacing: "-0.03em" }}>
          {title}
        </h1>
        {lede && <p className="section-lede">{lede}</p>}
      </div>
    </div>
  </section>
);

export default PageHeader;
