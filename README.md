# Omar Hasnain Mahmud — Product Manager & Operations Portfolio

A high-fidelity, interactive personal portfolio and professional CV platform tailored for **Omar Hasnain Mahmud**, showcasing his background in VC-backed SaaS products, EdTech operations, and user experience (UX) optimization.

This application acts as a digital headquarters featuring an interactive resume builder (tailored by domain focus), live case study deep dives, fully responsive layouts, academic research listings, and a direct client-facing contact center.

---

## 🚀 Key Platform Features

- **Interactive Tailored CV Engine**: Switch instantly between specialized resumes matching distinct recruiter personas:
  - **Product Manager Core Focus**
  - **SaaS & Enterprise Operations**
  - **EdTech & Operations Focus**
- **Surgical PDF Resume Export**: Built on top of the `jspdf` core engine to dynamically render clean, perfectly aligned single/multi-page structural standard text PDF resumes on command.
- **Visual Grid Case Studies**: Live deep-dives with modals displaying problem scopes, action loops, and clear metric results of key professional projects (e.g., Gustav SaaS PMS configuration, LMS Hook rate optimization).
- **Academic Research Portal**: Seamless showcase of Omar's IEEE Conference Publication on predictive UI/UX learning curves in student platforms.
- **Secure Contact Dispatch**: Integrated with **Web3Forms** for client-side forms delivery directly to Omar's mailbox with interactive custom client fallbacks.
- **Premium Astro-Dark Design**: High-contrast slate typography paired with soft glows, smooth motion animations (via `motion/react`), clean layout bounds, and custom grid accents.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (For ultra-fast HMR and building bundles)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Direct modern utility declarations)
- **Icons**: [Lucide React](https://lucide.dev/) (Consistent, clean stroke icons)
- **Animations**: [Motion/React](https://motion.dev/) (For rich visual transitions, modals, and dynamic filters)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) (Vector-level coordinate plotting for standard resume page output)

---

## 📬 Web3Forms Setup Guide

### Do you need an account?
To make the Contact Form fully functional and receive messages from visitors straight to your inbox:
1. **Yes**, you need to get a free Web3Forms access key.
2. Go to [Web3Forms](https://web3forms.com) and enter your active email address.
3. Web3Forms will instantly email you a unique **Access Key** (e.g., `87cf91c0-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).
4. **Where to place it?**
   - Create a file named `.env` in the root folder of this repository (or configure your host provider e.g. Netlify/Vercel secrets).
   - Add the following environment variable declaration:
     ```env
     VITE_WEB3FORMS_ACCESS_KEY=your_key_here
     ```
   - Restart the application. The form will now securely deliver messages straight to your email inbox!

---

## 📦 Project Setup and Local Installations

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your computer.

### 2. Live Installation
Clone this repository to your local path and run:

```bash
# Clone the repository
git clone https://github.com/omarhasnain/omar-hasnain-mahmud-portfolio.git

# Enter workspace folder
cd omar-portfolio

# Install required node modules
npm install
```

### 3. Run Development Server
Run the local dev command to launch the hot-reload preview:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified by the terminal) to view the workspace live.

### 4. Direct Production Compilations
Compile and optimize bundle chunking for standalone servers or static host delivery:

```bash
npm run build
```

The output build will be gathered cleanly in the `/dist` directory. Ready for any modern static hosting service of your choice!

---

## 🗄️ Standard Project File Tree

```text
├── assets/                  # Visual items & portrait photographs
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Scrolling header navigation (Fixed Solid dark backgrounds)
│   │   ├── ResumeViewer.tsx # Interactive CV tailoring & jsPDF vector rendering
│   │   ├── ContactForm.tsx  # Message client & Web3Forms dispatcher
│   │   ├── InteractiveToolkit.tsx
│   │   ├── CaseStudyModal.tsx
│   │   └── AchievementsGrid.tsx
│   ├── App.tsx              # Application layout root with scroll-guards
│   ├── data.ts              # Central single-source data file
│   ├── types.ts             # TypeScript interface definitions
│   ├── main.tsx             # Entry hook
│   └── index.css            # Tailwind declarations & global fonts
├── package.json             # Module requirements configuration
└── README.md                # This manual
```

---

## 🤝 Contribution Guidelines
If you are planning to add custom sections or customize resume formats further, please feel free to fork the repository, make responsive test commits, and open a Pull Request.

**Contact Core**: Reach out directly at [ohasnainmahmud@gmail.com](mailto:ohasnainmahmud@gmail.com).
