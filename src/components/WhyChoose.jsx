import { Zoom } from 'react-awesome-reveal';

const WhyChoose = () => {
  return (
    <div className="py-16 px-6  text-center">
      <Zoom triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose HobbyHub?
        </h2>
        <p className="mb-12 text-lg text-gray-700 max-w-2xl mx-auto">
          We're more than a platform. We're a growing community of hobby lovers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2">🌐 Local Discovery</h4>
            <p>Find groups and meetups happening right in your area.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2">🔒 Safe & Private</h4>
            <p>Only verified users can create or join groups.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2">🎨 Diverse Hobbies</h4>
            <p>From painting to gaming – we’ve got every passion covered.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2">🚀 Easy to Use</h4>
            <p>Clean, simple UI so you can focus on connecting with others.</p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default WhyChoose;
