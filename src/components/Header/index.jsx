import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/icon/logo.svg";

const HEADER = [
  { name: "صفحه اصلی", href: "/", title: "" },
  { name: "تماس با ما", href: "/ContactUs", title: "" },
  { name: "درباره ما", href: "/AboutUs", title: "" },
];

function Header() {
  return (
    <header className="navbar">
      <img src={logo} />
      <nav>
        <ul className="nav">
          {HEADER.map((item, index) => (
            <li key={index + item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
