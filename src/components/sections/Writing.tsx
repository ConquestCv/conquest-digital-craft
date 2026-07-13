import { ExternalLink, Clock, Play } from "lucide-react";
import videoSample from "@/assets/content-sample.mp4.asset.json";
import axiraImg from "@/assets/axira-sample.png.asset.json";

const threads = [
  {
    url: "https://x.com/iamconqwest/status/1976034552993939581?s=20",
    title: "How I use multiple AI models for one research question",
    preview: "One model gives you an answer. Three models — cross-checked — give you a decision.",
    category: "AI · Educational",
    read: "5 min",
  },
  {
    url: "https://x.com/iamconqwest/status/1972933317470437483?s=20",
    title: "Prompt design: from a paragraph to a repeatable system",
    preview: "Most prompts fail because they aren't specific about the output shape. Fix that first.",
    category: "AI · Prompting",
    read: "4 min",
  },
  {
    url: "https://x.com/iamconqwest/status/1969912166338728334?s=20",
    title: "Turning messy notes into an executive brief",
    preview: "Raw call notes → structure → 4-part summary. A workflow you can run every time.",
    category: "Executive Ops",
    read: "6 min",
  },
  {
    url: "https://x.com/iamconqwest/status/1957274785659879919?s=20",
    title: "Small automations, big time back",
    preview: "You don't need a startup. You need a script that runs while you sleep.",
    category: "Automation",
    read: "4 min",
  },
  {
    url: "https://x.com/iamconqwest/status/1939443897450537221?s=20",
    title: "Why your AI workflow needs a shape",
    preview: "Every research pass I run produces the same artefact. That's the whole trick.",
    category: "AI · Systems",
    read: "5 min",
  },
];

const Writing = () => (
  <section id="writing" className="section-wrap">
    <div className="section-container">
      <div className="h-eyebrow-block max-w-3xl">
        <span className="eyebrow">writing & content</span>
        <h2 className="section-title">Threads, briefs, teachable systems.</h2>
        <p className="section-lede">
          Writing is how I stress-test a workflow. If I can explain it
          clearly to someone else, the system works. Recent threads and
          content samples below.
        </p>
      </div>

      {/* Media samples */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="term-panel">
          <div className="term-header">
            <span className="term-dot bg-destructive/60" />
            <span className="term-dot bg-warning/60" />
            <span className="term-dot bg-accent/70" />
            <span className="ml-2 text-[11px] font-mono text-muted-foreground">video sample.mp4</span>
          </div>
          <video
            src={videoSample.url}
            controls
            playsInline
            className="w-full aspect-video object-cover bg-background"
            poster={axiraImg.url}
          />
          <div className="p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-1">
              Content production sample
            </div>
            <p className="text-sm text-muted-foreground">
              Short-form explainer produced through the AI-assisted content
              workflow. Idea → research → script → edit → publish.
            </p>
          </div>
        </div>

        <div className="term-panel">
          <div className="term-header">
            <span className="term-dot bg-destructive/60" />
            <span className="term-dot bg-warning/60" />
            <span className="term-dot bg-accent/70" />
            <span className="ml-2 text-[11px] font-mono text-muted-foreground">graphic sample.png</span>
          </div>
          <div className="relative aspect-video overflow-hidden bg-background">
            <img
              src={axiraImg.url}
              alt="Content graphic sample"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-1">
              Editorial graphic sample
            </div>
            <p className="text-sm text-muted-foreground">
              Visual work produced alongside long-form and thread content —
              subject exploration, feature explainers, on-brand type.
            </p>
          </div>
        </div>
      </div>

      {/* Threads */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {threads.map((t, i) => (
          <a
            key={t.url}
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className="panel-hover p-5 group flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="badge-accent">{t.category}</span>
              <span className="num-marker">0{i + 1}</span>
            </div>
            <h3 className="text-base font-heading font-semibold leading-snug mb-2 group-hover:text-accent transition-colors">
              {t.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {t.preview}
            </p>
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-[11px] font-mono text-muted-foreground inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {t.read}
              </span>
              <span className="text-[11px] font-mono text-accent inline-flex items-center gap-1">
                Read on X <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Writing;
