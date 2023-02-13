import s from "./styles.module.scss";

export const Slider = () => {
  return( <div className={s.slider}>
    <div className={s.slider_container}>
      <div className={s.slider_pagination}>
        <div className={s.slider_pagination__counts}>1/3</div>
        <div className={s.slider_pagination__buttons}>
          <img src="/SliderButtonLeft.png" />
          <img src="/SliderButtonRight.png" />
        </div>
      </div>
      <ul className={s.slider_items__ul}>
        <li className={s.slider_items__li}>
            <img src="/SliderMan.png" />
        </li>
        <li className={s.slider_items__li}>
            <img src="/SliderWoman.png" />
        </li>
        <li className={s.slider_items__li}>
            <img src="/SliderMan2.png" />
        </li>
      </ul>
    </div>
  </div>)
};