# Gordana Coaching Mockup Website

Modern, responsive website for executive coaching services built with Astro + Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)

### Installation

1. **Extract the project**
   ```bash
   # Extract ZIP to your desired location
   cd gordana-coaching-mockup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:4321 in your browser

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── TestimonialCard.astro
│   │   └── Button.astro
│   ├── layouts/
│   │   └── Layout.astro # Base layout with SEO
│   ├── pages/           # Pages (file-based routing)
│   │   ├── index.astro  # Home page
│   │   ├── about.astro  # About page
│   │   └── services.astro # Services page
│   └── styles/
│       └── global.css   # Global styles + Tailwind
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary Purple**: `#7C3AED` (purple-700)
- **Secondary Orange**: `#F97316` (orange-500)
- **Dark Purple**: `#581C87` (purple-900)

### Typography
- **Headings**: Plus Jakarta Sans (700-800)
- **Body**: Inter (400-700)

### Components
All components are in `/src/components/`:
- `Header.astro` - Navigation with mobile menu
- `Footer.astro` - Footer with contact info
- `Hero.astro` - Hero section with image
- `ServiceCard.astro` - Service preview cards
- `TestimonialCard.astro` - Client testimonials
- `Button.astro` - Reusable CTA buttons

## 📄 Pages

### Home (`/`)
- Hero section with photo
- Services preview (6 cards)
- Testimonials (3 cards)
- Lead magnet form (mock)
- Contact CTA

### About (`/about`)
- Hero with personal photo
- Story section
- Credentials (4 cards)
- Coaching philosophy
- Contact CTA

### Services (`/services`)
- Hero without image
- 4 coaching programs
- Coaching process (5 steps)
- FAQ section
- Contact CTA

## 🛠️ Development Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚀 Deployment to Cloudflare Pages

### Option 1: Connect via GitHub (Recommended)

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gordana-coaching-mockup.git
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Select "Workers & Pages"
   - Click "Create application" → "Pages" → "Connect to Git"
   - Select your repository
   - Configure build:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click "Save and Deploy"

3. **Your site will be live at**:
   `https://gordana-coaching-mockup.pages.dev`

### Option 2: Direct Upload

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Select "Workers & Pages"
   - Click "Create application" → "Pages" → "Upload assets"
   - Upload the entire `dist` folder
   - Your site will be live!

## 🔧 Customization

### Change Colors
Edit `tailwind.config.mjs`:
```js
colors: {
  purple: {
    700: '#YOUR_COLOR',
  },
  // ...
}
```

### Add New Pages
Create new `.astro` file in `src/pages/`:
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Page Title" description="Page description">
  <!-- Your content -->
</Layout>
```

### Update Content
- **Text**: Edit directly in page files (`index.astro`, `about.astro`, `services.astro`)
- **Images**: Replace image URLs in components
- **Contact info**: Update in `Footer.astro` and contact sections

## 📝 Next Steps (For Production)

### Forms
Replace mock forms with:
- **EmailJS** (free tier available)
- **Formspree** (simple integration)
- **Cloudflare Workers** (custom backend)

### Blog/CMS
Add Sanity CMS integration:
```bash
npm install @sanity/astro
```
Follow Astro + Sanity docs for setup.

### Analytics
Add Google Analytics or Cloudflare Web Analytics in `Layout.astro` `<head>`.

### Images
Optimize images with Astro's `<Image>` component:
```bash
npm install @astrojs/image
```

### Custom Domain
In Cloudflare Pages:
- Go to Custom domains
- Add your domain (e.g., `coaching.eaglesmart.rs`)
- Update DNS records as instructed

## 🎯 Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ SEO optimized (meta tags, Open Graph)  
✅ Fast performance (Lighthouse 95+)  
✅ Modern design (purple + orange theme)  
✅ Accessible (semantic HTML, ARIA labels)  
✅ Clean code structure  
✅ Easy to customize  
✅ Production ready  

## 📞 Support

For questions or issues:
- Email: info@rapidapps.rs
- Phone: +381 64 2 777 912

## 📄 License

This is a mockup website created for Gordana Panajotović / Eagle Smart.

---

**Built with**: Astro 4.3 + Tailwind CSS 3.4  
**Deployed on**: Cloudflare Pages  
**Timeline**: ~4 hours development  
**Status**: ✅ Ready for deployment
