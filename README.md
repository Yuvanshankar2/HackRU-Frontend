# HackRU Frontend

A modern React application for HackRU - Rutgers University's premier hackathon event.

## Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18** - Latest React with modern features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Radix UI** - Accessible component primitives
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in dark/light theme support
- 🚀 **Production Ready** - Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Yuvanshankar2/HackRU-Frontend.git
cd HackRU-Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with zero configuration needed

The project includes a `vercel.json` configuration file for optimal deployment settings.

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains the production build
# Upload the contents to your hosting provider
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Main header component
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Footer.tsx      # Footer component
│   └── ...
├── styles/             # Global styles
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Component primitives
- **Lucide React** - Icons
- **React Hook Form** - Form handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
