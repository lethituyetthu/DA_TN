import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { staffName, logOut, token } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/admin");
  };
  return (
    <>
      <nav
        className="sb-topnav navbar navbar-expand"
        style={{ backgroundColor: "#007BFF" }}
      >
        <div className="col-10">
          <Link
            className="navbar-brand ps-5 text-light fw-bold"
            to="/admin/home"
          >
            BookVerse Admin
          </Link>
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="#!"
          >
            <i className="fas fa-bars text-light " />
          </button>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn text-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Welcome {staffName}
          </button>
          {token && (
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                Log Out
                </button>
              </li>
            </ul>
          )}
        </div>
        
      </nav>
    </>
  );
};

export default Header;
