import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="flex justify-between items-center bg-gradient-to-b from-gray-200">
        <div className="text-3xl text-white px-4 font-medium">Moviehub</div>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="h-full"> {children}</div>
    </div>
  );
};
export default Layout;
