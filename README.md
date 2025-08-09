# RakhiBond - Premium Raksha Bandhan Website

A fully functional, responsive Raksha Bandhan website with premium design and production-ready code. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Premium Design**: Authentic Indian festival aesthetics with saffron, maroon, and gold color palette
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Components**: 
  - Custom wishes generator with multiple tones
  - Live countdown timer to next Raksha Bandhan
  - Photo gallery with lightbox and upload functionality
  - Gift ideas with category filtering
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lazy loading, optimized images, and minimal bundle size
- **SEO Ready**: Complete meta tags, structured data, and social media optimization

## 🚀 Quick Start

### Deploy to Vercel (Recommended)
1. Click the "Deploy" button in the top right corner of the preview
2. Connect your GitHub account
3. Deploy with one click

### Deploy to Netlify
1. Download the code using the "Download Code" button
2. Drag and drop the folder to Netlify's deploy interface
3. Your site will be live in seconds

### Local Development
\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🎯 Customization

### Update Countdown Date
Edit the target date in `components/countdown-timer.tsx`:
\`\`\`typescript
const targetDate = new Date('2026-08-02T00:00:00+05:30').getTime()
\`\`\`

### Modify Color Palette
Update colors in `tailwind.config.ts`:
\`\`\`typescript
colors: {
  saffron: "#E87E04",
  maroon: "#8B2A2A", 
  gold: "#D4AF37",
  cream: "#FFF6EB",
}
\`\`\`

### Add New Wish Templates
Extend the wish templates in `components/wishes-generator.tsx`:
\`\`\`typescript
const wishTemplates = {
  // Add your custom templates here
}
\`\`\`

## 📱 Sections Overview

1. **Header/Navigation**: Sticky header with smooth scroll navigation
2. **Hero Section**: Eye-catching hero with call-to-action buttons
3. **About Raksha Bandhan**: Educational content about the festival
4. **Gift Ideas**: Filterable product grid with categories
5. **Wishes Generator**: Interactive tool for personalized messages
6. **Countdown Timer**: Live timer to next Raksha Bandhan
7. **Photo Gallery**: Masonry layout with upload functionality
8. **Testimonials**: Carousel of sibling stories
9. **Footer**: Newsletter signup and social links

## 🧪 Testing Checklist

- [ ] Responsive design on mobile, tablet, and desktop
- [ ] All interactive elements work (buttons, forms, carousel)
- [ ] Countdown timer displays correctly
- [ ] Wishes generator produces varied outputs
- [ ] Image gallery lightbox functions properly
- [ ] Navigation links scroll to correct sections
- [ ] Form submissions show appropriate feedback
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader compatibility
- [ ] Performance: images load efficiently
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

## 🎨 Design System

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Quotes**: Handwritten style for special elements

### Color Palette
- **Primary**: Saffron (#E87E04)
- **Secondary**: Maroon (#8B2A2A)
- **Accent**: Gold (#D4AF37)
- **Background**: Cream (#FFF6EB)

### Spacing & Layout
- Container max-width: 1200px
- Section padding: 80px vertical
- Grid gaps: 32px (desktop), 16px (mobile)

## 🔧 Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Animations**: CSS animations with reduced motion support

## 📈 Performance Features

- Image optimization with Next.js Image component
- Lazy loading for images and components
- Minimal JavaScript bundle
- CSS-only animations where possible
- Prefers-reduced-motion support

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
- Reduced motion preferences

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for siblings everywhere. Happy Raksha Bandhan! 🪢
