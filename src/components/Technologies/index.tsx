import s from "./styles.module.scss";

export const Technologies = () => {
  interface programs {
    id: string;
    img: string;
    title: string;
  }
  const programsItems: programs[] = [
    { id: "1", img: "/angular.png", title: "Angular" },
    { id: "2", img: "/react.png", title: "React" },
    { id: "3", img: "/vue.png", title: "Vue.js" },
    { id: "4", img: "/js 1.png", title: "JavaScript" },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.title}>Programming technologies</div>
        <div className={s.title_small}>
          By the end, you’ll have the portfolio and interview skills you need to
          start your new career.
        </div>
        <div className={s.programs}>
          {programsItems.map((el) => (
            <div className={s.programs_item} id={el.id}>
              <img src={el.img} />
              <span>{el.title}</span>
            </div>
          ))}
        </div>
        <img className={s.ellipse_1} src="/Ellipse60.png" />
        <img className={s.star15} src="/Star15.png" />
      </div>
    </div>
  );
};
