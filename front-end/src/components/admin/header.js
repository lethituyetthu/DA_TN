import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <nav className="sb-topnav navbar navbar-expand" style={ { backgroundColor: "#007BFF" }}>
                <Link className="navbar-brand ps-5 text-light fw-bold" to ="/admin/home">
                BookVerse Admin 
                </Link>
                <button
                    className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                    id="sidebarToggle"
                    href="#!"
                >
                    <i className="fas fa-bars text-light " />
                </button>

                
            </nav>
        </>
    );
};

export default Header;
