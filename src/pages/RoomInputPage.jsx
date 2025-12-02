import { useState } from 'react';
import { Upload, Ruler, ArrowRight } from 'lucide-react';
import { useApp } from '../utils/AppContext';

const RoomInputPage = () => {
  const { roomData, updateRoomData, setCurrentStep } = useApp();
  const [activeTab, setActiveTab] = useState('dimensions');
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const roomTypes = ['Bedroom', 'Living Room', 'Office', 'Kitchen'];

  const processFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      updateRoomData({ photo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDimensionsChange = (field, value) => {
    updateRoomData({
      dimensions: { ...roomData.dimensions, [field]: value }
    });
  };

  const handleRoomTypeChange = (type) => {
    updateRoomData({ type });
  };

  const handleNext = () => {
    if (activeTab === 'dimensions') {
      if (roomData.type && roomData.dimensions.length && roomData.dimensions.width) {
        setCurrentStep('questionnaire');
      } else {
        alert('Please fill in all required fields');
      }
    } else {
      if (roomData.photo && roomData.type) {
        setCurrentStep('questionnaire');
      } else {
        alert('Please upload a photo and select room type');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Tell us about your room</h2>
          <p className="text-gray-600 mb-8">
            Upload a photo or enter dimensions to get started
          </p>

          {/* Tab Selection */}
          <div className="flex space-x-4 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('dimensions')}
              className={`pb-4 px-4 font-semibold transition-colors ${
                activeTab === 'dimensions'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Ruler className="w-5 h-5 inline mr-2" />
              Enter Dimensions
            </button>
            <button
              onClick={() => setActiveTab('photo')}
              className={`pb-4 px-4 font-semibold transition-colors ${
                activeTab === 'photo'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Upload className="w-5 h-5 inline mr-2" />
              Upload Photo
            </button>
          </div>

          {/* Room Type Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Room Type *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {roomTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleRoomTypeChange(type)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    roomData.type === type
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Dimensions Tab */}
          {activeTab === 'dimensions' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Length (ft) *
                  </label>
                  <input
                    type="number"
                    value={roomData.dimensions.length}
                    onChange={(e) => handleDimensionsChange('length', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Width (ft) *
                  </label>
                  <input
                    type="number"
                    value={roomData.dimensions.width}
                    onChange={(e) => handleDimensionsChange('width', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Height (ft)
                  </label>
                  <input
                    type="number"
                    value={roomData.dimensions.height}
                    onChange={(e) => handleDimensionsChange('height', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="9"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Photo Upload Tab */}
          {activeTab === 'photo' && (
            <div className="space-y-6">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                  preview
                    ? 'border-primary-600 bg-primary-50'
                    : isDragging
                    ? 'border-primary-500 bg-primary-100'
                    : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview}
                      alt="Room preview"
                      className="max-h-64 mx-auto rounded-lg shadow-md"
                    />
                    <button
                      onClick={() => {
                        setPreview(null);
                        updateRoomData({ photo: null });
                      }}
                      className="text-sm text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Remove Photo
                    </button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <label className="cursor-pointer">
                      <span className="text-primary-600 font-semibold hover:text-primary-700">
                        Click to upload
                      </span>{' '}
                      or drag and drop
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep('landing')}
              className="btn-secondary"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="btn-primary flex items-center"
            >
              Next: Style Quiz
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInputPage;

