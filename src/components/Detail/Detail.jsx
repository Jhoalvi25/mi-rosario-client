import React, { useEffect } from "react";
import style from "../../style/Detail/Detail.module.css";
import { HiArrowRight } from "react-icons/hi";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail } from "../../redux/actions/index";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, props.match.params.id]);

  const detail = useSelector((state) => state.detail);

  console.log(detail, "DETALLE DEL POSTRE");

  return (
    <div>
      <div className={style.cont}>
        <div className={style.btn2}>
          <Link to={"/"} className={style.back}>
            <TbArrowBackUp className={style.arrow} />
            Volver
          </Link>
        </div>
      </div>

      {detail &&
        detail.map((elem) => {
          return (
            <div className={style.container}>
              <div className={style.img}>
                <img
                  src={elem.image}
                  className={style.ilus}
                  alt="desert"
                  width="500px"
                  height="300px"
                />
              </div>
              <div className={style.info}>
                <h1>{elem.name_dessert}</h1>
                <div className={style.des}>
                  <p>{elem.description}</p>
                </div>

                <h3>
                  Disponiblilidad:
                  {elem.stock > 0 ? <span> Si</span> : <span> No</span>}
                </h3>
                <h3>
                  Precío:
                  <span className={style.price}> {elem.price}</span>
                </h3>
                <Link
                  to={{pathname:`/order`,
                  state:{
                    name_dessert: elem.name_dessert,
                    image: elem.image
                  }}}
              
                >
                  <button className={style.btn}>
                    Hacer pedido <HiArrowRight className={style.icon} />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
