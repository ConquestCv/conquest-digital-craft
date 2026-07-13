const beats = [
  {
    year: "Now",
    title: "Building for AI-first teams",
    body: "Independent AI operations, automation, and executive support. I use AI daily for research, drafting, coding, debugging, and decision support — turning messy inputs into usable outputs faster.",
  },
  {
    year: "2024–25",
    title: "Executive operations, remote",
    body: "Supported executive and client-facing operations at Outsource Global — calendar, inbox follow-ups, CRM, trackers, and clean documentation across busy remote teams.",
  },
  {
    year: "2023–24",
    title: "AI content evaluator",
    body: "Reviewed AI-generated responses for accuracy and reasoning at TELUS / DataAnnotation. Wrote multi-turn prompts, evaluation notes, and feedback across technical and administrative contexts.",
  },
  {
    year: "2023",
    title: "Ecosystem ops & content",
    body: "Coordinated community operations, education, and moderation at Aptos Labs. Learned how to explain complex systems in plain language and turn scattered signal into structured updates.",
  },
];

const About = () => (
  <section id="about" className="section-wrap">
    <div className="section-container">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="h-eyebrow-block sticky top-24">
            <span className="eyebrow">about</span>
            <h2 className="section-title">
              I look for the friction,<br />then build the fix.
            </h2>
            <p className="section-lede">
              I didn't set out to work in AI operations — I got there by
              being the person who noticed the same problem happening every
              week and quietly built something to stop it.
            </p>
            <div className="pt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Executive support taught me how a founder's week actually
                works — where things break, what gets dropped, what a good
                summary looks like at 6am before a meeting.
              </p>
              <p>
                AI made me faster at all of it. Then I started building the
                tools too — a Chrome extension when copy-paste kept breaking,
                a screen recorder that fit my workflow, a research OS for
                topics I revisit constantly.
              </p>
              <p className="text-foreground">
                I'm self-directed, comfortable with ambiguity, and reliable
                at taking a rough idea through to a working result.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {beats.map((b, i) => (
            <div key={b.year} className="panel-hover p-6 group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="mono-pill shrink-0">{b.year}</span>
                <span className="num-marker">0{i + 1}.</span>
                <h3 className="text-lg font-heading font-semibold">{b.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-0 md:pl-[76px]">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
