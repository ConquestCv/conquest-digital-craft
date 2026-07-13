import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Linkedin,
  Clock,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "conquestaisiri@gmail.com",
    href: "mailto:conquestaisiri@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 704 916 3089",
    href: "tel:+2347049163089",
  },
  {
    icon: Phone,
    label: "Alt. Phone",
    value: "+234 707 985 2097",
    href: "tel:+2347079852097",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria · Remote-Ready",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Aligned to PST / MST / EST / CST",
    href: null,
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/aisiriconquest",
    handle: "aisiriconquest",
  },
  {
    name: "WhatsApp",
    icon: Send,
    href: "https://wa.me/2347049163089",
    handle: "+234 704 916 3089",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Hire] ${formData.role || "Inquiry"} — ${formData.name}`;
    const body = `Hi Conquest,

${formData.message}

—
Name:    ${formData.name}
Email:   ${formData.email}
Company: ${formData.company}
Role:    ${formData.role}`;

    window.open(
      `mailto:conquestaisiri@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_self"
    );

    toast({
      title: "Opening your email app…",
      description: "Send the message from your mail client to complete.",
    });
  };

  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">Contact</span>
          <h1 className="page-title mt-4">
            Bring on a calm, discreet
            <br />
            <span className="text-muted-foreground font-normal">
              second brain.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Send a brief — calendar load, inbox volume, current tooling — and
            I'll come back the same business day with a clear support plan
            and availability.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="card-flat p-7 lg:p-9">
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-border">
                  <h2 className="text-lg font-semibold">Project brief</h2>
                  <span className="text-xs font-mono text-muted-foreground">
                    ~5 min · response same day
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                    />
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                        Role type
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 rounded-md bg-card border border-border focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all text-sm text-foreground"
                      >
                        <option value="">Select role</option>
                        <option value="Virtual Executive Assistant">
                          Virtual Executive Assistant
                        </option>
                        <option value="Executive Assistant to CEO">
                          Executive Assistant to CEO
                        </option>
                        <option value="Virtual Project Manager">
                          Virtual Project Manager
                        </option>
                        <option value="Operations & Client Support">
                          Operations & Client Support
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                      Brief
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Calendar load, inbox volume, current tooling, time zone, timeline…"
                      className="w-full px-3 py-2.5 rounded-md bg-card border border-border focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all text-sm text-foreground placeholder:text-muted-foreground/60 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Brief
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Side info */}
            <aside className="lg:col-span-5 space-y-5">
              <div className="card-flat p-6">
                <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  Direct
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-start gap-3"
                    >
                      <info.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-foreground hover:text-accent transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-sm text-foreground">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-flat p-6">
                <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  Online
                </h3>
                <div className="space-y-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 p-3 rounded-md border border-border hover:border-foreground/25 hover:bg-secondary/40 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <s.icon className="w-4 h-4 text-accent" />
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {s.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {s.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="card-flat p-6">
                <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-3">
                  Engagement
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Open to full-time, part-time and project-based engagements.
                  Aligned to PST / MST / EST / CST business hours for
                  international executives and remote teams.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-accent">Full-time</span>
                  <span className="badge-accent">Part-time</span>
                  <span className="badge-accent">Project-based</span>
                  <span className="badge-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-dot" />
                    Available now
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="space-y-1.5">
    <label className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-3 py-2.5 rounded-md bg-card border border-border focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all text-sm text-foreground placeholder:text-muted-foreground/60"
    />
  </div>
);

export default ContactPage;
