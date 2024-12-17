import { Link } from "react-router-dom";
import Container from "../Container/Container.jsx";
import Section from "../Section/Section.jsx";

import css from "./Hero.module.css";

const Hero = () => {
  return (
    <Section className={[css.section, css.sectionHero]}>
      <Container className={css.container}>
        <h1 className={css.titleHero}>Campers of your dreams</h1>
        <p className={css.textHero}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.btnViewNow}>
          View Now
        </Link>
      </Container>
    </Section>
  );
};

export default Hero;
