import clsx from "clsx";
import css from "./InputFilterForm.module.css";

const InputFilterForm = ({ id, type, name, value, icon, text, className }) => {
  return (
    <div className={css.wrapper}>
      <input
        className={clsx(css.input, "visuallyHidden")}
        type={type}
        name={name}
        id={id}
        value={value}
      />
      <label className={clsx(css.label, className)} htmlFor={id}>
        <svg className={css.icon}>
          <use href={icon}></use>
        </svg>
        <p className={css.text}>{text}</p>
      </label>
    </div>
  );
};

export default InputFilterForm;
