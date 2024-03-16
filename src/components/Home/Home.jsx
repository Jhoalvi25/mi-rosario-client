import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { getDesserts } from "../../redux/actions/index";

export default function Home() {
  const dispatch = useDispatch();
  const allDesserts = useSelector((state) => state.desserts);
  const desserts = useSelector((state) => state.allDesserts);

  console.log(allDesserts, "datosssssssss");
  console.log(desserts, "por aqui!!!!");

  useEffect(() => {
    dispatch(getDesserts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Filters />

      {allDesserts &&
        allDesserts.map((elem) => {
          return (
            <Fragment>
              <Link to={"/detail/" + elem.id}>
                <Cards
                  id={elem.id}
                  image={elem.image}
                  name={elem.name_dessert}
                  price={elem.price}
                />
              </Link>
            </Fragment>
          );
        })}
    </div>
  );
}
