import s from "./styles.module.scss";

export const Steps = () => {
  interface programs {
    id: string;
    subtitle: string;
    title: string;
    text: string;
  }
  const stepsLeft: programs[] = [
    {
      id: "1",
      subtitle: "Introduction to Front-End",
      title: "step1",
      text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitaenon semper quis.",
    },
    {
      id: "2",
      subtitle: "Introduction to Front-End",
      title: "step3",
      text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitaenon semper quis.",
    },
    {
      id: "3",
      subtitle: "Introduction to Front-End",
      title: "step5",
      text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitaenon semper quis.",
    },
  ];
  const stepsRight: programs[] = [
    {
      id: "1",
      subtitle: "Introduction to Front-End",
      title: "step2",
      text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitaenon semper quis.",
    },
    {
      id: "2",
      subtitle: "Introduction to Front-End",
      title: "step4",
      text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitaenon semper quis.",
    },
    {
      id: "6",
      subtitle: "Introduction to Front-End",
      title: "step6",
      text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitaenon semper quis.",
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.title}>Steps</div>
        <div className={s.steps_block}>
          <div className={s.steps_left}>
            {stepsLeft.map((el) => (
              <div className={s.steps_left__items} id={el.id}>
                <div className={s.content}>
                  <div className={s.content_title}>{el.title}</div>
                  <div className={s.content_subtitle}>{el.subtitle}</div>
                  <div className={s.content_text}>{el.text}</div>
                </div>
                <img src="/Vector33.png" />
              </div>
            ))}
          </div>
          <div className={s.steps_center}>
            <img className={s.steps_center__line_1} src="/Groupline.png" />
            <img className={s.steps_center__line_2} src="/Groupline.png" />
            <img className={s.steps_center__line_3} src="/Groupline.png" />
            <img src="/line.png" />
            <img className={s.steps_center__line_4} src="/Groupline.png" />
            <img className={s.steps_center__line_5} src="/Groupline.png" />
            <img className={s.steps_center__line_6} src="/Groupline.png" />
          </div>
          <div className={s.steps_right}>
            {stepsRight.map((el) => (
              <div className={s.steps_right__items} id={el.id}>
                <div className={s.content}>
                  <div className={s.content_title}>{el.title}</div>
                  <div className={s.content_subtitle}>{el.subtitle}</div>
                  <div className={s.content_text}>{el.text}</div>
                </div>
                <img src="/Vector34.png" />
              </div>
            ))}
          </div>
        </div>
        <img className={s.ellipse_1} src="/Ellipse60.png" />
        <img className={s.star12} src="/Star12.png" />
        <img className={s.star13} src="/Star13.png" />
        <img className={s.star14} src="/Star14.png" />
        <img className={s.star16} src="/Star16.png" />
      </div>
    </div>
  );
};
