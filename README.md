# 🌾 UNiAIgric - AI-Powered Agricultural Assistant

> **Democratizing Agricultural Intelligence for Small Farmers in Maharashtra**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)

## 🎯 Vision

UNiAIgric is an intelligent farming assistant that leverages AI to analyze soil reports and provide personalized crop recommendations, planting schedules, and market strategies. Our mission is to democratize agricultural expertise for small farmers in Maharashtra, India.

## 🚀 Features

### 🧠 **AI-Powered Crop Analysis**
- **3-Layer Filtering System**: Soil → Climate → Water analysis
- **Personalized Recommendations**: Based on your specific soil conditions
- **Planting Date Integration**: Optimized timing for maximum yield
- **25+ Regional Crops**: Specialized for Maharashtra agriculture

### 📅 **Smart Task Calendar**
- **Color-Coded Intensity**: Visual task difficulty indicators
- **Emoji-Based Tasks**: 🌱 Planting, 💧 Watering, 🌾 Harvesting
- **Daily Action Plans**: Step-by-step farming guidance
- **Interactive Interface**: Hover for detailed task information

### 💬 **AI Chatbot Assistant**
- **Context-Aware Q&A**: Ask questions about your farm analysis
- **Real-Time Responses**: Instant agricultural expertise
- **Personalized Advice**: Based on your specific soil and climate data

### 📊 **Market Intelligence**
- **Price Trend Analysis**: Current market demand and predictions
- **Selling Strategies**: Optimal timing and channels
- **Risk Mitigation**: Weather, price, and storage risks
- **Government Schemes**: Available subsidies and support

### 🔐 **User Authentication**
- **Secure Login/Signup**: Powered by Supabase
- **Data Persistence**: Your analysis history saved
- **Multi-Device Sync**: Access your data anywhere

## 🏗️ Architecture

### Frontend (React + TypeScript)
```
src/
├── App.tsx                 # Main application with auth flow
├── components/
│   ├── screens/           # Core application screens
│   │   ├── login-screen.tsx
│   │   ├── landing-screen.tsx
│   │   ├── crop-results-screen.tsx
│   │   ├── task-calendar-screen.tsx
│   │   └── selling-strategy-screen.tsx
│   └── ui/                # Reusable components
│       ├── task-calendar.tsx
│       ├── date-selector.tsx
│       └── file-upload-card.tsx
├── lib/
│   ├── analysis-context.tsx
│   ├── supabaseClient.ts
│   └── types.ts
```

### Backend (Node.js + Express)
```
server/
└── index.ts               # API server
    ├── POST /api/crop-predict    # Main analysis engine
    └── POST /api/chatbot         # Q&A system
```

### Database (Supabase)
- User management
- Analysis history
- Crop predictions storage

## 🤖 AI Integration

### Google Gemini API with RAG (Retrieval-Augmented Generation)
- **Soil Analysis**: Extracts key parameters from PDF/image reports
- **Crop Filtering**: Multi-layer recommendation system
- **Market Strategy**: Personalized selling and risk management plans
- **Chatbot**: Context-aware agricultural Q&A with RAG

### RAG Implementation for Mixed Output
We use **Retrieval-Augmented Generation (RAG)** to provide accurate, context-rich agricultural advice:

```typescript
// RAG Pipeline Structure
1. Knowledge Base Retrieval:
   - Agricultural database (crop requirements, soil types)
   - Regional climate data for Maharashtra
   - Historical market trends and prices
   - Government agricultural schemes

2. Context Retrieval:
   - User's specific soil analysis results
   - Location-based climate information
   - Planting date and seasonal considerations
   - Previous analysis history

3. Augmented Generation:
   - Combines retrieved knowledge with user context
   - Generates personalized recommendations
   - Provides data-driven market strategies
   - Ensures factual accuracy with real agricultural data
```

### Analysis Pipeline
```typescript
1. File Upload (PDF/Image) → OCR Processing
2. Soil Data Extraction → RAG Knowledge Retrieval
3. 3-Layer Filtering with RAG:
   - Layer 1: Soil Compatibility (40% weight)
   - Layer 2: Climate Suitability (35% weight)  
   - Layer 3: Water Requirements (25% weight)
4. RAG-Enhanced Recommendations → Calendar Generation
5. Market Strategy with RAG → Chatbot Integration
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Framer Motion** for animations
- **TailwindCSS** for styling
- **Lucide React** for icons
- **Supabase** for authentication

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Google Gemini API** for AI processing
- **Supabase** for database operations

### Development
- **Vite** for fast development
- **ESLint + Prettier** for code quality
- **PowerShell** scripts for Windows

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/uniAIgric.git
cd uniAIgric
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:

```env
# Frontend Variables
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_api_key

# Backend Variables  
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. **Start Development Servers**

Frontend (Vite Dev Server):
```bash
npm run dev
```

Backend (API Server):
```bash
npm run server
```

5. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 📱 Usage Guide

### 1. **Get Started**
- Sign up/login with your email
- Complete your farmer profile

### 2. **Analyze Your Farm**
- Upload your soil report (PDF or image)
- Select your farm location
- Choose your planting date
- Click "Analyze Farm"

### 3. **Review Recommendations**
- View AI-generated crop recommendations
- Check suitability scores and explanations
- Explore detailed analysis breakdown

### 4. **Plan Your Calendar**
- Navigate to the task calendar
- View daily farming activities
- Track task intensity and requirements

### 5. **Get Expert Advice**
- Use the chatbot for specific questions
- Ask about crop care, pest control, etc.
- Receive personalized responses

### 6. **Market Strategy**
- Review market insights and price trends
- Plan optimal selling strategies
- Access government scheme information

## 🌍 Impact & Social Value

### Problem Statement
- **70% of Indian farmers** are smallholders with limited access to agricultural expertise
- **Soil testing costs** $50-100 per analysis (prohibitive for small farmers)
- **Market information** is fragmented and often outdated
- **Climate change** increases farming complexity

### Our Solution
- **Free AI Analysis**: Democratizes access to agricultural expertise
- **Personalized Recommendations**: Tailored to specific soil and climate conditions
- **Real-Time Insights**: Up-to-date market and weather information
- **Sustainable Practices**: Optimized resource usage for better yields

### Expected Impact
- **20-30% increase** in crop yields through data-driven decisions
- **50% reduction** in water usage through optimized irrigation
- **15% improvement** in farmer income through better market timing
- **Sustainable agriculture** promotion through eco-friendly practices

## 🏆 Hackathon Highlights

### Technical Innovation
- **Full-Stack TypeScript**: Type-safe development from frontend to backend
- **AI Integration**: Multi-model approach with OCR, NLP, and predictive analytics
- **Real-Time Processing**: Instant analysis and recommendations
- **Progressive Web App**: Works offline for rural areas with limited connectivity

### Social Impact
- **Empowers Small Farmers**: Enterprise-level tools accessible to everyone
- **Bridges Digital Divide**: Simple interface for non-technical users
- **Economic Empowerment**: Better market access and price optimization
- **Environmental Sustainability**: Resource optimization and waste reduction

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini API** for powering our AI analysis
- **Supabase** for authentication and database services
- **Maharashtra Agricultural Department** for crop data and guidelines
- **Small Farmers Community** for feedback and validation

## 📞 Contact

- **Project Lead**: [Your Name]
- **Email**: [your.email@example.com]
- **Hackathon**: [Hackathon Name]
- **Date**: January 2026

---

**🌾 Join us in revolutionizing agriculture with AI!**

*Made with ❤️ for the farmers of Maharashtra*
