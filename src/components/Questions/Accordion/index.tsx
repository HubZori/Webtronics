import { FC, useState } from "react";
import s from "./styles.module.scss";

type AccordionProps = {
  id: string;
  title: string;
  content: string;
};

export const Accordion: FC<AccordionProps> = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordion}>
      <div className={s.accordion_item} id={id}>
        <div
          className={s.accordion_title}
          onClick={() => setIsActive(!isActive)}
        >
            <div className={s.accordion_title_title}>
          <div>{title}</div>
          <span>{isActive ? "-" : "+"}</span>
            </div>
        {isActive && <div className={s.accordion_content}>{content}</div>}
        </div>
      </div>
    </div>
  );
};

/* 
                <div className="accordion" id={el.id}>
                  <div className="accordion-item">
                    <div className="accordion-title">
                      <div>{el.title}</div>
                      <div>+</div>
                    </div>
                    <div className="accordion-content">{el.text}</div>
                  </div>
                </div> */
