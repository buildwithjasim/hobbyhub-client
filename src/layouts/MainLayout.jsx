import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
