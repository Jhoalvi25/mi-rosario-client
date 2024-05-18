import axios from "axios";

const deploy = "https://mi-rosario-servicios.onrender.com"

/************ Obtener todos los postres***************/

export function getDesserts() {
  return async function (dispatch) {
    try {
      var json = await axios.get("https://mi-rosario-servicios.onrender.com/api/dessert", {});
      return dispatch({
        type: "GET_DESSERTS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/************ Buscar postre por nombre ***************/

export function getDessertByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("https://mi-rosario-servicios.onrender.com/api/dessert?name=" + name);
      return dispatch({
        type: "GET_DESSERT_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/************ Obtener detalle ***************/

export function getDetail(id) {
  return async function (dispatch) {
    var json = await axios.get("https://mi-rosario-servicios.onrender.com" + id);

    try {
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/************ Limpiar estado de detalles ***************/

export function cleanDetail() {
  return {
    type: "CLEAN_DETAIL",
  };
}

/************ Postear orden ***************/

export function postOrder(payload) {
  return async function (dispatch) {
    try {
      const order = await axios.post("https://mi-rosario-servicios.onrender.com/api/order",
        payload
      );

      return dispatch({
        type: "POST_ORDER",
        payload: order,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/************ Filtrar por categoria ***************/

export function filterByCategory(payload) {
  return {
    type: "FILTER_BY_CATEGORY",
    payload,
  };
}

/************ Filtrar por precio ***************/

export function filterByPrice(payload) {
  return {
    type: "FILTER_BY_PRICE",
    payload,
  };
}

/************ Filtrar por disponibilidad ***************/

export function filterByStock(payload) {
  return {
    type: "FILTER_BY_STOCK",
    payload,
  };
}

export const sendOrder = (order) => {
  return async (dispatch) => {
    try {
      const config = {
        url: `${deploy}/api/order`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: order,
      };
      await axios(config).then(
        function (value) {
          // Success!
          return value.data;
        },
        function (err) {
          // Error!
          throw new Error(err.response.data);
        }
      );
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const config = {
        url: `${deploy}/api/login`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: user,
      };
      await axios(config).then(
        function (value) {
          // Success!
          return value.data;
        },
        function (err) {
          // Error!
          throw new Error(err.response.data);
        }
      );
    } catch (err) {
      alert("Datos incorrectos")
    }
  };
};
