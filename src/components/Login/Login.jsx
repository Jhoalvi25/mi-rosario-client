import Logo from "../Logo/Logo";
import style from "../../style/Login/Login.module.css";
import { HiArrowRight } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../validations/loginValidation";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setUser({ ...user, [inputName]: inputValue });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(user)).then((data) => {
      history.push("/admin/panel");
    });
    setUser(initialValues);
  };

  return (
    <div>
      <Logo />
      <div className={style.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={submitLogin}
          validationSchema={validationSchema}
        >
          <Form onSubmit={submitLogin} onChange={handleChange}>
            <h2 className={style.title}>Login</h2>

            <div className={style.inputs}>
              <Field
                className={style.input}
                type="text"
                name="username"
                placeholder="Nombre de usuarío"
              />

              <ErrorMessage
                name="username"
                component="span"
                className={style.error}
              />

              <Field
                className={style.input2}
                type="password"
                name="password"
                placeholder="Contraseña"
              />

              <ErrorMessage
                name="password"
                component="span"
                className={style.error}
              />
            </div>

            <button className={style.btn} onSubmit={submitLogin}>
              INGRESAR <HiArrowRight />
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
