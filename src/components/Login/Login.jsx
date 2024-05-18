import Logo from "../Logo/Logo";
import style from "../../style/Login/Login.module.css";
import { HiArrowRight } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../validations/loginValidation";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import axios from "axios";

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

    const loginUser = (user) => {
      return async (dispatch) => {
        try {
          const config = {
            url: `http://localhost:3001/api/login`,
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            data: user,
          };
          await axios(config).then(
            function (value) {
              // Success!
              history.push("/admin/panel");
              return value.data;
            },
            function (err) {
              // Error!
              throw new Error(err.response.data);
            }
          );
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguno de los datos introducidos son incorrectos!",
          });
        }
      };
    };

    dispatch(loginUser(user));
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
