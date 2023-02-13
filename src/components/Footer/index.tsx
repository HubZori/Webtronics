import s from "./styles.module.scss";
import { Logo } from "../Logo/index";
interface NavigationItem {
  id: string;
  title?: string;
  path: string;
  src?: string;
}

const navigation: NavigationItem[] = [
  { id: "1", title: "About Us", path: "#" },
  { id: "2", title: "Review", path: "#" },
  { id: "3", title: "Steps", path: "#" },
  { id: "4", title: "Gallery", path: "#" },
  { id: "5", title: "FAQs", path: "#" },
];

const socialMedia: NavigationItem[] = [
  { id: "1", path: "#", src: "/facebook.png" },
  { id: "2", path: "#", src: "/socialicon3.png" },
  { id: "3", path: "#", src: "/twitter.png" },
  { id: "4", path: "#", src: "/linkedin.png" },
];

export const Footer = () => (
  <footer className={s.footer}>
    <div className={s.wrapper}>
      <div className={s.container}>
        <nav className={s.navbar}>
          <div className={s.logo}>
            <Logo variant="secondary" width="169px" height="33px" />
            <p className={s.logo_text}>
              Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
            </p>
          </div>
          <div className={s.company}>
            <h3 className={s.nav__title}>Company</h3>
            <ul className={s.nav}>
              {navigation.map(({ id, title, path }) => (
                <li key={id} className={s.nav__item}>
                  <a className={s.nav__link} href={path}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.social__media}>
            <h3 className={s.nav__title}>Social media</h3>
            <ul className={s.nav}>
              {socialMedia.map(({ id, path, src }) => (
                <li key={id} className={s.nav__item}>
                  <a className={s.nav__link} href={path}>
                    <img src={src} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </footer>
);
