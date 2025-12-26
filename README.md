# 🚀 Vaibhav Shingne - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and achievements as a Software Engineering student specializing in AI/ML, full-stack development, and system programming.

[![Next.js](https://img.shields.io/badge/Next.js-14.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12.16-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## ✨ Features

- **🎨 Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **📱 Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Next.js for optimal loading speeds and SEO
- **🎭 Framer Motion Animations**: Engaging page transitions and element animations
- **✨ Particle Effects**: Interactive background with customizable particle system
- **🏆 Hall of Fame**: Live stats integration with CodeChef and LeetCode
- **📄 Resume Preview**: View and download resume directly from the site
- **🌐 SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 14** - React framework with SSG and SSR capabilities
- **React 18** - UI component library
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Additional Libraries
- **React Icons** - Icon library
- **React CountUp** - Animated counters
- **Swiper** - Touch slider
- **tsParticles** - Particle effects
- **Tailwind Scrollbar** - Custom scrollbar styling

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📂 Project Structure

```
modern-portfolio/
├── components/          # Reusable React components
│   ├── Avatar.jsx      # Avatar display component
│   ├── Bulb.jsx        # Decorative bulb element
│   ├── Circles.jsx     # Background circles
│   ├── Header.jsx      # Site header with logo
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Nav.jsx         # Navigation component
│   ├── ParticlesContainer.jsx  # Particle effects
│   ├── ProjectsBtn.jsx # Projects button
│   ├── ServiceSlider.jsx       # Skills slider
│   ├── Socials.jsx     # Social media links
│   ├── TopLeftImg.jsx  # Top left decoration
│   ├── Transition.jsx  # Page transitions
│   └── WorkSlider.jsx  # Projects slider
├── data/               # JSON data files
│   ├── badges.json     # LeetCode badges data
│   └── hallOfFameData.json  # CodeChef/LeetCode stats
├── pages/              # Next.js pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── halloffame/     # Hall of Fame page
│   ├── projects/       # Projects page
│   ├── skills/         # Skills page
│   ├── _app.jsx        # App wrapper
│   └── index.jsx       # Home page
├── public/             # Static assets
│   ├── badges/         # LeetCode badge images
│   ├── avatar.png      # Profile image
│   ├── resume.pdf      # Resume file
│   └── ...             # Other images and assets
├── scripts/            # Utility scripts
│   └── updateHallOfFameStats.js  # Stats updater
├── styles/             # Global styles
│   └── globals.css     # Global CSS
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── variants.js         # Animation variants
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm installed on your machine
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📊 Hall of Fame Stats

The portfolio includes live competitive programming stats from CodeChef and LeetCode.

### Update Stats Manually

```bash
node scripts/updateHallOfFameStats.js
```

This script:
- Fetches latest CodeChef stats (rating, ranks, stars)
- Retrieves LeetCode badges and achievements
- Updates `data/hallOfFameData.json`
- Preserves previous data if API calls fail


## 👨‍💻 Author

**Vaibhav Shingne**
- 🎓 B.Tech in Electronics Engineering, Walchand College of Engineering
- 💼 AIML Lead at WCE MLSC
- 🐧 Linux Kernel Fall 2025 Mentee

### Connect with Me

- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐱 GitHub: [github.com/yourusername](https://github.com/yourusername)
- 💻 CodeChef: 3★ (Rating: 1763)
- 🏆 LeetCode: Daily Coding Challenge Badges

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org/)

---

Made with ❤️ by Vaibhav Shingne
