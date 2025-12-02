# DesignMate - AI-Powered Interior Design Platform

A demo web application for DesignMate, an AI-powered interior design platform that helps students and renters design their spaces quickly and affordably while connecting them with aspiring interior designers.

## Features

- **Landing Page**: Hero section with value proposition and key benefits
- **Room Input**: Upload photos or enter room dimensions
- **Style Questionnaire**: 5-question style quiz to understand preferences
- **Layout Generation**: AI-generated layout suggestions with visual mockups
- **Shopping List**: Curated product list organized by category
- **Designer Marketplace**: Browse and filter beginner/intermediate designers

## Tech Stack

- React 18
- Tailwind CSS
- Vite
- Lucide React (icons)
- React Context API (state management)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
designmate/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navigation.jsx
│   │   └── ProgressIndicator.jsx
│   ├── pages/           # Page components
│   │   ├── LandingPage.jsx
│   │   ├── RoomInputPage.jsx
│   │   ├── StyleQuestionnairePage.jsx
│   │   ├── LayoutGenerationPage.jsx
│   │   ├── ShoppingListPage.jsx
│   │   └── DesignerMarketplacePage.jsx
│   ├── data/            # Mock data
│   │   └── mockData.js
│   ├── utils/           # Utilities and context
│   │   └── AppContext.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── package.json
```

## User Flow

1. User lands on homepage and clicks "Start Designing"
2. User enters room information (dimensions or photo)
3. User completes style questionnaire
4. System generates 2-3 layout suggestions
5. User selects a layout
6. User views curated shopping list
7. Optional: User browses designer marketplace

## Demo Notes

- All data is mock data for demonstration purposes
- No backend integration required
- Images use Unsplash placeholders
- Shopping list export generates a text file

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

