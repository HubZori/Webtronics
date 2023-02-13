import s from "./styles.module.scss";

import { Slider } from "./Slider";
export const Review = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.title}>Review</div>
        <div className={s.content}>
          <div className={s.content_text}>
            <h4 className={s.content_text__title}>Best courses ever</h4>
            <p className={s.content_text__text}>
              Good course, up to this point, still ongoing. The only downside,
              why I gave 4,5 stars, because the "teacher" sometimes feel like,
              he is lost, and takes up quite a time, to correct himself, and
              check back etc.
            </p>
          </div>
          <Slider />
        </div>
        <img className={s.ellipse} src="/Ellipse60.png" />
        <img className={s.star24} src="/Star24.png" />
      </div>
    </div>
  );
};
