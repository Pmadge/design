import { useState, useEffect } from 'react';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import { useApp } from '../utils/AppContext';
import { mockLayouts } from '../data/mockData';

const LayoutGenerationPage = () => {
  const { setCurrentStep, setSelectedLayout, setShoppingList } = useApp();
  const [loading, setLoading] = useState(true);
  const [hoveredLayout, setHoveredLayout] = useState(null);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectLayout = (layout) => {
    setSelectedLayout(layout);
    // Generate shopping list from layout products
    setShoppingList(layout.products);
    setCurrentStep('shopping');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing your space...</h2>
          <p className="text-gray-600">Our AI is generating personalized layout suggestions</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Layout</h2>
          <p className="text-gray-600">Select the design that best matches your style and needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {mockLayouts.map((layout) => (
            <div
              key={layout.id}
              className="card relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setHoveredLayout(layout.id)}
              onMouseLeave={() => setHoveredLayout(null)}
            >
              <div className="relative mb-4">
                <img
                  src={layout.imageUrl}
                  alt={layout.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                  {layout.matchScore}% match
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{layout.name}</h3>
              <p className="text-gray-600 mb-4 capitalize">{layout.style} style</p>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-2xl font-bold text-primary-600">${layout.cost}</p>
                  <p className="text-sm text-gray-500">Estimated total</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{layout.items} items</p>
                  <p className="text-sm text-gray-500">Included</p>
                </div>
              </div>

              {hoveredLayout === layout.id && (
                <div className="absolute inset-0 bg-white bg-opacity-95 p-6 flex flex-col justify-center items-center">
                  <ShoppingBag className="w-12 h-12 text-primary-600 mb-4" />
                  <p className="text-center text-gray-700 mb-4">
                    Includes {layout.items} carefully curated items from Amazon, Target, and IKEA
                  </p>
                  <button
                    onClick={() => handleSelectLayout(layout)}
                    className="btn-primary w-full"
                  >
                    Select This Layout
                  </button>
                </div>
              )}

              <button
                onClick={() => handleSelectLayout(layout)}
                className="btn-primary w-full"
              >
                Select Layout
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <button
            onClick={() => setCurrentStep('questionnaire')}
            className="btn-secondary flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutGenerationPage;

