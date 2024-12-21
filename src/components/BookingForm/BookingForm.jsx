import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import clsx from "clsx";
import { Bounce, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const BookingValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "The name must be at least 2 characters long")
    .max(100, "The name must be shorter than 100 characters"),

  email: Yup.string()
    .email("Incorrect email address")
    .required("Email is required"),
  bookingDate: Yup.date().required("Date is required"),
  comment: Yup.string().min(
    8,
    "The comment must be at least 8 characters long"
  ),
});

const BookingForm = () => {
  const INITIAL_VALUES = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    toast.success(`Thank you, ${values.name}! Your booking is confirmed!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    INITIAL_VALUES.bookingDate = null;
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={BookingValidationSchema}
    >
      {({ errors, setFieldValue }) => (
        <Form className={css.form}>
          <p className={css.formTitle}>Book your campervan now</p>
          <p className={css.formText}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.formFields}>
            <label className={css.fieldWrapper}>
              <Field
                className={css.fieldInput}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage
                className={css.errMessage}
                name="name"
                component="span"
              />
            </label>

            <label className={css.fieldWrapper}>
              <Field
                className={css.fieldInput}
                type="text"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                className={css.errMessage}
                name="email"
                component="span"
              />
            </label>

            <label className={css.fieldWrapper}>
              {/* <Field
                className={css.fieldInput}
                type="text"
                name="bookingDate"
                placeholder="Booking date*"
              /> */}
              <DatePicker
                name="bookingDate"
                className={css.fieldInput}
                placeholderText="Booking date*"
                dateFormat="dd.MM.yyyy"
                selected={INITIAL_VALUES.bookingDate}
                onChange={(date) => {
                  INITIAL_VALUES.bookingDate = date;
                  setFieldValue("bookingDate", date);
                }}
                autoComplete="off"
              />
              <ErrorMessage
                className={css.errMessage}
                name="bookingDate"
                component="span"
              />
            </label>

            <label className={css.fieldWrapper}>
              <Field
                className={clsx(css.fieldInput, css.textarea)}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                className={css.errMessage}
                name="comment"
                component="span"
              />
            </label>
          </div>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.btnSubmitForm}
            type="submit"
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
