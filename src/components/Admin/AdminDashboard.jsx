import style from "../../style/Admin/AdminDashboard.module.css";
import logo from "../../image/Favicon.png";
import { useState } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import ConfigurationUser from "./options/ConfigurationUser";
import ControlPanel from "./options/ControlPanel";
import CreateDessert from "./options/CreateDessert";
import ViewOrder from "./options/ViewOrder";

export default function AdminDashboard() {
  const { options } = useParams();
  const [rol] = useState("Administrador");

  return (
    <div className={style.container}>
      <div className={style.bar}>
        <div className={style.img}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h3>{rol}</h3>
        </div>
        <div className={style.options}>
        <Link to="/admin/panel">
          <button className={style.btn}>Analisis y ventas</button>
        </Link>

        <Link to="/admin/user">
          <button className={style.btn}>Configuración de usuario</button>
        </Link>

        <Link to="/admin/create">
          <button className={style.btn}>Crear postres</button>
        </Link>

        <Link to="/admin/order">
          <button className={style.btn}>Pedidos</button>
        </Link>

        <Link to="/login">
          <button className={style.btn}>Salir</button>
        </Link>

        </div>
      </div>

      <div className={style.info}>
        {options === "panel" ? (
          <ControlPanel />
        ) : options === "user" ? (
          <ConfigurationUser />
        ) : options === "create" ? (
          <CreateDessert />
        ) : options === "order" ? (<ViewOrder/>): null}
      </div>
    </div>
  );
}
