import style from "../../style/Filters/Filters.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory, filterByPrice, filterByStock } from "../../redux/actions";

export default function Filters() {
  const dispatch = useDispatch();
  /*Orden*/

  const [order, setOrder] = useState("");

   /*Filtrar por categoria*/

  function handleFilterByCategory(e) {
    e.preventDefault();
    dispatch(filterByCategory(e.target.value));
    setOrder("");
  }

   /*Filtrar por precio*/

  function handleFilterByPrice(e) {
    e.preventDefault();
    dispatch(filterByPrice(e.target.value));
    setOrder("");
  }

     /*Filtrar por disponibilidad*/

  function handleFilterByStock(e) {
    e.preventDefault();
    dispatch(filterByStock(e.target.value));
    setOrder("");
  }

  return (
    <div className={style.containerFilter}>
      <div className={style.filter}>
        <label>Filtrar por categoria:</label>
        <select
          className={style.select}
          onChange={(e) => handleFilterByCategory(e)}
        >
          <option value="all">Todas</option>
          <option value="Dulce">Dulce</option>
          <option value="Salado">Salado</option>
        </select>
      </div>

      <div className={style.filter}>
        <label>Filtrar por precio:</label>
        <select className={style.select} onChange={(e) => handleFilterByPrice(e)} >
          <option value="fiveTen">5.000 - 10.000</option>
          <option value="tenTwenty"> 10.000 - 20.000 </option>
        </select>
      </div>

      <div className={style.filter}>
        <label>Filtrar por disponibilidad:</label>
        <select className={style.select} onChange={(e) => handleFilterByStock(e)} >
          <option value="yes">Disponible</option>
          <option value="no">No disponible</option>
        </select>
      </div>
    </div>
  );
}
