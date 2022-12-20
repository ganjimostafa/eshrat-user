import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Style from "./Header.module.scss";
import logo from "../../assets/icon/logo.svg";

const HEADER = [
  { name: "صفحه اصلی", href: "/", title: "" },
  { name: "تماس با ما", href: "/ContactUs", title: "" },
  { name: "درباره ما", href: "/AboutUs", title: "" },
];

function Header() {
  return (
    <header className={Style["navbar"]}>
      <img src={logo} />
      <nav>
        <ul className={Style["nav"]}>
          {HEADER.map((item, index) => (
            <li key={index + item.href}>
              <NavLink className={Style["link"]}  to={item.href} activeClassName={Style["active"]}>
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
