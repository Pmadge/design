import { Sparkles, Clock, DollarSign, Users } from 'lucide-react';
import { useApp } from '../utils/AppContext';

const LandingPage = () => {
  const { setCurrentStep } = useApp();

  const benefits = [
    {
      icon: Clock,
      title: '90% Time Savings',
      description: 'Design your space in minutes, not months'
    },
    {
      icon: DollarSign,
      title: '80% Cost Reduction',
      description: 'Affordable solutions for every budget'
    },
    {
      icon: Users,
      title: 'Beginner Designer Support',
      description: 'Connect with aspiring interior designers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-primary-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Design your space in{' '}
            <span className="text-primary-600">minutes</span>, not months
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered interior design platform that helps students and renters create beautiful
            spaces quickly and affordably
          </p>
          <button
            onClick={() => setCurrentStep('room')}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Designing
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Upload Room', desc: 'Photo or dimensions' },
              { step: '2', title: 'Style Quiz', desc: 'Answer 5 quick questions' },
              { step: '3', title: 'Get Layouts', desc: 'AI generates 2-3 options' },
              { step: '4', title: 'Shop & Design', desc: 'Curated shopping list' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your space?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of students and renters creating beautiful spaces
          </p>
          <button
            onClick={() => setCurrentStep('room')}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Demo Banner */}
      <div className="bg-accent-500 text-white text-center py-2 text-sm">
        This is a demo application - All data is mock data for demonstration purposes
      </div>
    </div>
  );
};

export default LandingPage;

