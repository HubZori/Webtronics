import s from "./styles.module.scss";

export const Gallery = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.title}>Gallery</div>
        <div className={s.content}>
          <div className={s.content_left}>
            <p className={s.text}>
              By the end of this course, you will be able to develop and publish
              your very own Google Chrome extension! In this course we will
              focus on coding exercises and projects.
            </p>
            <img className={s.img} src="/deloper4.png" alt="" />
          </div>
          <div className={s.content_gallery}>
            <div className={s.developers}>
              <img className={s.img} src="/developer1.png" alt="" />
              <div className={s.developers__row}>
                <img className={s.img} src="/developer2.png" alt="" />
                <img className={s.img} src="/developer3.png" alt="" />
              </div>
            </div>
            <p className={s.text}>
              If you would like to learn web development and get a job in the
              tech industry, you are going to LOVE this course! Learn HTML, CSS,
              JavaScript, Bootstrap and more with over 15 hours of HD video
              tutorials! This course was designed to be extremely beginner
              friendly. We will begin with the very basics of HTML and build a
              simple web page.
            </p>
          </div>
        </div>
      
      <img className={s.ellipse} src="/Ellipse60.png" />
        <img className={s.star18} src="/Star18.png" />
        <img className={s.star20} src="/Star20.png" />
        <img className={s.star21} src="/Star21.png" />
      </div>
    </div>
  );
};
