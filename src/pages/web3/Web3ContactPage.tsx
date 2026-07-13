import { useState } from "react";
import { Mail, Phone, MapPin, Twitter, Send, ArrowRight } from "lucide-react";
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
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria (Remote-First)",
    href: null,
  },
];

const socials = [
  {
    name: "Twitter / X",
    icon: Twitter,
    href: "https://x.com/iamconqwest",
    username: "@iamconqwest",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/BIG_CQ",
    username: "@BIG_CQ",
  },
];

const Web3ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectSector: "",
    communitySize: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subjectText = `Ecosystem Optimization: ${formData.projectSector || "Web3"} Project`;
    
    const bodyText = `Hi Conquest,

${formData.message}

---
From: ${formData.name}
Email: ${formData.email}
Project Sector: ${formData.projectSector}
Community Size: ${formData.communitySize}`;

    const mailtoLink = `mailto:conquestaisiri@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    
    window.open(mailtoLink, '_self');
    
    toast({
      title: "Opening your email app...",
      description: "Complete sending the email in your mail application.",
    });
  };

  const inputClass = "w-full px-3 py-2 rounded-lg bg-background border border-emerald-500/20 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm text-foreground placeholder:text-muted-foreground font-mono";

  return (
    <div className="relative network-pattern">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-3">
          Start Here
        </p>
        <h1 className="page-title">
          Initiate{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Ecosystem Optimization
          </span>
        </h1>
        <p className="page-subtitle">
          Let's discuss how I can engineer your community retention and content pipeline.
        </p>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="terminal-card">
              <div className="p-6">
                <h2 className="text-lg font-heading font-bold mb-5">Discovery Call Request</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono font-medium text-emerald-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-medium text-emerald-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="projectSector" className="text-xs font-mono font-medium text-emerald-400">
                        Project Sector
                      </label>
                      <select
                        id="projectSector"
                        name="projectSector"
                        value={formData.projectSector}
                        onChange={handleChange}
                        required
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="">Select sector</option>
                        <option value="AI">AI</option>
                        <option value="DePIN">DePIN</option>
                        <option value="RWA">RWA</option>
                        <option value="DeFi">DeFi</option>
                        <option value="DAO">DAO</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="communitySize" className="text-xs font-mono font-medium text-emerald-400">
                        Current Community Size
                      </label>
                      <select
                        id="communitySize"
                        name="communitySize"
                        value={formData.communitySize}
                        onChange={handleChange}
                        required
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="">Select size</option>
                        <option value="< 1K">&lt; 1K members</option>
                        <option value="1K-10K">1K – 10K members</option>
                        <option value="10K-50K">10K – 50K members</option>
                        <option value="50K+">50K+ members</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-medium text-emerald-400">
                      Describe Your Ecosystem Challenge
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="What's the biggest retention or content challenge your project is facing right now?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110 font-mono"
                  >
                    Deploy the Content Engine
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* Direct Contact */}
              <div className="glass-card p-5">
                <h3 className="text-base font-heading font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <info.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-sm text-foreground hover:text-emerald-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-sm text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-5">
                <h3 className="text-base font-heading font-bold mb-4">Connect Online</h3>
                <div className="space-y-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <social.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">{social.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card p-5 border-emerald-500/30">
                <h3 className="text-base font-heading font-bold mb-3">Deployment Ready</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Remote-first. Available for ecosystem retention, content engineering, and community infrastructure contracts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    Remote-First
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Async-Native
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Flexible Timezone
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3ContactPage;
