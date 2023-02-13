import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from "../Header";
import { Footer } from "../../components/Footer";
import s from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

export const Template: FC<Props> = ({ children }) => (
  <div className={s.template}>
    <Head>
      <title>Webtronics</title>
      <meta name="description" content="Webtronics" />
      <meta name="viewport" />
      <meta content="telephone=no" name="format-detection" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main className={s.main}>{children}</main>
    <Footer />
  </div>
);
