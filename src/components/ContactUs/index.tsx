import { useForm, SubmitHandler } from "react-hook-form";
import api from "src/api/feedback";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import s from "./styles.module.scss";
import classNames from "classnames";
import { useState } from "react";

type Inputs = {
  name: string;
  phone: string;
  email: string;
};

export const ContactUs = () => {
  const [text, setText] = useState("");
  const schema = yup.object().shape({
    name: yup.string().required("Ваше имя"),
    phone: yup.string().phone("", true, "Ваш номер телефона").required(),
    email: yup.string().email().required("Ваша почта"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await api.post("/feedback", {
      id: "",
      name: data.name,
      phone: data.phone,
      email: data.email,
    });
    alert("успешно");
    console.log(data);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.title}>Contact Us</div>
        <div className={s.title_small}>
          Do you have any kind of help please contact with us.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form}>
            <input
              className={classNames(s.form__input, {
                [s.error]: errors.name,
              })}
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
            <input
              className={classNames(s.form__input, {
                [s.error]: errors.phone,
              })}
              placeholder="Phone"
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>
            <input
              className={classNames(s.form__input, {
                [s.error]: errors.email,
              })}
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <input className={s.form__submit} type="submit" value="Send" />
          </div>
        </form>

        <img className={s.ellipse} src="/Ellipse60.png" />
      </div>
    </div>
  );
};
