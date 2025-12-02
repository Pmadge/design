import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState('landing');
  const [roomData, setRoomData] = useState({
    type: '',
    dimensions: { length: '', width: '', height: '' },
    photo: null
  });
  const [questionnaire, setQuestionnaire] = useState({
    style: '',
    budget: '',
    mustHaveFurniture: [],
    colorPreferences: '',
    constraints: []
  });
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [shoppingList, setShoppingList] = useState([]);

  const updateRoomData = (data) => {
    setRoomData(prev => ({ ...prev, ...data }));
  };

  const updateQuestionnaire = (data) => {
    setQuestionnaire(prev => ({ ...prev, ...data }));
  };

  const resetApp = () => {
    setCurrentStep('landing');
    setRoomData({ type: '', dimensions: { length: '', width: '', height: '' }, photo: null });
    setQuestionnaire({ style: '', budget: '', mustHaveFurniture: [], colorPreferences: '', constraints: [] });
    setSelectedLayout(null);
    setShoppingList([]);
  };

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        roomData,
        updateRoomData,
        questionnaire,
        updateQuestionnaire,
        selectedLayout,
        setSelectedLayout,
        shoppingList,
        setShoppingList,
        resetApp
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

