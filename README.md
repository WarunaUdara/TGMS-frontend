# TGMS Frontend

**Tour Guide Management System** - A production-ready Next.js 16 application with modern design and performance optimization.

## 🚀 Overview

TGMS Frontend is a modern, scalable web application built with Next.js 16, featuring a responsive design system with light/dark theme support and optimized for production deployment.

## ✨ Features

- **Next.js 16** - Latest framework with App Router and React 19
- **TypeScript** - Full type safety and enhanced developer experience
- **Tailwind CSS v4** - Utility-first CSS framework with custom design tokens
- **Montserrat Font** - Modern, professional typography via next/font
- **Theme System** - Automatic light/dark mode based on system preferences
- **Custom Color Palette** - 12-color scale using OKLCH color space
- **Production Ready** - Optimized build configuration and best practices

## 🎨 Design System

### Color Palette

The application uses a custom 12-color scale in OKLCH format for better perceptual uniformity and consistent color perception across different displays:

```css
--color-1: oklch(0.178 0.029 145.0);  /* Darkest - Dark theme backgrounds */
--color-2: oklch(0.209 0.041 145.0);
--color-3: oklch(0.272 0.076 145.0);
--color-4: oklch(0.322 0.103 145.0);
--color-5: oklch(0.367 0.125 145.0);
--color-6: oklch(0.417 0.145 145.0);
--color-7: oklch(0.484 0.164 145.0);  /* Secondary colors */
--color-8: oklch(0.571 0.181 145.0);  /* Accent colors */
--color-9: oklch(0.623 0.178 145.0);  /* Primary colors */
--color-10: oklch(0.676 0.167 145.0); /* Borders */
--color-11: oklch(0.843 0.107 145.0); /* Muted elements */
--color-12: oklch(0.919 0.063 145.0); /* Lightest - Light theme backgrounds */
```

### Semantic Color Variables

The color palette is mapped to semantic variables that automatically adapt to the active theme:

**Light Theme (Default):**
- `--background`: color-12 (lightest)
- `--foreground`: color-1 (darkest)
- `--primary`: color-9
- `--secondary`: color-7
- `--accent`: color-8
- `--muted`: color-11
- `--border`: color-10

**Dark Theme (System Preference):**
- `--background`: color-1 (darkest)
- `--foreground`: color-12 (lightest)
- `--primary`: color-9
- `--secondary`: color-7
- `--accent`: color-8
- `--muted`: color-2
- `--border`: color-3

### Usage in Components

Reference semantic variables in your CSS:

```css
/* Use semantic variables for automatic theme support */
.element {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

Or use Tailwind CSS with the variables:

```tsx
<div className="bg-(--background) text-(--foreground) border-(--border)">
  Content
</div>
```

### Theme Support

- **Default Theme**: Light mode
- **Dark Mode**: Automatically activated based on browser/system preferences
- **Smooth Transitions**: 300ms transition between theme switches

### Typography

- **Primary Font**: Montserrat (weights: 300, 400, 500, 600, 700, 800)
- **Font Loading**: Optimized with `next/font` and swap display strategy

## 📋 Prerequisites

- **Node.js**: 20.x or higher
- **Package Manager**: npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TGMS-frontend/tgms-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Development Features

- **Hot Module Replacement** - Instant updates on file changes
- **Fast Refresh** - Preserves component state during edits
- **TypeScript Support** - Real-time type checking
- **ESLint Integration** - Code quality enforcement

## 🏗️ Build

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun run build
```

Build artifacts are generated in the `.next` directory.

## 🚢 Production

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Ensure you run the build command before starting the production server.

## 🧪 Code Quality

Run ESLint:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```


## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development or use `.env` for production. See `.env.example` for available options:

```env
# Application Configuration
NEXT_PUBLIC_APP_NAME=TGMS
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_API_TIMEOUT=30000

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# Optional: Third-party Services
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
# NEXT_PUBLIC_SENTRY_DSN=
```

### Next.js Config

Configuration is available in `next.config.ts`. Modify as needed for your deployment requirements.

### Tailwind CSS Config

Custom theme configuration is located in `postcss.config.mjs`. The color system uses CSS variables defined in `app/globals.css` for seamless light/dark mode switching.


## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔐 Security

- TypeScript strict mode enabled
- ESLint security rules configured
- Environment variables for sensitive data
- Production build optimizations

## 📦 Dependencies

### Core

- **next**: ^16.0.3
- **react**: ^19.2.0
- **react-dom**: ^19.2.0

### Development

- **typescript**: ^5
- **tailwindcss**: ^4
- **eslint**: ^9
- **@tailwindcss/postcss**: ^4

## 🚀 Deployment

### Vercel (Recommended)

The easiest deployment option:

1. Push code to GitHub/GitLab/Bitbucket
2. Import project to [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and configures deployment

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- AWS (Amplify, EC2, ECS)
- Google Cloud Platform
- Azure
- DigitalOcean
- Railway
- Netlify

Refer to [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific guides.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js 16 Release Notes](https://nextjs.org/blog/next-16)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use ESLint rules (run `npm run lint`)
- Write meaningful commit messages
- Maintain consistent code formatting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

TGMS Development Team

- Malin Ruwanpathirana

- Waruna Udara 

- Yesith Sri Hansana

- Vidun Thamuditha

- Gehan Malshan

## 📧 Support

For issues and questions, please contact the development team or create an issue in the repository.

---

**Version**: 0.1.0  
**Last Updated**: 2025  
**Framework**: Next.js 16.0.3
