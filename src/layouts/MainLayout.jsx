import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="bg-yellow-50 ">
      <div className=" w-11/12 mx-auto mt-1">
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
