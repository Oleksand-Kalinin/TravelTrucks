import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container.jsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <Container className={css.container}>
      <nav className={css.navigation}>
        <p>Logo</p>
        <ul className={css.navigationList}>
          <li className={css.navigationListItem}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li className={css.navigationListItem}>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
