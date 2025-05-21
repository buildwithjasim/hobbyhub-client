import Banner from '../components/Banner';
import FeaturedGroups from '../components/FeaturedGroups';
import UpcomingCampaigns from '../components/UpcomingCampaigns';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="container mx-auto px-4 mt-20 space-y-20">
      <Banner />
      <FeaturedGroups />
      <UpcomingCampaigns />
      <Testimonials />
    </div>
  );
};

export default Home;
