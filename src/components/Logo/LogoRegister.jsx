import logo from "../../image/Logo.png";
import style from "../../style/Logo/LogoRegister.module.css"

export default function LogoRegister() {
  return (
    <div className={style.logo}>
      <img className={style.img} src={logo} alt="img-logo"/>
    </div>
  );
}