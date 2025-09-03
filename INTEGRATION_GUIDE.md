# Spinny Integration Guide
## How to Add Spinny to a Page with Header

### Current Setup
Spinny is currently a **full-viewport application** that takes up 100% width and height of the browser window.

---

## 🎯 Integration Options

### Option 1: Fixed Header with Viewport Container
**Best for:** Sites with persistent navigation

```html
<body>
  <!-- Fixed Header (60px height example) -->
  <header style="position: fixed; top: 0; width: 100%; height: 60px; z-index: 1000;">
    <!-- Your navigation here -->
  </header>
  
  <!-- Spinny Container -->
  <div style="position: fixed; top: 60px; left: 0; right: 0; bottom: 0;">
    <div id="root"></div> <!-- Spinny mounts here -->
  </div>
</body>
```

**Required CSS:**
```css
/* Ensure Spinny fills its container */
.App {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Adjust helix scene if needed */
.helix-container {
  height: calc(100vh - 60px); /* Subtract header height */
}
```

---

### Option 2: CSS Grid Layout
**Best for:** Modern layouts with multiple sections

```css
.page-layout {
  display: grid;
  grid-template-rows: 60px 1fr; /* Header height, then remaining space */
  height: 100vh;
  overflow: hidden;
}

.header {
  grid-row: 1;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
}

.spinny-container {
  grid-row: 2;
  overflow: hidden;
  position: relative;
}
```

---

### Option 3: Flexbox Layout
**Best for:** Simple vertical stacking

```css
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  flex: 0 0 60px; /* Fixed height */
  z-index: 1000;
}

.spinny-wrapper {
  flex: 1; /* Takes remaining space */
  overflow: hidden;
  position: relative;
}
```

---

## 📦 React Integration

### If Your Site Already Uses React:

```jsx
import SpinnyApp from './Spinny/src/App';

function PageWithHeader() {
  return (
    <div className="page-layout">
      <header className="site-header">
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main className="spinny-container">
        <SpinnyApp />
      </main>
    </div>
  );
}
```

### Required Styles:
```css
.page-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header {
  height: 60px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 2rem;
}

.spinny-container {
  flex: 1;
  overflow: hidden;
  background: black;
}
```

---

## 🔧 Iframe Integration

### If Spinny is Deployed Separately:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; overflow: hidden; }
    
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 60px;
      background: #000;
      z-index: 1000;
    }
    
    .spinny-frame-container {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      bottom: 0;
    }
    
    #spinny-iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <header class="header">
    <!-- Your navigation -->
  </header>
  
  <div class="spinny-frame-container">
    <iframe 
      id="spinny-iframe" 
      src="https://your-spinny-deployment.com"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </div>
</body>
</html>
```

---

## 🎨 Styling Considerations

### Mobile Responsive Headers
```css
/* Desktop header */
.header {
  height: 60px;
}

/* Mobile header (typically smaller) */
@media (max-width: 768px) {
  .header {
    height: 50px;
  }
  
  .spinny-container {
    height: calc(100vh - 50px);
  }
}
```

### Transparent/Overlay Headers
```css
/* If header overlays Spinny */
.header-overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

/* No need to adjust Spinny container */
.spinny-fullscreen {
  position: fixed;
  top: 0; /* Starts at top, goes under header */
  left: 0;
  right: 0;
  bottom: 0;
}
```

---

## ⚡ Quick Setup Steps

1. **Choose your layout method** (Fixed, Grid, or Flexbox)
2. **Set header height** (typically 60-80px)
3. **Apply container styles** to constrain Spinny
4. **Test on different viewports** (mobile, tablet, desktop)
5. **Adjust mobile breakpoints** if needed

---

## 🔍 Important Notes

### Viewport Calculation
- Always subtract header height from viewport: `calc(100vh - {header-height})`
- Mobile browsers have dynamic viewport heights - test thoroughly

### Z-Index Stacking
- Header should have `z-index: 1000` or higher
- Spinny container doesn't need z-index unless overlapping

### Performance
- Fixed positioning performs better than absolute
- Avoid nested scrollable containers
- Use `will-change: transform` on animated elements

### Scroll Behavior
- Spinny handles its own scrolling internally
- Disable body scroll when Spinny is active: `body { overflow: hidden; }`
- Ensure mouse wheel events reach Spinny container

---

## 📱 Mobile Considerations

### iOS Safari
```css
/* Account for iOS Safari's dynamic toolbar */
.spinny-container {
  height: calc(100vh - 60px);
  height: calc(var(--vh, 1vh) * 100 - 60px);
}
```

```javascript
// Set custom viewport height property
const setVH = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);
```

### Android Chrome
- Address bar hides on scroll - account for viewport changes
- Use `position: fixed` for stable positioning

---

## 🚀 Deployment Integration

### Build for Integration
```bash
# Build Spinny as a module
npm run build

# The dist folder can be integrated into your main site
# Copy dist files to your main project's public folder
```

### Environment Variables
```env
# .env.production
VITE_BASE_URL=/spinny/  # If hosted in subfolder
VITE_API_URL=https://your-api.com
```

### Nginx Configuration (if needed)
```nginx
location /spinny {
  alias /var/www/spinny/dist;
  try_files $uri $uri/ /spinny/index.html;
}
```

---

## 💡 Tips & Tricks

1. **Header Shadow/Blur Effect**
   - Add `backdrop-filter: blur(10px)` for glass effect
   - Use semi-transparent backgrounds

2. **Smooth Transitions**
   - Add `transition: height 0.3s ease` when header changes size

3. **Loading State**
   - Show loading spinner while Spinny initializes
   - Fade in Spinny container when ready

4. **Fallback for Old Browsers**
   - Provide static image fallback if 3D transforms not supported
   - Check with: `CSS.supports('transform-style', 'preserve-3d')`

---

## 📞 Support

For integration help, check:
- README.md for basic setup
- TECHNICAL_ARCHITECTURE.md for detailed specs
- GitHub Issues for common problems

---

*Last Updated: 2025-09-03*
*Version: 3.1.0*