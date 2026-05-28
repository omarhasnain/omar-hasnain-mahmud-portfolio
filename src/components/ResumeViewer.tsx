import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { jsPDF } from "jspdf";
import { FileText, Download, Check, Sparkles, Briefcase, Award, GraduationCap, Mail, MapPin, Link, Award as BookOpen } from "lucide-react";

interface ResumeViewerProps {
  onClose?: () => void;
}

export default function ResumeViewer({ onClose }: ResumeViewerProps) {
  const [roleFocus, setRoleFocus] = useState<"pm" | "saas" | "edtech">("pm");
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filterButtons = [
    { id: "pm", name: "Product Manager Core Focus" },
    { id: "saas", name: "SaaS & Enterprise Focus" },
    { id: "edtech", name: "EdTech & Operations Focus" },
  ];

  const getResumeContent = () => {
    switch (roleFocus) {
      case "saas":
        return {
          title: "SaaS Operations Manager & Key Accounts Expert",
          summary: "Enterprise-focused Operations and Key Account professional with a proven track record navigating B2B SaaS environments. Adept at managing high-value account onboarding, integrating third-party systems, drafting schema synchronization rules, and ensuring high-touch account retention. Skilled in bridging the gap between enterprise clients and technical developers.",
          skills: {
            "Enterprise SaaS & Success": ["Key Account Retention", "Onboarding Acceleration", "SLA Compliance", "Strategic Account Planning"],
            "System Integrations & Logic": ["API Synchronizations", "Schema Definition Mapping", "OTA Distribution Channels", "Channel Management"],
            "Process & Task Management": ["Agile Sprints", "Jira Bug Tracking", "Support Log Analysis", "Metrics Status Reporting"],
            "Leadership & Interpersonal": ["Empathetic Listening", "Bridge Communication", "Calm Under Pressure", "Cross-Functional Alignment"]
          },
          experience: [
            {
              company: "DEKKO ISHO VENTURE CAPITAL (Gustav.club - Hospitality SaaS)",
              location: "Dhaka, Bangladesh",
              role: "Key Accounts Manager (Product Delivery Lead)",
              period: "Feb 2026 – Present",
              points: [
                "Championed account health and secured high-value renewals for major luxury resorts including Shopnil Shindhu, Windy Terrace, Mermaid Beach Resort, and Sayeman Beach Resort.",
                "Facilitated client alignment workshops to define requirements for continuous, low-latency reservation sync across multiple distribution channels (OTAs).",
                "Drafted database schema definitions and synchronization rules to prevent concurrent reservation collision; oversaw tight acceptance testing under peak-hour simulation routines.",
                "Slashed custom system configuration delays, compressing onboarding cycles from 60 days down to 18 days (a 3.3x onboarding acceleration metric) for enterprise accounts."
              ]
            },
            {
              company: "PROGRAMMING HERO",
              location: "Dhaka, Bangladesh",
              role: "Project Executive (Student Operations & Support)",
              period: "Mar 2025 – October 2025",
              points: [
                "Managed operational support structures and progress tracking for a massive cohort of 1,200+ active learners across 11 complex team projects, ensuring stellar student-facing outcomes.",
                "Coordinated with cross-functional curriculum instructors, frontend developers, and customer success teams to run projects on high-velocity timelines.",
                "Optimized LMS homework upload systems, reducing submission support queries by 45% and elevating student self-service satisfaction."
              ]
            }
          ],
          hasIEEE: true,
          hasYSSE: false
        };

      case "edtech":
        return {
          title: "Program & Operations Professional · Edtech Specialist",
          summary: "Program & Operations professional with experience leading educational projects, managing cross-functional teams, and coordinating diverse initiatives. Skilled in program design, stakeholder management, and community engagement. Adept at driving operational efficiency and building impactful programs that empower youth and deliver measurable outcomes.",
          skills: {
            "Technical Skills": ["MS Office Suite", "Prompt Engineering", "Google Workspace", "Trello"],
            "Project Management": ["Stakeholder Management", "Team Collaboration", "Resource Allocation"],
            "Operations Management": ["Process Optimization", "Workflow Coordination", "Strategic Planning"],
            "Leadership Strengths": ["Time Management", "Analytical Ability", "Adaptability & Learning Agility", "Problem Solving", "Customer Engagement"]
          },
          experience: [
            {
              company: "PROGRAMMING HERO",
              location: "Dhaka, Bangladesh",
              role: "Project Executive",
              period: "Mar 2025 – October 2025",
              points: [
                "Managed around 1200+ learners across 11 projects, ensuring stronger student engagement and satisfaction.",
                "Managed multiple team-based programs/projects from planning to successful execution, collaborating with educators, developers, and stakeholders to ensure delivery of impactful learning experiences.",
                "Designed and optimized educational project plans, aligning them with learning objectives and industry standards for efficiency. (SCIC, EJP, Squid Game, STN etc.)",
                "Designed scalable project plans aligned with educational objectives, ensuring an average of 70% completion rate.",
                "Conducted 500+ one-on-one counseling sessions with learners, solving both personal and technical issues through empathy-driven communication, significantly improving user satisfaction.",
                "Proactively identified and closed project loopholes, proposing innovative solutions that enhanced deliverable quality and minimized risks.",
                "Solved critical UX issue on Programming Hero’s website, identifying pain points, and implementing design fixes that improved navigation and enhanced student satisfaction.",
                "Represented Programming Hero as a Bronze Sponsor at SUST TEDx, collaborating with event co-organizers to manage sponsorship activities, resulting in the COO being invited as a Guest Speaker, enhancing the company’s brand visibility."
              ]
            }
          ],
          hasIEEE: false,
          hasYSSE: true
        };

      case "pm":
      default:
        return {
          title: "Product Manager · SaaS & Operations",
          summary: "Analytical, user-centric Product Manager combining product design thinking, UX clarity, and execution discipline to build impactful SaaS and EdTech products. Experienced in gathering complex user stories and requirements in Jira, streamlining user onboarding flows, conducting acceptance testing, and coordinating cross-functional sprints.",
          skills: {
            "Product Management": ["Requirements Gathering", "User Stories", "Feature Prioritization (MoSCoW/RICE)", "Jira Backlog Grooming", "Sprint Agile Coordination", "Client Alignment"],
            "UX & Design Thinking": ["Wireframing & Flows", "User Research Review", "Friction Drop-off Mapping", "Usability Audits"],
            "Technical & QA": ["Manual Functional Testing", "Regression Audits", "Schema Rules", "Systems Integration"],
            "Core Toolsets": ["Jira", "Figma", "Trello", "Google Workspace", "MS Office", "GitHub"]
          },
          experience: [
            {
              company: "DEKKO ISHO VENTURE CAPITAL (Gustav.club - Hospitality SaaS)",
              location: "Dhaka, Bangladesh",
              role: "Key Accounts Manager (Product Operations Lead)",
              period: "Feb 2026 – Present",
              points: [
                "Coordinate SaaS product delivery and feedback integration between dev teams, sales departments, and enterprise client accounts, acting as product operations champion.",
                "Translate complex customer operational requirements into clear technical product stories and tickets in Jira for development sprints.",
                "Slashed client onboarding time from 60 days to just 18 days (a 3.3x speed efficiency gain) by designing a simplified automated onboarding workflow for inventory, pricing cards, and user roles.",
                "Conduct meticulous manual QA and regression testing on critical reservation, billing, and reporting engines to ensure zero-fault production releases."
              ]
            },
            {
              company: "PROGRAMMING HERO",
              location: "Dhaka, Bangladesh",
              role: "Project Executive (PM & UX Operations)",
              period: "Mar 2025 – October 2025",
              points: [
                "Co-designed and concepted the highly engaging 'Squid Game' gamification framework resulting in outstanding cohort graduation rates and a 22% increase in homework submission rates.",
                "Solved critical UX hurdles inside the LMS submission flow; analyzed user logs of 50+ students to substitute cluttered forms with an intuitive drag-and-drop progress wizard, cutting submission support tickets by 45%.",
                "Supervised progression milestones for massive active cohorts of 1,200+ students across 11 projects using Jira task tracking."
              ]
            }
          ],
          hasIEEE: true,
          hasYSSE: false
        };
    }
  };

  const content = getResumeContent();

  const generateDownloadText = () => {
    let text = `OMAR HASNAIN MAHMUD\n`;
    text += `Chittagong, Bangladesh | +8801999333643 | ohasnainmahmud@gmail.com | linkedin.com/in/omarhasnainmahmud\n\n`;
    text += `=========================================\n`;
    text += `${content.title.toUpperCase()}\n`;
    text += `=========================================\n\n`;
    text += `SUMMARY:\n${content.summary}\n\n`;
    
    text += `EXPERIENCE:\n`;
    content.experience.forEach(exp => {
      text += `\n${exp.company} - ${exp.location}\n`;
      text += `${exp.role} (${exp.period})\n`;
      exp.points.forEach(pt => {
        text += `  • ${pt}\n`;
      });
    });

    if (content.hasYSSE) {
      text += `\nLEADERSHIP & VOLUNTEER ROLES:\n`;
      text += `\nYOUTH SCHOOL FOR SOCIAL ENTREPRENEURS (YSSE) - Dhaka, Bangladesh\n`;
      text += `Communication Department, Junior Associate (Mar 2023 – Feb 2024)\n`;
      text += `  • Implemented strategic techniques in the Communication Department, resulting in a 20% increase in operational efficiency.\n`;
      text += `  • Developed and executed diverse social media content planning strategies, led Social Media Management (SMM) units, and designed posters and visual content.\n`;
      text += `  • Communicated with Industry experts to deliver career guidance to youth audiences.\n`;
      text += `  • Grew the overall Social Media audience by 5% organically.\n`;
      text += `  • Led 50+ communication interns to nurture their professional growth and skills development.\n`;
    }

    if (content.hasIEEE) {
      text += `\nRESEARCH & PUBLICATIONS:\n`;
      text += `IEEE International Conference on Smart Systems and Computing Technology\n`;
      text += `Research Publication (Kushtia)\n`;
      text += `  • "Analyzing user churn and engagement parameters using predictive machine learning models to design gamified LMS learning curves."\n`;
    }

    text += `\nSKILLS:\n`;
    Object.entries(content.skills).forEach(([cat, list]) => {
      text += `${cat}: ${list.join(", ")}\n`;
    });

    text += `\nEDUCATION:\n`;
    text += `International Islamic University Chittagong (IIUC) - Chittagong, Bangladesh\n`;
    text += `Bachelor of Science, Computer and Communication Engineering (Graduated 2025)\n\n`;

    text += `EXTRA CURRICULAR ACTIVITIES (ECA):\n`;
    text += `  • Campus Ambassador, Interactive Cares\n`;
    text += `  • Customer Service Executive, LEAD Academy (Volunteer)\n`;
    text += `  • University Ambassador, ICT Olympiad Bangladesh\n\n`;

    text += `LANGUAGES:\n`;
    text += `  • Bangla (Native), English (Conversational)\n`;

    return text;
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      try {
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        });

        let y = 15;
        const leftMargin = 15;
        const rightMargin = 15;
        const pageWidth = 210;
        const pageHeight = 297;
        const contentWidth = pageWidth - leftMargin - rightMargin;

        const checkPage = (heightNeeded: number) => {
          if (y + heightNeeded > pageHeight - 15) {
            doc.addPage();
            y = 15;
            return true;
          }
          return false;
        };

        // Name
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor("#0a0e1a");
        doc.text("OMAR HASNAIN MAHMUD", pageWidth / 2, y, { align: "center" });
        y += 6;

        // Contacts
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor("#4b5563");
        doc.text("Chittagong, Bangladesh | +8801999333643 | ohasnainmahmud@gmail.com | linkedin.com/in/omarhasnainmahmud", pageWidth / 2, y, { align: "center" });
        y += 8;

        // Section Title Helper (matches custom PDF)
        const drawSectionHeader = (title: string) => {
          checkPage(14);
          y += 2;
          doc.setFont("Helvetica", "bold");
          doc.setFontSize(10);
          doc.setTextColor("#0a0e1a");
          doc.text(title.toUpperCase(), leftMargin, y);
          y += 1.5;
          doc.setDrawColor("#0a0e1a");
          doc.setLineWidth(0.2);
          doc.line(leftMargin, y, pageWidth - rightMargin, y);
          y += 5;
        };

        // Bullet point Writer Helper
        const writeBullet = (bulletText: string) => {
          const bulletMargin = 5;
          doc.setFont("Helvetica", "normal");
          doc.setFontSize(8.5);
          doc.setTextColor("#2c3e50");
          const splitLines = doc.splitTextToSize(bulletText, contentWidth - bulletMargin);
          const neededHeight = splitLines.length * 3.8;
          checkPage(neededHeight + 1);

          // Bullet point character
          doc.setFont("Helvetica", "bold");
          doc.text("•", leftMargin + 1, y);
          doc.setFont("Helvetica", "normal");
          doc.text(splitLines, leftMargin + bulletMargin, y);
          y += neededHeight + 1.2;
        };

        // Job header Writer Helper
        const writeJobHeader = (company: string, location: string, role: string, period: string) => {
          checkPage(12);
          doc.setFont("Helvetica", "bold");
          doc.setFontSize(9.5);
          doc.setTextColor("#0a0e1a");
          doc.text(`${company.toUpperCase()} – ${location}`, leftMargin, y);

          // Period right-flush
          const periodWidth = doc.getTextWidth(period);
          doc.text(period, pageWidth - rightMargin - periodWidth, y);
          y += 3.8;

          // Role (Italicized style)
          doc.setFont("Helvetica", "italic");
          doc.setFontSize(8.5);
          doc.setTextColor("#4b5563");
          doc.text(role, leftMargin, y);
          y += 4.5;
        };

        // Summary Section
        drawSectionHeader("SUMMARY");
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor("#2c3e50");
        const summaryLines = doc.splitTextToSize(content.summary, contentWidth);
        doc.text(summaryLines, leftMargin, y);
        y += (summaryLines.length * 4) + 4;

        // Experience Section
        drawSectionHeader("EXPERIENCE");
        content.experience.forEach((exp) => {
          writeJobHeader(exp.company, exp.location, exp.role, exp.period);
          exp.points.forEach(pt => {
            writeBullet(pt);
          });
          y += 2; // small space between multiple jobs
        });

        // Leadership section (if applicable for Edtech ops)
        if (content.hasYSSE) {
          drawSectionHeader("LEADERSHIP");
          writeJobHeader("Youth School for Social Entrepreneurs (YSSE)", "Dhaka, Bangladesh", "Communication Department, Junior Associate", "Mar 2023 – Feb 2024");
          const ysseBullets = [
            "Implemented strategic techniques in the Communication Department, resulting in a 20% increase in operational efficiency.",
            "Developed and executed diverse social media content planning strategies, led Social Media Management (SMM) units, and designed posters and visual content.",
            "Communicated with Industry experts to deliver career guidance to youth audiences.",
            "Grew the overall Social Media audience by 5% organically.",
            "Led 50+ communication interns to nurture their professional growth and skills development."
          ];
          ysseBullets.forEach(pt => writeBullet(pt));
        }

        // Research & publications section (if applicable for PM & SaaS)
        if (content.hasIEEE) {
          drawSectionHeader("RESEARCH & PUBLICATIONS");
          checkPage(15);
          doc.setFont("Helvetica", "bold");
          doc.setFontSize(9);
          doc.setTextColor("#0a0e1a");
          doc.text("IEEE International Conference on Smart Systems & Computing Technology", leftMargin, y);
          const locWidth = doc.getTextWidth("Research Publication (Kushtia)");
          doc.text("Research Publication (Kushtia)", pageWidth - rightMargin - locWidth, y);
          y += 4;

          doc.setFont("Helvetica", "italic");
          doc.setFontSize(8.5);
          doc.setTextColor("#374151");
          const paperText = '"Analyzing user churn and engagement parameters using predictive machine learning models to design gamified LMS learning curves." — Framework correlating LMS UX friction to user completion benchmarks.';
          const wrappedPaper = doc.splitTextToSize(paperText, contentWidth);
          doc.text(wrappedPaper, leftMargin, y);
          y += (wrappedPaper.length * 3.8) + 4;
        }

        // Skills section
        drawSectionHeader("SKILLS");
        Object.entries(content.skills).forEach(([category, list]) => {
          checkPage(8);
          // Category label
          doc.setFont("Helvetica", "bold");
          doc.setFontSize(8.5);
          doc.setTextColor("#0a0e1a");
          doc.text(`${category}: `, leftMargin, y);
          const labelWidth = doc.getTextWidth(`${category}: `);

          // List details
          doc.setFont("Helvetica", "normal");
          doc.setTextColor("#2c3e50");
          const skillsListText = (list as string[]).join(", ");
          const splitSkills = doc.splitTextToSize(skillsListText, contentWidth - labelWidth);
          doc.text(splitSkills, leftMargin + labelWidth, y);
          y += (splitSkills.length * 3.8) + 1.5;
        });
        y += 2;

        // Education section
        drawSectionHeader("EDUCATION");
        checkPage(15);
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor("#0a0e1a");
        doc.text("International Islamic University Chittagong (IIUC)", leftMargin, y);
        const gradYear = "2020 - 2025";
        const yearWidth = doc.getTextWidth(gradYear);
        doc.text(gradYear, pageWidth - rightMargin - yearWidth, y);
        y += 3.8;

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor("#374151");
        doc.text("Bachelor of Science, Computer and Communication Engineering", leftMargin, y);
        y += 6;

        // Extra Curricular Activities (ECA)
        checkPage(15);
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor("#0a0e1a");
        doc.text("Extra Curricular Activities (ECA):", leftMargin, y);
        y += 4.2;

        const ecas = [
          "Campus Ambassador, Interactive Cares",
          "Customer Service Executive, LEAD Academy (Volunteer)",
          "University Ambassador, ICT Olympiad Bangladesh"
        ];
        ecas.forEach(eca => writeBullet(eca));
        y += 2;

        // Languages
        checkPage(6);
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor("#0a0e1a");
        doc.text("Language: ", leftMargin, y);
        const lLabelWidth = doc.getTextWidth("Language: ");

        doc.setFont("Helvetica", "normal");
        doc.setTextColor("#2c3e50");
        doc.text("Bangla (Native), English (Conversational)", leftMargin + lLabelWidth, y);

        // Save PDF
        doc.save(`Omar_Hasnain_Mahmud_Resume_${roleFocus.toUpperCase()}.pdf`);
        
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      } catch (err) {
        console.error("PDF generation failure:", err);
      } finally {
        setDownloading(false);
      }
    }, 1200);
  };

  return (
    <div className="bg-white border border-black/5 rounded-2xl p-4 md:p-8 shadow-md">
      {/* Top Controller Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div className="space-y-1">
          <span className="text-[9px] uppercase font-bold tracking-widest text-brand-accent bg-[#f0f4ff] px-2.5 py-1 rounded-md">
            Interactive CV Interface
          </span>
          <h3 className="font-heading font-extrabold text-[#0a0e1a] text-lg flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-accent" />
            Resume Hub & Custom Profile Selector
          </h3>
          <p className="text-xs text-brand-silver">
            Formulate and dynamically view Omar's resume customized by recruiter domain.
          </p>
        </div>

        {/* Tailoring Controller Buttons */}
        <div className="flex flex-wrap gap-1.5 bg-[#f8faff] border border-black/5 p-1.5 rounded-xl w-full lg:w-auto">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setRoleFocus(btn.id as any)}
              className={`text-[9.5px] uppercase font-black tracking-wider px-3.5 py-3 rounded-lg transition-all flex-1 lg:flex-initial cursor-pointer ${
                roleFocus === btn.id
                  ? "bg-[#0a0e1a] text-white shadow-sm scale-[1.02]"
                  : "hover:bg-black/5 text-[#4b5563] font-bold"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>

      {/* Simulated Resume Body Card */}
      <div className="relative mt-6 border border-gray-100 rounded-2xl bg-white p-5 md:p-10 space-y-6 shadow-xs text-[#0a0e1a] max-w-4xl mx-auto border-t-4 border-t-[#0a0e1a]">
        {/* Watermark decoration */}
        <div className="absolute top-10 right-10 text-[#0a0e1a]/5 font-heading text-[11px] font-black uppercase tracking-widest pointer-events-none select-none hidden sm:block border border-[#0a0e1a]/10 px-3 py-1.5 rounded-lg">
          {roleFocus === "pm" && "PM Core Focus"}
          {roleFocus === "saas" && "SaaS Core Focus"}
          {roleFocus === "edtech" && "EdTech & Ops Focus"}
        </div>

        {/* Resume Header */}
        <div className="text-center space-y-2.5 border-b border-gray-200 pb-6">
          <h4 className="font-heading font-black text-2xl tracking-normal text-[#0a0e1a]">
            OMAR HASNAIN MAHMUD
          </h4>
          <div className="text-xs text-brand-silver font-semibold flex flex-wrap justify-center gap-x-4 gap-y-1.5 max-w-2xl mx-auto pt-1">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Chittagong, Bangladesh</span>
            <span className="flex items-center gap-1">📞 +8801999333643</span>
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400" /> ohasnainmahmud@gmail.com</span>
            <span className="flex items-center gap-1"><Link className="w-3.5 h-3.5 text-slate-400" /> linkedin.com/in/omarhasnainmahmud</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-1.5">
          <h5 className="text-[10px] uppercase font-black text-[#0a0e1a] tracking-widest border-b border-gray-100 pb-1">
            SUMMARY
          </h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            {content.summary}
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-3">
          <h5 className="text-[10px] uppercase font-black text-[#0a0e1a] tracking-widest border-b border-gray-100 pb-1">
            EXPERIENCE
          </h5>
          <div className="space-y-5">
            {content.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold gap-1">
                  <span className="text-brand-ink font-black">{exp.company} – <span className="text-brand-silver font-medium">{exp.location}</span></span>
                  <span className="text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded text-[10px] self-start sm:self-center">{exp.period}</span>
                </div>
                <p className="text-xs italic text-brand-silver font-black leading-none">{exp.role}</p>
                <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1.5 leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership (For EdTech ops) */}
        {content.hasYSSE && (
          <div className="space-y-3">
            <h5 className="text-[10px] uppercase font-black text-[#0a0e1a] tracking-widest border-b border-gray-100 pb-1">
              LEADERSHIP
            </h5>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold gap-1">
                <span className="text-brand-ink font-black">Youth School for Social Entrepreneurs (YSSE) – <span className="text-brand-silver font-medium">Dhaka, Bangladesh</span></span>
                <span className="text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded text-[10px] self-start sm:self-center">Mar 2023 – Feb 2024</span>
              </div>
              <p className="text-xs italic text-brand-silver font-black leading-none">Communication Department, Junior Associate</p>
              <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1.5 leading-relaxed">
                <li>Implemented strategic techniques in the Communication Department, resulting in a 20% increase in operational efficiency.</li>
                <li>Developed and executed diverse social media content planning strategies, led Social Media Management (SMM) units, and designed posters and visual content to enhance brand consistency and engagement across platforms.</li>
                <li>Communicated with Industry experts to deliver career guidance to youth audiences.</li>
                <li>Grew the overall Social Media audience by 5% organically.</li>
                <li>Led 50+ communication interns to nurture their professional growth and skills development.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Research / Academic (For PM & SaaS) */}
        {content.hasIEEE && (
          <div className="space-y-2">
            <h5 className="text-[10px] uppercase font-black text-[#0a0e1a] tracking-widest border-b border-gray-100 pb-1">
              RESEARCH & PUBLICATIONS
            </h5>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
              <p className="text-xs font-bold text-brand-ink">IEEE International Conference on Smart Systems & Computing Technology</p>
              <p className="text-[10px] text-brand-accent font-bold uppercase">Research Publication · Kushtia</p>
              <p className="text-[11px] text-slate-600 italic mt-1 leading-relaxed">
                "Analyzing user churn and engagement parameters using predictive machine learning models to design gamified LMS learning curves." — Framework correlating LMS UX friction to user completion benchmarks.
              </p>
            </div>
          </div>
        )}

        {/* Skills Section formatted like PDF */}
        <div className="space-y-2">
          <h5 className="text-[10px] uppercase font-black text-[#0a0e1a] tracking-widest border-b border-gray-100 pb-1">
            SKILLS
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {Object.entries(content.skills).map(([category, items]) => (
              <div key={category} className="space-y-1">
                <p className="font-extrabold text-[#0a0e1a]">{category}:</p>
                <p className="text-slate-650 leading-relaxed">
                  {items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <h5 className="text-[10px] uppercase font-black text-[#0a0e1a] tracking-widest border-b border-gray-100 pb-1">
              EDUCATION
            </h5>
            <div className="space-y-1">
              <p className="text-xs font-black text-brand-ink">International Islamic University Chittagong (IIUC)</p>
              <p className="text-xs text-slate-650">Bachelor of Science, Computer and Communication Engineering</p>
              <p className="text-[10px] text-brand-silver font-bold uppercase">Graduated 2025</p>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="text-[10px] uppercase font-black text-[#0a0e1a] tracking-widest border-b border-gray-100 pb-1">
              EXTRA CURRICULAR (ECA)
            </h5>
            <ul className="text-xs text-slate-650 space-y-1 list-disc pl-4">
              <li>Campus Ambassador, Interactive Cares</li>
              <li>Customer Service Executive, LEAD Academy (Volunteer)</li>
              <li>University Ambassador, ICT Olympiad Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Language Section for exact accuracy */}
        <div className="pt-1 text-xs">
          <span className="font-black text-[#0a0e1a]">Language: </span>
          <span className="text-slate-650">Bangla (Native), English (Conversational)</span>
        </div>
      </div>

      {/* Actual Download PDF Trigger Panel */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between p-5 bg-[#0a0e1a] rounded-2xl border border-white/5 gap-4">
        <div className="text-center md:text-left">
          <p className="text-xs font-bold text-white flex items-center gap-1.5 justify-center md:justify-start">
            <Award className="w-3.5 h-3.5 text-brand-gold" />
            Ready for instant recruiting?
          </p>
          <p className="text-[10px] text-brand-silver mt-0.5">
            Download this styled profile Straight as a formatted Text CV Document.
          </p>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-bright text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-lg select-none cursor-pointer"
        >
          {downloading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
              Formulating Segment...
            </>
          ) : downloadSuccess ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              Document Saved!
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Export {roleFocus.toUpperCase()} Resume
            </>
          )}
        </button>
      </div>
    </div>
  );
}
