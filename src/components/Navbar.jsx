import { Link, NavLink } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Tooltip } from 'react-tooltip';
import logo from '../assets/logo.png';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch(console.error);
  };

  const navItems = (
    <>
      <NavLink to="/" className="btn btn-ghost">
        Home
      </NavLink>
      <NavLink to="/groups" className="btn btn-ghost">
        All Groups
      </NavLink>
      {user && (
        <>
          <NavLink to="/createGroup" className="btn btn-ghost">
            Create Group
          </NavLink>
          <NavLink to="/myGroups" className="btn btn-ghost">
            My Groups
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="HobbyHub Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold hidden sm:inline">HobbyHub</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <div className="hidden md:flex gap-2">{navItems}</div>

          {/* User Section */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="avatar tooltip"
                data-tooltip-id="user-tooltip"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>
              <Tooltip id="user-tooltip">{user.displayName}</Tooltip>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
              >
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-primary">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
