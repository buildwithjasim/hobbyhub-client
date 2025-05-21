import { Slide } from 'react-awesome-reveal';
import { FaSearch, FaUsers, FaPlusCircle } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-base-100 to-base-200 rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        <Slide direction="up" triggerOnce>
          <h2 className="text-4xl font-extrabold text-center mb-4">
            How HobbyHub Works
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Build friendships, explore passions, and join amazing groups in 3
            simple steps!
          </p>
        </Slide>

        <div className="relative space-y-14 border-l-4 border-primary pl-6 ml-3">
          {/* Step 1 */}
          <Slide direction="left" triggerOnce>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white rounded-full p-4 shadow-md">
                <FaSearch size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  1. Discover Local Groups
                </h3>
                <p className="text-gray-600">
                  Browse a wide variety of hobby-based groups near your location
                  and find the perfect match for your passion.
                </p>
              </div>
            </div>
          </Slide>

          {/* Step 2 */}
          <Slide direction="right" triggerOnce>
            <div className="flex items-start gap-6">
              <div className="bg-secondary text-white rounded-full p-4 shadow-md">
                <FaUsers size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">2. Join and Connect</h3>
                <p className="text-gray-600">
                  Join a group with a single click, chat with members, and
                  participate in engaging events or meetups.
                </p>
              </div>
            </div>
          </Slide>

          {/* Step 3 */}
          <Slide direction="left" triggerOnce>
            <div className="flex items-start gap-6">
              <div className="bg-accent text-white rounded-full p-4 shadow-md">
                <FaPlusCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  3. Create Your Own Group
                </h3>
                <p className="text-gray-600">
                  Start a group for your favorite hobby and grow a community of
                  people who share your passion.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
