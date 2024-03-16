import React, { useState } from 'react';
import styles from '../../../style/Admin/options/ConfigurationUser.module.css';


export default function ConfigurationUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
    console.log("Datos del formulario:", { username, email, password, imagen });
    // También puedes restablecer los campos del formulario después de enviarlos
    setUsername("");
    setEmail("");
    setPassword("");
    setImagen(null);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <h1>CAMBIAR DATOS DE USUARIO</h1>
      <label htmlFor="username">Username:</label>
      <input
      className={styles.inp}
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        className={styles.inp}
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        className={styles.inp}
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label htmlFor="imagen">Imagen:</label>
      <input
        type="text"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        className={styles.inp}
      />
      <br/>
      <button className={styles.btn} type="submit">Guardar Cambios</button>
    </form>
  );
}
