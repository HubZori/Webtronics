import { useState, useEffect } from "react";
import { Logo } from "src/components/Logo";
import s from "./styles.module.scss";

interface NavigationItem {
  id: string;
  title: string;
  path: string;
}

const navigation: NavigationItem[] = [
  { id: "1", title: "About", path: "/#" },
  { id: "2", title: "Programs", path: "/#" },
  { id: "3", title: "Steps", path: "/#" },
  { id: "4", title: "Questions", path: "/#" },
  { id: "5", title: "Get in touch", path: "/#" },
];
export const Header = () => {
  const [navSize, setnavSize] = useState("8rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#0c102d") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("8rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className={s.header}>
      <div
        className={s.wrapper}
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <div className={s.container}>
          <div className={s.logo}>
            <Logo  variant="secondary" width="169px" height="33px" />
            
          </div>
          <nav className={s.navbar}>
            <ul className={s.nav}>
              {navigation.map(({ id, title, path }) => (
                <li key={id} className={s.nav__item}>
                  <a className={s.nav__link} href={path}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
