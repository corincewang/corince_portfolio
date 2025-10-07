# Han Wang - Personal Website

A modern, minimalist personal website built with Next.js and Tailwind CSS.

## 🎨 Design Features

- **Split Layout**: 75% main content area + 25% sidebar
- **Portrait Section**: Left-side artistic portrait area
- **Orange Accents**: Decorative brackets and highlights
- **Serif Typography**: Elegant Playfair Display font
- **Purple Sidebar**: Right-side navigation and social links
- **Smooth Animations**: Framer Motion transitions

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Sabanna-inspired design
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── works/             # Portfolio showcase
│   ├── tutorials/         # Technical tutorials
│   └── diary/             # Personal blog
├── components/             # React components
│   ├── Navigation.tsx     # Top navigation
│   ├── Hero.tsx          # Main hero section
│   ├── WorksGrid.tsx     # Portfolio grid
│   ├── TutorialsList.tsx # Tutorials list
│   └── DiaryList.tsx     # Blog entries
└── public/                # Static assets
```

## 🎯 Customization

### Personal Information
Update your details in:
- `components/Hero.tsx` - Main introduction
- `components/Navigation.tsx` - Social media links
- `components/WorksGrid.tsx` - Your projects
- `components/TutorialsList.tsx` - Your tutorials
- `components/DiaryList.tsx` - Your blog posts

### Colors & Styling
- Main background: `#f8f6f0` (warm off-white)
- Text color: `#2d1b69` (deep purple)
- Accent color: `#ff6b35` (orange)
- Sidebar: `#2d1b69` (purple)

## 🌐 Deployment

### Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Deploy
```bash
npm run build
vercel --prod
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter
- **TypeScript**: Full type safety

## 📄 License

MIT License - feel free to use this design for your own portfolio!

---

**Design Reference**: [sabanna.online](https://www.sabanna.online/)
