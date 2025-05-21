import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then(() => {
      // optional toast
    });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/groups">All Groups</Link>
      </li>
      {user && (
        <li>
          <Link to="/createGroup">Create Group</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to="/myGroups">My Groups</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" to="/">
          HobbyHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || user.email}
            >
              <img src={user.photoURL} className="w-10 h-10 rounded-full" />
            </div>
            <button className="btn btn-sm btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link className="btn btn-sm btn-primary" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
