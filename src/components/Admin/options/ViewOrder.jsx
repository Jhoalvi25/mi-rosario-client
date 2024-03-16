import React, { useState } from "react";
import styles from "../../../style/Admin/options/ViewOrder.module.css";
import orders from "../../../Utils/orderTest";

export default function ViewOrder() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAccept = () => {
    // Lógica para aceptar el pedido
  };

  const handleReject = () => {
    // Lógica para rechazar el pedido
  };

  return (
    <div>
      <h1 className={styles.title}>PEDIDOS RECIBIDOS</h1>

      {orders &&
        orders.map((order) => {
          return (
            <>
              <div className={styles.card} onClick={toggleModal} id={order.id}>
                <img
                  src={order.image}
                  alt={order.dessert}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <span className={styles.name}>{order.dessert}</span>
                  <p>{order.customerName}</p>
                  <p>{order.address}</p>
                </div>
                <div className={styles.buttons}>
                  <button
                    onClick={handleAccept}
                    className={styles.acceptButton}
                  >
                    Aceptar
                  </button>
                  <button
                    onClick={handleReject}
                    className={styles.rejectButton}
                  >
                    Rechazar
                  </button>
                </div>
              </div>
              {showModal && (
                <div className={styles.modal} id={order.id}>
                  <div className={styles.modalContent}>
                    <span className={styles.closeButton} onClick={toggleModal}>
                      &times;
                    </span>
                    <h2>Detalles del Pedido</h2>
                    <p>
                      <strong>Nombre:</strong> {order.customerName}
                    </p>
                    <p>
                      <strong>Teléfono:</strong> {order.phoneNumber}
                    </p>
                    <p>
                      <strong>Correo:</strong> {order.email}
                    </p>
                    <p>
                      <strong>Dirección:</strong> {order.address}
                    </p>
                    <p>
                      <strong>Postre:</strong> {order.dessert}
                    </p>
                    <p>
                      <strong>Instrucciones:</strong> {order.instructions}
                    </p>
                    <div className={styles.buttonContainer}>
                      <button
                        onClick={handleAccept}
                        className={styles.acceptButton}
                      >
                        Aceptar
                      </button>
                      <button
                        onClick={handleReject}
                        className={styles.rejectButton}
                      >
                        Rechazar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
}
