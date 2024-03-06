import { Link } from "react-router-dom";
import { categories } from "../utils/consts";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between mx-auto px-[5%]  overflow-hidden">
      <Link to="/" className="text-5xl text">
        OrkeNEWS
      </Link>
      <nav>
        <ul className="flex gap-2">
          {categories.map((top) => (
            <li>
              <Link to={`/${top.toLowerCase()}`}>{top}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
