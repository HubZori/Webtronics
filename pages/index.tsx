import type { NextPage } from "next";
import { Main } from "../src/components/Main";
import { AboutUs } from "../src/components/AboutUs";
import { ContactUs } from "../src/components/ContactUs";
import { Template } from "../src/components/Template";
import { Technologies } from "../src/components/Technologies";
import { Steps } from "../src/components/Steps";
import { Questions } from "../src/components/Questions";
import { Review } from "../src/components/Review";
import { Gallery } from "../src/components/Gallery";

const Home: NextPage = () => (
  <Template>
    <Main />
    <AboutUs />
    <Technologies />
    <Steps />
    <Questions />
    <Review />
    <Gallery />
    <ContactUs />
  </Template>
);
export default Home;
