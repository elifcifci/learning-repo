import React from "react";
import { ReactDOM } from "react";
import { Formik } from 'formik';
import styles from "./css/style.module.css"

function App() {
  return (
    <div className={styles.formik}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values, null, 2));
        }}>

        {/* With Form and Field (You should import Form and Field) */}
        {/* <Form>
          <label htmlFor="firstName">First Name</label> <span/>
          <Field id="firstName" name="firstName" placeholder="Jane" />
          <br />
          <br />

          <label htmlFor="lastName">Last Name</label> <span/>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <br />
          <br />

          <label htmlFor="email">Email</label> <span/>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </Form> */}

        {/* handleSubmit and handleChange (Without Form and Field) */}
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label> <span />
            <input
              id="firstName"
              name="firstName"
              placeholder="Jane"
              onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="lastName">Last Name: </label> <span />
            <input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="email">Email: </label> <span />
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
            />
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>

  )}

      </Formik>


    </div>
  );
}

export default App;
