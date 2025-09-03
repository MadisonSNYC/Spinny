# Spinny - 3D Helix Portfolio Showcase

A stunning 3D DNA helix visualization for showcasing portfolio projects, built with React and CSS 3D transforms. Features smooth scrolling, visual effects, and responsive design.

## Features

### Core Visualization
- **3D DNA Helix Layout** - Projects arranged in a beautiful double-helix formation
- **Smooth Scrolling** - Inertia-based scrolling with spring physics
- **Face-Camera Cards** - Cards automatically rotate to face the viewer
- **Infinite Loop** - Seamless card repetition for endless scrolling
- **Performance Optimized** - 60+ FPS with position caching and memoization

### Visual Effects
- **Cinematic Colors** - Enhanced color intensification
- **Screen Glow** - Cyan glow effects for futuristic feel
- **Chromatic Aberration** - RGB separation for depth
- **Monitor Style** - Retro CRT aesthetic
- **RGB Edge** - Chromatic card edges
- **Rich Content** - Support for videos and images
- **Hover Effects** - Interactive card animations
- **Video Preview** - Auto-play videos on hover

### Mobile Responsive
- **Adaptive Scaling** - Optimized for all screen sizes
- **Touch Support** - Smooth touch interactions
- **Mobile Breakpoints** - Specific optimizations for mobile devices
  - Desktop: Full scale
  - Tablet: 0.7x scale
  - Mobile: 0.5x scale
  - Mobile Portrait: 0.4x scale

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MadisonSNYC/Spinny.git
cd Spinny

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── EnhancedHelixProjectsShowcase.jsx  # Main helix component
│   └── effects/                           # Visual effect modules
├── contexts/
│   └── HelixContext.jsx                  # State management
├── hooks/
│   ├── useHelixState.js                  # Core state hook
│   ├── useHelixConfig.js                 # Configuration hook
│   └── useInertiaScroll.js              # Physics-based scrolling
├── utils/
│   ├── helixPositionCache.js            # Position caching
│   └── performanceMonitor.js            # FPS monitoring
├── data/
│   └── projects.js                      # Sample project data
└── styles/
    └── helix-safe.css                   # Core helix styles
```

## Configuration

The helix can be configured through the `HelixContext`:

```javascript
const defaultConfig = {
  radius: 400,              // Helix radius
  verticalSpan: 180,        // Vertical spacing
  scrollSensitivity: 0.5,   // Scroll speed
  showEveryNth: 4,          // Show every 4th card
  autoRotate: false,        // Auto rotation
  rotationSpeed: 0.001      // Rotation velocity
}
```

## Visual Effects

Effects are enabled by default and include:

- **cinematicColors** - Enhanced color saturation
- **screenGlow** - Cyan glow overlays
- **chromaticAberration** - RGB color separation
- **monitorStyle** - CRT monitor effect
- **rgbEdge** - Chromatic card edges
- **richCardContent** - Media-rich cards
- **cardHoverEffects** - Interactive hover states
- **videoPlayOnHover** - Auto-play video previews
- **outwardTurn** - Scroll-based card rotation

## Performance

### Optimization Features
- Position caching with 85%+ hit rate
- React.memo for component optimization
- GPU-accelerated CSS transforms
- Viewport culling for off-screen cards
- Lazy loading for media content

### Performance Metrics
- **FPS**: 60+ during scroll
- **Load Time**: <400ms
- **Memory**: <80MB
- **Cache Hit Rate**: 85%+

## Browser Support

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile browsers (iOS/Android) ✅

## Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build

# Code Quality
npm run lint        # Run ESLint
npm run format      # Format with Prettier
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **CSS 3D Transforms** - Hardware-accelerated 3D
- **Context API** - State management

## License

MIT License - see LICENSE file for details

## Credits

Created by Madison Raye Sutton

---

⚡ Powered by React + Vite