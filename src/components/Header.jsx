import { Link } from "react-router-dom";
import img1 from "../../public/images/Toy_Story_logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-info">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Toy Story
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <img src={img1} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/alltoys">All Toys</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            {user ? (
              <>
                <span>{user.email}</span>
                <button onClick={handleLogout} className="btn btn-sm">
                  Sign out
                </button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
