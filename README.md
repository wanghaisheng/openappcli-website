<h3 align="center">OpenAppCLI Website</h3>

<p align="center">
  🤖 Universal Application Automation Platform with AI Agent Integration
  <br/>
  <br/>
  <a href="https://openappcli.borninsea.com/" target="_blank">View Live Website</a>
  •
  <a href="https://github.com/wanghaisheng/openappcli-website" target="_blank">GitHub Repository</a>
</p>

## 🚀 About OpenAppCLI

OpenAppCLI is a universal application automation platform that enables AI Agents to directly control any application through the MCP (Model Context Protocol) protocol. This website showcases the platform's capabilities, features, and integration possibilities.

### Key Features

- 🌐 **Universal Platform Support** - Web, Desktop, Mobile, and Game applications
- 🤖 **AI Agent Integration** - Direct MCP protocol integration for seamless AI automation
- 🎯 **Zero-Code Automation** - Visual interface for creating automation workflows
- 🔧 **Developer-Friendly** - RESTful APIs and SDK for custom integrations
- 🌍 **Multi-Language Support** - English and Chinese localization

## 🛠️ Technology Stack

- **Framework**: Astro v6 with i18n support
- **Styling**: LESS with CSS custom properties
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **CMS**: Decap CMS for content management

## 📁 Project Structure

```
.
├── public/
│   ├── admin/                 # Decap CMS configuration
│   ├── assets/                # Static assets (images, icons)
│   └── favicons/              # Website favicons
├── src/
│   ├── components/            # Reusable Astro components
│   │   ├── BlogPreview/       # Blog post preview cards
│   │   ├── CTA/              # Call-to-action sections
│   │   ├── Features/         # Feature showcase
│   │   ├── Footer/           # Website footer
│   │   ├── Header/           # Navigation header
│   │   ├── Hero/             # Hero sections
│   │   └── Testimonials/     # Customer testimonials
│   ├── content/              # Blog content collections
│   ├── data/                 # Site-wide data and configuration
│   ├── js/                   # Utility functions and i18n helpers
│   ├── layouts/              # Page layouts
│   ├── locales/              # Translation files (en, zh-CN)
│   ├── pages/                # Astro page files
│   └── styles/               # CSS/LESS stylesheets
├── astro.config.mjs          # Astro configuration
└── package.json              # Dependencies and scripts
```

## 🌐 Internationalization

The website supports multiple languages with Astro's built-in i18n routing:

- **English** (default): Root URLs (`/`, `/features`, etc.)
- **Chinese** (zh-CN): Prefixed URLs (`/zh-CN/`, `/zh-CN/features`, etc.)

### Adding New Languages

1. Add locale to `astro.config.mjs`
2. Create translation files in `src/locales/{locale}/`
3. Add page files in `src/pages/{locale}/`
4. Update route translations in `src/config/routeTranslations.ts`

## 🎨 Design System

### Color Palette

```css
--primary: #00d4aa;        /* Brand green */
--primary-600: #00b894;    /* Dark green for headings */
--secondary: #ffd93d;      /* Accent yellow */
--bodyTextColor: #353535;   /* Main text color */
--gray-50: #f9fafb;        /* Light backgrounds */
--gray-800: #1f2937;       /* Dark backgrounds */
--dark: #1a1a1a;           /* Footer background */
```

### Typography

- **Headings**: Custom font weights with brand colors
- **Body**: System fonts for optimal readability
- **Code**: Monospace font for technical content

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wanghaisheng/openappcli-website.git
cd openappcli-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4322`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4322` |
| `npm run build` | Build production version to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run config-i18n` | Configure i18n setup interactively |

## 📝 Content Management

The website uses Decap CMS for content management. To access the admin interface:

1. Deploy the website
2. Navigate to `/admin` on your live site
3. Log in with your credentials

### Blog Management

Blog posts are managed through:
- **Decap CMS**: For non-technical users
- **Markdown files**: For developers in `src/content/blog/`

Posts support:
- Multi-language content with `mappingKey`
- Featured post functionality
- Rich media support
- SEO optimization

## 🎯 Key Components

### Hero Section
- Eye-catching animations
- Call-to-action buttons
- Responsive design
- Multi-language support

### Features Showcase
- Icon-based feature cards
- Hover effects and animations
- Grid layout for scalability
- Detailed descriptions

### Testimonials
- Customer reviews and quotes
- Profile images and ratings
- Responsive card layout
- Social proof elements

### Blog System
- Content collections for blog posts
- Category and tag support
- SEO-friendly URLs
- Multi-language blog content

## 🌍 SEO & Performance

### Search Optimization
- Automatic sitemap generation
- Meta tags and Open Graph support
- Structured data markup
- Multi-language hreflang tags

### Performance
- Optimized image loading
- Minimal JavaScript footprint
- CSS-in-JS for better caching
- Lighthouse optimized scoring

## 🚀 Deployment

### GitHub Pages

1. Push changes to the `main` branch
2. Enable GitHub Pages in repository settings
3. Select source as "GitHub Actions" or "Deploy from a branch"
4. Configure custom domain if needed

### Custom Domain

1. Add a `CNAME` file to `public/`:
```
your-domain.com
```

2. Update DNS settings with your domain provider

3. Configure GitHub Pages settings

## 🤝 Contributing

We welcome contributions to the OpenAppCLI website! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Ensure responsive design for all components
- Test multi-language functionality
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Website**: https://openappcli.borninsea.com/
- **GitHub Repository**: https://github.com/wanghaisheng/openappcli-website
- **OpenAppCLI Platform**: https://openappcli.com
- **Documentation**: https://docs.openappcli.com

## 💬 Support

For support or questions:

- 📧 Email: team@openappcli.com
- 💬 GitHub Issues: [Create an issue](https://github.com/wanghaisheng/openappcli-website/issues)
- 🐦 Twitter: [@OpenAppCLI](https://twitter.com/OpenAppCLI)

---

**Built with ❤️ for the OpenAppCLI community**
