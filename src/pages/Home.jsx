import Banner from '../components/Banner';
import FeaturedGroups from '../components/FeaturedGroups';
import HobbyHubWork from '../components/HowItWorks';
import WhyChoose from '../components/WhyChoose';

const Home = () => {
  return (
    <div className="container mx-auto mt-20 space-y-20">
      <Banner />
      <FeaturedGroups />
      <HobbyHubWork></HobbyHubWork>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
