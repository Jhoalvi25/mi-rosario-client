import * as yup from "yup";

const isRequiredMessage = "Este campo es requerido";

export default yup.object().shape({
    username: yup
    .string()
    .required(isRequiredMessage)
    .min(5, "Tu usuario deberia tener al menos 5 caracteres")
    .max(15, "Tu nombre de usuario no puede exceder los 15 caracteres"),
  password: yup
    .string()
    .required("No haz introducido la contraseña.")
    .min(8, "La contraseña es muy corta, debe tener minimo 8 caracteres")
    .matches(/[a-zA-Z]/, "La contraseña debe tener solo caracteres latinos"),
});
