import Container from "../Container/Container.jsx";
import FilterForm from "../FilterForm/FilterForm.jsx";
import Section from "../Section/Section.jsx";
import TrucksCatalog from "../TrucksCatalog/TrucksCatalog.jsx";

import css from "./TrucksSection.module.css";

const TrucksSection = () => {
  return (
    <Section className={css.section}>
      <Container className={css.container}>
        <FilterForm />
        <TrucksCatalog />
      </Container>
    </Section>
  );
};

export default TrucksSection;
