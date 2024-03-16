import logo from "../../image/Logo.png";
import style from "../../style/Logo/Logo.module.css"

export default function Logo() {
  return (
    <div className={style.logo}>
      <img className={style.img} src={logo} alt="img-logo"/>
    </div>
  );
}
