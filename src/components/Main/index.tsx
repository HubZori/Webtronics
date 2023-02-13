import s from "./styles.module.scss";

export const Main = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.wrapper_background} src="viewprogrammer.png" alt="" />
      <div className={s.container}>
        <div className={s.title}>
          <span className={s.title__large}>Front-End</span>
          <span className={s.title__small}>
            Make UIs and websites beautiful, functional, and fast. Cover all the
            topics that expensive bootcamps teach (and more).
          </span>
        </div>
        <div className={s.title_bottom}>
          <button className={s.title_bottom__button}>
            Start my career change
          </button>
          <span className={s.large}>Developer</span>
        </div>
        <div className={s.title__courses}>Courses</div>
      </div>
      <img className={s.rectangle__ellipse_1} src="/Ellipse60.png" />
      <img className={s.rectangle__ellipse_2} src="/Ellipse60.png" />
      <img className={s.star7} src="/Star7.png" />
      <img className={s.star9} src="/Star9.png" />
      <img className={s.star4} src="/Star4.png" />
      <img className={s.star2} src="/Star2.png" />
    </div>
  );
};
