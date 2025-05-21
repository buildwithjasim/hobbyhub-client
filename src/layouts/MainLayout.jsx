import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
