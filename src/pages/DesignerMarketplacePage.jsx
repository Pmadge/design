import { useState } from 'react';
import { Star, Filter, ArrowLeft } from 'lucide-react';
import { useApp } from '../utils/AppContext';
import { mockDesigners } from '../data/mockData';

const DesignerMarketplacePage = () => {
  const { setCurrentStep } = useApp();
  const [filters, setFilters] = useState({
    experience: 'all',
    priceRange: 'all',
    specialty: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredDesigners = mockDesigners.filter((designer) => {
    if (filters.experience !== 'all' && designer.experience.toLowerCase() !== filters.experience) {
      return false;
    }
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (designer.rate < min || designer.rate > max) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => setCurrentStep('landing')}
            className="text-primary-600 hover:text-primary-700 font-semibold mb-4 flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse Designers</h2>
          <p className="text-gray-600">
            Connect with aspiring interior designers ready to help bring your vision to life
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary flex items-center"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>

          {showFilters && (
            <div className="mt-4 card">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Prices</option>
                    <option value="25-30">$25-$30/hr</option>
                    <option value="30-35">$30-$35/hr</option>
                    <option value="35-40">$35-$40/hr</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Style Specialty
                  </label>
                  <select
                    value={filters.specialty}
                    onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Styles</option>
                    <option value="minimalist">Minimalist</option>
                    <option value="modern">Modern</option>
                    <option value="cozy">Cozy</option>
                    <option value="bohemian">Bohemian</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Designer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigners.map((designer) => (
            <div key={designer.id} className="card">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={designer.profilePhoto}
                  alt={designer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{designer.name}</h3>
                  <p className="text-sm text-gray-600 capitalize">{designer.experience} Designer</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-gray-900">
                      {designer.rating}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">
                      ({designer.projectsCompleted} projects)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-bold text-primary-600 mb-1">
                  ${designer.rate}
                  <span className="text-sm font-normal text-gray-600">/hr</span>
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {designer.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full capitalize"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Portfolio</p>
                <div className="grid grid-cols-2 gap-2">
                  {designer.portfolio.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Portfolio ${idx + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              <button className="w-full btn-primary">View Profile</button>
            </div>
          ))}
        </div>

        {filteredDesigners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No designers match your filters. Try adjusting your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignerMarketplacePage;

