import { Zoom } from 'react-awesome-reveal';

const WhyChoose = () => {
  return (
    <div className="py-16 my-5 text-center bg-gradient-to-b from-base-100 to-base-200 rounded-xl ">
      <Zoom triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose HobbyHub?
        </h2>
        <p className="mb-12 text-lg text-gray-700 max-w-2xl mx-auto">
          We're more than a platform. We're a growing community of hobby lovers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2 text-2xl ">🌐 Local Discovery</h4>
            <p>
              Local Discovery helps you explore hidden local spots, support
              small businesses, and enjoy unique experiences right in your
              neighborhood.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2 text-2xl">🔒 Safe & Private</h4>
            <p>
              **Safe & Private** Enjoy peace of mind with Safe & Private
              features that protect your data, ensure secure browsing, and
              respect your privacy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2 text-2xl">🎨 Diverse Hobbies</h4>
            <p>
              **Diverse Hobbies** Explore a world of diverse hobbies, from arts
              to adventure, tailored to your interests for fun, growth, and
              creativity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="font-bold mb-2 text-2xl">🚀 Easy to Use</h4>
            <p>
              **Easy to Use** Designed for simplicity, Easy to Use features
              offer a smooth, intuitive experience—no tech skills required, just
              effortless navigation.
            </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default WhyChoose;
