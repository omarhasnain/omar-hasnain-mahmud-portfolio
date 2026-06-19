import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertTriangle, HelpCircle, Mail, Phone, Calendar, ArrowRight } from "lucide-react";

interface FormMessage {
  name: string;
  company: string;
  email: string;
  roleType: string;
  message: string;
  timestamp: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [roleType, setRoleType] = useState("PM Role");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [history, setHistory] = useState<FormMessage[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("omar-pm-portfolio-messages");
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!name.trim()) {
      setErrorText("Please state your name so Omar knows who is reaching out.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorText("Please write a valid email address so Omar can reply back.");
      return;
    }
    if (!message.trim()) {
      setErrorText("Please write a brief summary or message request.");
      return;
    }

    setIsSubmitting(true);

    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || "11ee2db9-f6ff-4220-8461-20d974aa6a3b";
    

    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            company: company || "Independent Contractor",
            email,
            subject: `New Portfolio Message from ${name}`,
            vacancy_purpose: roleType,
            message,
          })
        });

        const data = await response.json();

        if (data.success) {
          const newMessage: FormMessage = {
            name,
            company: company || "Independent Contractor",
            email,
            roleType,
            message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };

          const updatedHistory = [newMessage, ...history];
          setHistory(updatedHistory);
          localStorage.setItem("omar-pm-portfolio-messages", JSON.stringify(updatedHistory));

          setIsSent(true);
          // Clean inputs
          setName("");
          setCompany("");
          setEmail("");
          setMessage("");
        } else {
          setErrorText(data.message || "Failed to forward via email API. Please try direct mail fallback.");
        }
      } catch (err) {
        setErrorText("Network response error. Please check your connection or contact Omar direct.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Local fallback preservation - works instantly during previews
      setTimeout(() => {
        const newMessage: FormMessage = {
          name,
          company: company || "Independent Contractor",
          email,
          roleType,
          message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        const updatedHistory = [newMessage, ...history];
        setHistory(updatedHistory);
        localStorage.setItem("omar-pm-portfolio-messages", JSON.stringify(updatedHistory));

        setIsSent(true);
        // Clean inputs
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
        setIsSubmitting(false);
      }, 1200);
    }
  };

  return (
    <div className="bg-white/5 border border-white/8 rounded-2xl p-6 md:p-8 relative overflow-hidden space-y-6">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

      <h4 className="font-heading font-extrabold text-white text-md tracking-tight">
        Send an Instant Message to Omar
      </h4>

      <AnimatePresence mode="wait">
        {!isSent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorText && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/30 text-red-300 text-xs p-3.5 rounded-xl flex items-center gap-2.5"
              >
                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <p>{errorText}</p>
              </motion.div>
            )}

            {/* Row: Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-brand-silver">
                  Your Name <span className="text-brand-accent-bright">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-brand-silver">
                  Company / Agency
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            {/* Row: Email and Role Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-brand-silver">
                  Email Address <span className="text-brand-accent-bright">*</span>
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-brand-silver">
                  Vacancy Purpose
                </label>
                <select
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-[#141b2f] border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-xs font-semibold text-brand-mist outline-none transition-all cursor-pointer"
                >
                  <option value="Product Manager">Product Manager Roles</option>
                  <option value="Associate PM / Intern">Associate PM / Intern Roles</option>
                  <option value="Project Executive">Project Management Roles</option>
                  <option value="Operations Specialist">Operations Manager Roles</option>
                  <option value="Quick Consultation / Chat">Quick Professional Chat</option>
                </select>
              </div>
            </div>

            {/* Message Block */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-wider text-brand-silver">
                Your Message / Proposal <span className="text-brand-accent-bright">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Write your role details or quick query here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-bright text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg select-none cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                    className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                  />
                  Connecting Stream...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Dispatch Secure Message
                </>
              )}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h5 className="font-heading font-extrabold text-[#ffffff] text-md">
                Message Received!
              </h5>
              
              {(import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY ? (
                <p className="text-xs text-brand-silver max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out! Your message has been dispatched successfully using the active Web3Forms API. Omar has been notified and will respond to your coordinates soon.
                </p>
              ) : (
                <div className="space-y-4 max-w-sm mx-auto">
                  <p className="text-xs text-brand-silver leading-relaxed">
                    Your message has been preserved here inside local storage for review.
                  </p>

                  {/* MailTo Fallback for instant sending */}
                  <a
                    href={`mailto:ohasnainmahmud@gmail.com?subject=Contact Query via Portfolio&body=Hello Omar,%0A%0AMessage details:%0A- Visitor: ${name}%0A- Purpose: ${roleType}%0A- Message: Custom message preserved in logs below.%0A%0ABest regards`}
                    className="inline-flex items-center gap-2 bg-[#2563eb]/10 hover:bg-[#2563eb]/20 border border-[#2563eb]/30 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                  >
                    🚀 Mail Directly via Client Fallback
                  </a>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsSent(false)}
              className="text-xs font-bold text-brand-accent-bright hover:underline flex items-center gap-1.5 justify-center mx-auto cursor-pointer pt-2"
            >
              Send Another Message
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Local Message Log for checking review submissions */}
      {history.length > 0 && (
        <div className="pt-6 border-t border-white/5 space-y-3">
          <p className="text-[10px] uppercase font-extrabold tracking-wider text-brand-silver">
            Preserved Message Logs ({history.length})
          </p>
          <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
            {history.map((h, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-1.5 text-left">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-brand-mist">{h.name} @ {h.company}</span>
                  <span className="text-brand-silver font-medium">{h.timestamp}</span>
                </div>
                <p className="text-xs text-brand-silver leading-relaxed line-clamp-2">
                  <span className="bg-brand-teal/20 text-brand-teal px-1.5 py-0.5 rounded mr-1 text-[9px] font-bold">
                    {h.roleType}
                  </span>
                  {h.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
