import { useId } from "react";
import InputFilterForm from "../InputFilterForm/InputFilterForm.jsx";
import sprite from "../../images/sprite.svg";
import css from "./FilterForm.module.css";
import clsx from "clsx";

const FilterForm = () => {
  const id = {
    ac: useId(),
    automatic: useId(),
    kitchen: useId(),
    tv: useId(),
    bathroom: useId(),
    van: useId(),
    fullyIntegrated: useId(),
    alcove: useId(),
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.labelLocation} htmlFor="location">
        Location
      </label>
      <div className={css.wrapperLocation}>
        <input
          className={css.inputLocation}
          type="text"
          id="location"
          name="location"
          placeholder="Kyiv, Ukraine"
        />
        <svg className={css.iconLocation}>
          <use href={`${sprite}#map-icon`}></use>
        </svg>
      </div>

      <p className={css.textFilters}>Filters</p>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Vehicle equipment</legend>
        <div className={css.checkboxWrapper}>
          <InputFilterForm
            id={id.ac}
            type="checkbox"
            name="vehicleEquipment"
            value="ac"
            icon={`${sprite}#wind-icon`}
            text="AC"
            className={css.labelCheckbox}
          />
          <InputFilterForm
            id={id.automatic}
            type="checkbox"
            name="vehicleEquipment"
            value="automatic"
            icon={`${sprite}#diagram-icon`}
            text="Automatic"
            className={css.labelCheckbox}
          />
          <InputFilterForm
            id={id.kitchen}
            type="checkbox"
            name="vehicleEquipment"
            value="Kitchen"
            icon={`${sprite}#cup-hot-icon`}
            text="Kitchen"
            className={css.labelCheckbox}
          />
          <InputFilterForm
            id={id.tv}
            type="checkbox"
            name="vehicleEquipment"
            value="tv"
            icon={`${sprite}#tv-icon`}
            text="TV"
            className={css.labelCheckbox}
          />
          <InputFilterForm
            id={id.bathroom}
            type="checkbox"
            name="vehicleEquipment"
            value="bathroom"
            icon={`${sprite}#ph_shower-icon`}
            text="Bathroom"
            className={css.labelCheckbox}
          />
        </div>
      </fieldset>

      <fieldset className={clsx(css.fieldset, css.lastFieldset)}>
        <legend className={css.legend}>Vehicle type</legend>
        <div className={css.radioWrapper}>
          <InputFilterForm
            id={id.van}
            type="radio"
            name="vehicleType"
            value="van"
            icon={`${sprite}#bi_grid-1x2-icon`}
            text="Van"
            className={css.labelRadio}
          />
          <InputFilterForm
            id={id.fullyIntegrated}
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            icon={`${sprite}#bi_grid-icon`}
            text="Fully Integrated"
            className={clsx(css.labelRadio, css.acceptPadding)}
          />
          <InputFilterForm
            id={id.alcove}
            type="radio"
            name="vehicleType"
            value="Alcove"
            icon={`${sprite}#bi_grid-3x3-gap-icon`}
            text="Alcove"
            className={css.labelRadio}
          />
        </div>
      </fieldset>

      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default FilterForm;
