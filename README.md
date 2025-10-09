# Sonrisa Co-living Website

A beautiful, warm, and elegant website for Sonrisa co-living space in Paul do Mar, Madeira.

## 🎨 Design Features

- **Warm Madeira Palette**: Ocean blues, eucalyptus greens, terracotta, and sandy earth tones
- **Playful Elements**: Animated clouds, eucalyptus branch illustrations, decorative stars
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern Typography**: Elegant serif (Cormorant Garamond) + clean sans-serif (Inter) + handwritten accents (Dancing Script)

## 🌟 Design Inspiration

Based on the elegant style of Susafa and warm Mediterranean hospitality, adapted for:
- **Community focus**: Family-like atmosphere
- **Nature immersion**: Ocean, clouds, rainbows metaphor
- **Subtle playfulness**: Not too serious, but sophisticated

## 📁 Project Structure

```
sonrisa-coliving/
├── index.html              # Main landing page
├── rooms.html              # Detailed rooms page with galleries & calendars
├── css/
│   ├── styles.css          # Main styles and animations
│   └── rooms.css           # Rooms page specific styles
├── js/
│   ├── main.js             # Interactive functionality
│   ├── sections.js         # Landing page content
│   ├── rooms-data.js       # Room data (8 rooms with pricing)
│   ├── calendar.js         # Availability calendar component
│   └── rooms-page.js       # Rooms page rendering & galleries
├── images/                 # Place your images here
└── Documentation files (README, guides, etc.)
```

## 🚀 Local Development

1. Open `index.html` in your browser
2. No build process required - pure HTML/CSS/JS
3. Uses TailwindCSS via CDN for rapid styling

## 📦 Deploy to Netlify

### Option 1: Drag & Drop
1. Go to [Netlify](https://app.netlify.com)
2. Drag the `sonrisa-coliving` folder to the deploy zone
3. Done! Your site is live

### Option 2: Git Integration
1. Create a Git repository:
   ```bash
   cd sonrisa-coliving
   git init
   git add .
   git commit -m "Initial Sonrisa website"
   ```
2. Push to GitHub/GitLab
3. Connect to Netlify via Git
4. Auto-deploy on every push

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd sonrisa-coliving
netlify deploy --prod
```

## 🎯 Next Steps

### Essential Improvements:
1. **Add Real Photos**: Replace Unsplash placeholders with actual Sonrisa photos
2. **Booking Integration**: Connect to a booking system (e.g., Beds24, Hostfully, or custom)
3. **Video Hero**: Add actual video of Paul do Mar/the house
4. **Contact Form**: Integrate with email service (Formspree, Netlify Forms)
5. **Calendar System**: Implement live availability calendar

### Recommended Booking Systems:
- **Beds24**: Full property management + booking
- **Cloudbeds**: Co-living specific features
- **Google Calendar API**: Simple availability display
- **Calendly**: For consultation calls

### Analytics & SEO:
1. Add Google Analytics
2. Optimize meta tags for SEO
3. Add structured data (Schema.org)
4. Create sitemap.xml
5. Add Open Graph images

## 🎨 Color Palette

```css
Ocean Blue:    #4A9B9F
Eucalyptus:    #7FA99B
Terracotta:    #D8997A
Sand:          #E5D4C1
Earth:         #8B6F47
Green:         #5C8B6F
Cloud:         #F5F5F0
```

## 📝 Content Sections

### Landing Page (index.html):
1. **Hero**: Video background with tagline
2. **About**: Origin story and values
3. **Spaces**: Overview with link to rooms page
4. **Community**: Activities and family atmosphere
5. **Experiences**: What's included
6. **Location**: Paul do Mar highlights
7. **Booking**: Simple form (needs backend)
8. **Testimonials**: Social proof

### Rooms Page (rooms.html):
1. **8 Detailed Room Cards** with:
   - Photo galleries (3 images each, swipeable)
   - Full feature lists
   - Duration-based pricing (2+ weeks, 1+ month, 1.5+ months)
   - Inline availability calendar
   - Modal calendar view
   - Direct booking CTA

## 🔧 Customization

### Change Colors:
Edit the `tailwind.config` section in `index.html`

### Add Photos:
Replace Unsplash URLs in `js/sections.js`

### Modify Content:
Edit text directly in `js/sections.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

For questions about this website template, contact the developer.
For Sonrisa bookings, email: hello@sonrisa.com

---

**Built with ❤️ for Sonrisa Co-living**
