import style from "../../style/Cards/Cards.module.css";

export default function Cards({ id, image, name, price }) {
  return (
    <div className={style.card} id={id}>
      <div className={style.container}>
        <img src={image} alt="Img not found" width="150px" height="100px" />
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <h4>{price} 
          $</h4>
        </div>
      </div>
    </div>
  );
}
