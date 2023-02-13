import s from "./styles.module.scss";

import classNames from "classnames";

export const AboutUs = () => {
  interface programs {
    id: string;
    className: string;
    img: string;
    title: string;
    text: string;
  }

  const programsItems: programs[] = [
    {
      id: "1",
      className: "",
      img: "/WadeWarren.png",
      title: "Wade Warren",
      text: "Front-end engineers work closely with designers",
    },
    {
      id: "2",
      className: "center",
      img: "/KristinWatson.png",
      title: "Kristin Watson",
      text: "Front-end engineers work closely with designers",
    },
    {
      id: "3",
      className: "",
      img: "/RobertFox.png",
      title: "Robert Fox",
      text: "Front-end engineers work closely with designers",
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.title}>AboutUs</div>
        <div className={s.content}>
          <div className={s.mentors_content}>
            <span className={s.subtitle}>Mentors</span>
            <div className={s.vectors}>
              <img src="VectorLeft.png" />
              <img src="VectorCenter.png" />
              <img src="VectorRight.png" />
            </div>
            <div className={s.mentors}>
              {programsItems.map((el) => (
                <div
                  id={el.id}
                  className={classNames(s.mentors_item, {
                    [s.center]: `${el.className}`,
                  })}
                >
                  <div className={s.mentors_item__img}>
                    <img src={el.img} />
                  </div>
                  <div className={s.mentors_item__content}>
                    <span className={s.title}>{el.title}</span>
                    <span className={s.text}>{el.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={s.title_small}>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
            <img className={s.elem__frontEnd} src="/Front-EndStroke.png" />
          </div>
        </div>

        <img className={s.elem__ellipse_1} src="/Ellipse60.png" />
        <img className={s.star10} src="/Star10.png" />
        <img className={s.star11} src="/Star11.png" />
        <img className={s.star8} src="/Star8.png" />
        <img className={s.star5} src="/Star5.png" />
      </div>
    </div>
  );
};
