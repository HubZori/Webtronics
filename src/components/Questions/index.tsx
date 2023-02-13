import { Accordion } from "./Accordion";
import s from "./styles.module.scss";

export const Questions = () => {
  interface programs {
    id: string;
    title: string;
    content: string;
  }

  const accordionData: programs[] = [
    {
      id: "1",
      title: "What is the price?",
      content:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: "2",
      title: "What is the price?",
      content:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: "3",
      title: "What is the price?",
      content:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: "4",
      title: "What is the price?",
      content:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      id: "5",
      title: "What is the price?",
      content:
        "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.title}>Frequently Asked Questions</div>
        <div className={s.steps_block}>
          <div className={s.steps_left}>
            <div className={s.content_subtitle}>
              Do you have any kind of questions?
              <div>We are here to help.</div>
            </div>
            <div className={s.questions}>
              <img className={s.questions_png} src="/Question.png" />
            </div>
          </div>
          <div className={s.steps_right}>
            {accordionData.map((el) => (
              <Accordion id={el.id} title={el.title} content={el.content} />
            ))}
          </div>
        </div>
        <img className={s.ellipse_top} src="/Ellipse60.png" />
        <img className={s.ellipse_bottom} src="/Ellipse60.png" />
        <img className={s.star22} src="/Star22.png" />
        <img className={s.star23} src="/Star23.png" />
      </div>
    </div>
  );
};
