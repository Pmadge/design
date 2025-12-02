import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../utils/AppContext';

const StyleQuestionnairePage = () => {
  const { questionnaire, updateQuestionnaire, setCurrentStep } = useApp();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 'style',
      question: "What's your style?",
      type: 'single',
      options: ['Minimalist', 'Bohemian', 'Modern', 'Industrial', 'Cozy/Traditional']
    },
    {
      id: 'budget',
      question: "What's your budget range?",
      type: 'single',
      options: ['<$500', '$500-$1000', '$1000-$2000', '$2000+']
    },
    {
      id: 'mustHaveFurniture',
      question: 'Must-have furniture?',
      type: 'multiple',
      options: ['Bed', 'Desk', 'Sofa', 'Storage', 'Dining Table']
    },
    {
      id: 'colorPreferences',
      question: 'Color preferences?',
      type: 'single',
      options: ['Neutrals', 'Warm tones', 'Cool tones', 'Bold/Colorful']
    },
    {
      id: 'constraints',
      question: 'Any constraints?',
      type: 'multiple',
      options: ['Pet-friendly', 'Renter-friendly', 'Small space']
    }
  ];

  const handleAnswer = (value) => {
    const question = questions[currentQuestion];
    
    if (question.type === 'single') {
      updateQuestionnaire({ [question.id]: value });
    } else {
      const currentAnswers = questionnaire[question.id] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(item => item !== value)
        : [...currentAnswers, value];
      updateQuestionnaire({ [question.id]: newAnswers });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, proceed to layouts
      setCurrentStep('layouts');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setCurrentStep('room');
    }
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = questionnaire[currentQ.id];
  const isAnswered = currentQ.type === 'single' 
    ? currentAnswer 
    : currentAnswer && currentAnswer.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">{currentQ.question}</h2>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((option) => {
              const isSelected = currentQ.type === 'single'
                ? currentAnswer === option
                : currentAnswer && currentAnswer.includes(option);

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button onClick={handleBack} className="btn-secondary flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`btn-primary flex items-center ${
                !isAnswered ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Generate Layouts' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleQuestionnairePage;

