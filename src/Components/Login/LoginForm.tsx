import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.scss";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <Field type="email" name="email" className={styles.input} />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <Field type="password" name="password" className={styles.input} />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submit}
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
