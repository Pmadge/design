import { AppProvider, useApp } from './utils/AppContext';
import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import LandingPage from './pages/LandingPage';
import RoomInputPage from './pages/RoomInputPage';
import StyleQuestionnairePage from './pages/StyleQuestionnairePage';
import LayoutGenerationPage from './pages/LayoutGenerationPage';
import ShoppingListPage from './pages/ShoppingListPage';
import DesignerMarketplacePage from './pages/DesignerMarketplacePage';

const AppContent = () => {
  const { currentStep } = useApp();

  const renderPage = () => {
    switch (currentStep) {
      case 'landing':
        return <LandingPage />;
      case 'room':
        return <RoomInputPage />;
      case 'questionnaire':
        return <StyleQuestionnairePage />;
      case 'layouts':
        return <LayoutGenerationPage />;
      case 'shopping':
        return <ShoppingListPage />;
      case 'designers':
        return <DesignerMarketplacePage />;
      default:
        return <LandingPage />;
    }
  };

  const showProgressIndicator = ['room', 'questionnaire', 'layouts', 'shopping'].includes(currentStep);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {showProgressIndicator && <ProgressIndicator />}
      {renderPage()}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;

