import { ReactDOM } from "react";
import { useFormik } from 'formik';
import Validations from "./Validation"
import styles from "../css/style.module.css"


function SignUp() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({

    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },

    onSubmit: values => {
      console.log(JSON.stringify(values));
    },

    validationSchema: Validations,
  });

  return (
    <div className={styles.formik}>
      <h1>Sign Up</h1>

      {/* handleSubmit and handleChange (Without Form and Field) */}
      <form onSubmit={handleSubmit}>

        {/* E-mail */}
        <div className={styles.formItem}>
          <label htmlFor="email">Email: </label> <span />
          <input
            value={values.email}
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <div className={styles.errors}>{errors.email}</div>}
        </div>

        {/* Password */}
        <div className={styles.formItem}>
          <label>Password: </label> <span />
          <input
            value={values.password}
            placeholder="*******"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && <div className={styles.errors}>{errors.password}</div>}
        </div>

        {/* Password Confirm */}
        <div className={styles.formItem}>
          <label>Confirm Password: </label> <span />
          <input
            value={values.passwordConfirm}
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.passwordConfirm && touched.passwordConfirm && <div className={styles.errors}>{errors.passwordConfirm}</div>}

        </div>


        <button className={styles.formItem} type="submit">Submit</button>
        <br />

        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default SignUp;