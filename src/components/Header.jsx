import { Link } from "react-router-dom";
import img1 from "/images/Toy_Story_logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/alltoys">All Toys</Link>
      </li>
      <li>
        <Link to="/addatoy">Add A Toy</Link>
      </li>
      <li>
        <Link to="/mytoys">My Toys</Link>
      </li>

      <li>
        <Link to="/blogs">Blog</Link>
      </li>
      {user && (
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      )}

      {user && (
        <div>
          <img src={user.photoURL} alt="" style={{ width: "60px" }} />
        </div>
      )}

      <li>
        {user ? (
          <>
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              className="btn btn-xs self-center w-fit"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-sky-600">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>

        <Link to="/">
          <img className="btn btn-ghost mx-auto" src={img1} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Header;
