import React from "react";
import { Formik } from "formik";
import FormBase from "./styles";

const Forms = () => (
  <div className="Formfield">
    <FormBase>
      <h1> Anywhere in your app! </h1>{" "}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {" "}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />{" "}
            {errors.email && touched.email && errors.email}{" "}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />{" "}
            {errors.password && touched.password && errors.password}{" "}
            <button type="submit" disabled={isSubmitting}>
              Submit{" "}
            </button>{" "}
          </form>
        )}{" "}
      </Formik>{" "}
    </FormBase>{" "}
  </div>
);

export default Forms;
