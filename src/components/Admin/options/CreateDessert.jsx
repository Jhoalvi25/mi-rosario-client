import React, { useState } from "react";
import styles from "../../../style/Admin/options/CreateDessert.module.css";

export default function CreateDessert() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del postre a tu servidor o realizar cualquier otra acción
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>CREAR POSTRE</h1>
      <label className={styles.label}>Nombre del postre:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label}>Descripción:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />
      <label className={styles.label}>Stock:</label>
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        className={styles.input}
      />
      <label className={styles.label}>Precio:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className={styles.input}
      />
      <label className={styles.label}>Imagen (URL):</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className={styles.input}
      />
      <br/>
      <button type="submit" className={styles.button}>
        Crear Postre
      </button>
    </form>
  );
}
