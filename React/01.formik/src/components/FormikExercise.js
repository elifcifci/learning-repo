import React from "react";
import { ReactDOM } from "react";
import { useFormik, Formik, Form, Field } from 'formik';
import styles from "../css/style.module.css"

function FormikExercise() {

  return (
    <div className={styles.formik}>
      <h1>Sign Up</h1>
      {/* With Form and Field (You should import Form and Field) */}

      <Formik
        initialValues={{
          firstName: "Elif",
          lastName: "Cifci",
          email: "elifcifci@gmail.com",
          gender: "female",
          hobies: "Programing",
          country: "England"
        }}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label> <span />
          <Field id="firstName" name="firstName" placeholder="Jane" />
          <br />
          <br />

          <label htmlFor="lastName">Last Name</label> <span />
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <br />
          <br />

          <label htmlFor="email">Email</label> <span />
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>

  );
}

export default FormikExercise;
