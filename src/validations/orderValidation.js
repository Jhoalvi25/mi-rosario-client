import * as yup from "yup";

const isRequiredMessage = "Este campo es requerido";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default yup.object().shape({
  name_client: yup
    .string()
    .required("Ho haz introducido tu nombre y apellido")
    .min(8, "Solo primer nombre y primer apellido")
    .max(25, "El nombre no puede exceder los 25 caracteres"),
  email: yup.string().required(isRequiredMessage).email(),
  cellphone: yup.string().matches(phoneRegExp, "Numero de telefono no valido"),
  direction: yup.string().required(isRequiredMessage),
  dessert: yup.string().required(isRequiredMessage),
  instructions: yup.string().required(isRequiredMessage),
});
