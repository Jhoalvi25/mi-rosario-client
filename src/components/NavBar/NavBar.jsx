import style from "../../style/NavBar/NavBar.module.css";
import image from "../../image/Favicon.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { HiArrowPath, HiMagnifyingGlass } from "react-icons/hi2";
import { getDessertByName, getDesserts } from "../../redux/actions";

export default function NavBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  /*Input de busqueda*/

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  /*Boton*/

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getDessertByName(name));
    setName("");
  }

  /*Volver a cargar los juegos*/

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDesserts());
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={image} alt="logo" className={style.log} />
        <h1>Delicias mi Rosario</h1>
      </div>

      <div className={style.search}>
        <input
          type="text"
          placeholder="Buscar postre"
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          <HiMagnifyingGlass />
        </button>
      </div>
      <div className={style.link}>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Recargar <HiArrowPath />
        </button>
      </div>
    </div>
  );
}
