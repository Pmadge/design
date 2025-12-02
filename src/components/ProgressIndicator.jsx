import { Check } from 'lucide-react';
import { useApp } from '../utils/AppContext';

const ProgressIndicator = () => {
  const { currentStep } = useApp();

  const steps = [
    { id: 'room', label: 'Room Info' },
    { id: 'questionnaire', label: 'Style Quiz' },
    { id: 'layouts', label: 'Choose Layout' },
    { id: 'shopping', label: 'Shopping List' }
  ];

  const getStepIndex = () => {
    const stepOrder = ['room', 'questionnaire', 'layouts', 'shopping'];
    return stepOrder.indexOf(currentStep);
  };

  const currentStepIndex = getStepIndex();

  if (currentStepIndex === -1) return null;

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            
            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      isCompleted
                        ? 'bg-primary-600 text-white'
                        : isCurrent
                        ? 'bg-primary-600 text-white ring-4 ring-primary-200'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {isCompleted ? <Check className="w-6 h-6" /> : index + 1}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      isCurrent ? 'text-primary-600' : isCompleted ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      isCompleted ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;

