import style from "../../style/SubmitOrder/Register.module.css";
import { HiArrowRight } from "react-icons/hi";
import LogoRegister from "../Logo/LogoRegister";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../validations/orderValidation";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { sendOrder } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();

  const location = useLocation();

  const formDessert = location.state;

  console.log("formularioooooooo", formDessert);

  const [dess, setDess] = useState(formDessert.name_dessert);
  const [image, setImage] = useState(formDessert.image);

  const initialValues = {
    name_client: "",
    email: "",
    cellphone: "",
    direction: "",
    dessert: dess,
    instructions: "",
  };

  const [order, setOrder] = useState(initialValues);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setOrder({ ...order, [inputName]: inputValue });
  };

  const submitOrder = (e) => {
    e.preventDefault();
    dispatch(sendOrder(order))
      .then((val) => {
        alert("Check your email for account verification!");
        setOrder({
          name_client: "",
          email: "",
          cellphone: "",
          direction: "",
          dessert: "",
          instructions: "",
        });
      })
      .catch((err) => {
        setOrder({
          name_client: "",
          email: "",
          cellphone: "",
          direction: "",
          dessert: "",
          instructions: "",
        });
      });
  };
  return (
    <div className={style.container}>
      <div className={style.log}>
        <LogoRegister />
      </div>
      <div className={style.form}>
        <Formik
          initialValues={{}}
          onSubmit={submitOrder}
          validationSchema={validationSchema}
        >
          <Form onChange={handleChange} onSubmit={submitOrder}>
            <h2 className={style.title}>
              Completa los siguientes campos <br /> para agendar tu pedido
            </h2>

            <div className={style.inputs}>
              <Field
                className={style.input}
                type="text"
                name="name_client"
                placeholder="Nombre y apellido"
              />

              <ErrorMessage
                name="name_client"
                component="span"
                className={style.error}
              />

              <Field
                className={style.input}
                type="tel"
                name="cellphone"
                placeholder="Telefono o celular"
              />

              <ErrorMessage
                name="cellphone"
                component="span"
                className={style.error}
              />

              <Field
                className={style.input}
                type="email"
                name="email"
                placeholder="Correo electronico"
              />

              <ErrorMessage
                name="email"
                component="span"
                className={style.error}
              />

              <Field
                as="textarea"
                className={style.input}
                name="direction"
                placeholder="Ingrese su dirección de domicilio."
              />

              <ErrorMessage
                name="direction"
                component="span"
                className={style.error}
              />

              <div className={style.cont}>
                <img src={image} alt="dessert" className={style.img} />
              </div>

              <div className={style.inputs}>
                <div className={style.label}>
                  <label>Postre seleccionado:</label>
                </div>

                <Field as="select" name="dessert">
                  <option value={dess}>{dess}</option>
                </Field>

                <div className={style.label}>
                  <label className={style.label}>
                    Instrucciones del postre:
                  </label>
                </div>

                <Field
                  as="textarea"
                  className={style.input}
                  name="instructions"
                  placeholder="Ingrese una descripción detallada del postre que desea."
                />

                <ErrorMessage
                  name="instructions"
                  component="span"
                  className={style.error}
                />
              </div>
            </div>

            <button className={style.btn}>
              Realizar pedido <HiArrowRight />
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
