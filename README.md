# 🌟 Deepti's Portfolio Website

A stunning, modern personal portfolio website for Deepti, an AI & ML Engineering student, built with React, Vite, TailwindCSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, futuristic design with purple/dark blue gradient theme
- 💎 **Glassmorphism Effects** - Beautiful glass-morphic cards and components
- 🌊 **Smooth Animations** - Framer Motion powered scroll animations and interactions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, laptop, and ultra-wide screens
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🔥 **Interactive Elements** - Hover effects, parallax scrolling, and animated components

## 🎨 Design Highlights

- **Color Palette:**
  - Primary: `#6C63FF` (Purple)
  - Secondary: `#A27BFF` (Light Purple)
  - Accent: `#00E4FF` (Cyan)
  - Background: `#0B0F1A` (Deep Dark)
  - Surface: `#1E1E2E` (Dark Navy)

- **Typography:**
  - Headings: Poppins (600-800 weight)
  - Body: Inter (400-600 weight)

- **Effects:**
  - Glassmorphism cards with backdrop blur
  - Neon glow on buttons and hover states
  - Smooth fade-in animations on scroll
  - Parallax background elements
  - Floating animations

## 📂 Project Structure

```
deepti-portfolio/
├── public/
│   └── deepti_resume.pdf          # Resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar with smooth scroll
│   │   └── Footer.jsx              # Footer with social links
│   ├── sections/
│   │   ├── Hero.jsx                # Hero section with animated background
│   │   ├── About.jsx               # About section
│   │   ├── Skills.jsx              # Skills with categorized badges
│   │   ├── Projects.jsx            # Project cards with hover effects
│   │   ├── Certifications.jsx     # Certification cards
│   │   └── Contact.jsx             # Contact form and info
│   ├── data/
│   │   └── portfolio.js            # Centralized portfolio data
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles and utilities
├── index.html                      # HTML entry point
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd deepti_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment to Vercel

### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch will trigger a new deployment
   - Pull requests will get preview deployments

### Method 3: Deploy via Vercel Dashboard

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to [vercel.com](https://vercel.com) and drag & drop the `dist` folder

## 🎯 Customization Guide

### Update Personal Information

Edit `src/data/portfolio.js` to update:
- Personal details (name, email, phone, location)
- Social media links
- About section content
- Skills
- Projects
- Certifications

### Change Color Theme

Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  primary: '#6C63FF',    // Change to your preferred primary color
  secondary: '#A27BFF',  // Change to your preferred secondary color
  accent: '#00E4FF',     // Change to your preferred accent color
}
```

### Add New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Integrate Contact Form

The contact form is currently set up with a simulated submission. To make it functional:

**Option 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: FormSubmit**
- Update the form action to: `https://formsubmit.co/your@email.com`

**Option 3: Netlify Forms** (if deploying to Netlify)
- Add `netlify` attribute to the form tag

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM renderer
- `vite` - Build tool and dev server

### Styling
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - PostCSS plugin
- `postcss` - CSS processor

### Animations
- `framer-motion` - Animation library

### Icons
- `lucide-react` - Icon library
- `react-icons` - Icon library

## 🎨 Features Breakdown

### Navbar
- Sticky positioning with glassmorphism effect
- Active section highlighting
- Smooth scroll navigation
- Responsive mobile hamburger menu

### Hero Section
- Animated gradient background with floating shapes
- Fade-up text animations
- Social media links with glow effects
- CTA buttons with hover animations
- Scroll indicator

### About Section
- Scroll-triggered fade-in animations
- Glassmorphism card design
- Highlight cards with icons

### Skills Section
- Categorized skill badges
- Color-coded categories
- Stagger animations on scroll
- Hover glow effects

### Projects Section
- Grid layout (responsive)
- Glassmorphism project cards
- Hover lift and scale effects
- Technology tags
- GitHub links

### Certifications Section
- Animated certificate cards
- Rotating icons
- Platform badges

### Contact Section
- Contact information cards
- Working form with validation
- Animated inputs with focus states
- Submission status feedback

### Footer
- Social media icons with hover effects
- Quick navigation links
- Animated heart icon
- Copyright notice

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues

Make sure TailwindCSS is properly configured:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Deepti**
- GitHub: [@deepti0728](https://github.com/deepti0728)
- LinkedIn: [Deepti](https://www.linkedin.com/in/deepti-3b4a582b9/)
- Email: d33pti2807@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Lucide React and React Icons
- Animations powered by Framer Motion
- Built with React and Vite

---

Made with ❤️ and React
