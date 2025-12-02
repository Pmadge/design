import { useState } from 'react';
import { ArrowLeft, Plus, Download, ShoppingCart } from 'lucide-react';
import { useApp } from '../utils/AppContext';
import { mockProducts } from '../data/mockData';

const ShoppingListPage = () => {
  const { selectedLayout, shoppingList, setCurrentStep } = useApp();
  const [selectedItems, setSelectedItems] = useState(
    new Set(shoppingList && shoppingList.length > 0 ? shoppingList : [1, 2, 3, 4, 5, 6, 7, 8])
  );

  const productsByCategory = mockProducts
    .filter(p => selectedItems.has(p.id))
    .reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});

  const totalCost = mockProducts
    .filter(p => selectedItems.has(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  const toggleItem = (id) => {
    const newSet = new Set(selectedItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedItems(newSet);
  };

  const handleExport = () => {
    const listText = Object.entries(productsByCategory)
      .map(([category, products]) => {
        const categoryProducts = products
          .filter(p => selectedItems.has(p.id))
          .map(p => `  - ${p.name} - $${p.price} (${p.retailer})`)
          .join('\n');
        return `${category}:\n${categoryProducts}`;
      })
      .join('\n\n');

    const blob = new Blob([`DesignMate Shopping List\n\n${listText}\n\nTotal: $${totalCost}`], {
      type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'designmate-shopping-list.txt';
    a.click();
  };

  const getRetailerLogo = (retailer) => {
    const colors = {
      Amazon: 'bg-yellow-400',
      Target: 'bg-red-500',
      IKEA: 'bg-blue-600'
    };
    return colors[retailer] || 'bg-gray-400';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Shopping List</h2>
          <p className="text-gray-600">
            Curated products for your {selectedLayout?.name} layout
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(productsByCategory).map(([category, products]) => (
              <div key={category} className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg border-2 transition-all ${
                        selectedItems.has(product.id)
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                        <div className="flex items-center space-x-2 mb-2">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold text-white ${getRetailerLogo(
                              product.retailer
                            )}`}
                          >
                            {product.retailer}
                          </span>
                        </div>
                        <p className="text-xl font-bold text-primary-600">${product.price}</p>
                      </div>
                      <button
                        onClick={() => toggleItem(product.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          selectedItems.has(product.id)
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Items selected</span>
                  <span className="font-semibold">{selectedItems.size}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-primary-600">${totalCost}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleExport}
                  className="w-full btn-secondary flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Export List
                </button>
                <button className="w-full btn-primary flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  View All Items
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Need help?</p>
                <button
                  onClick={() => setCurrentStep('designers')}
                  className="w-full text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  Browse Designers →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-8">
          <button
            onClick={() => setCurrentStep('layouts')}
            className="btn-secondary flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Layouts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListPage;

