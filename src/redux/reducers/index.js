const initialState = {
  allDesserts: [],
  desserts: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DESSERTS":
      return {
        ...state,
        desserts: action.payload,
        allDesserts: action.payload,
      };
    case "GET_DESSERT_BY_NAME":
      return {
        ...state,
        desserts: action.payload,
      };

    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };
    case "POST_ORDER":
      return {
        ...state,
      };

    case "FILTER_BY_CATEGORY":
      let filteredCategory;
      if (action.payload === "Dulce") {
        filteredCategory = state.allDesserts.filter(
          (elem) => elem.category === action.payload
        );
      } else if (action.payload === "Salado") {
        filteredCategory = state.allDesserts.filter(
          (elem) => elem.category === action.payload
        );
      }
      return {
        ...state,
        desserts:
          action.payload === "all" ? state.allDesserts : filteredCategory,
      };

    case "FILTER_BY_PRICE":
      let filteredPrice;
      if (action.payload === "fiveTen") {
        filteredPrice = state.allDesserts.filter(
          (elem) => elem.price < 10000
        );
      } else if (action.payload === "tenTwenty") {
        filteredPrice = state.allDesserts.filter(
          (elem) => elem.price > 10000
        );
      }
      return {
        ...state,
        desserts: filteredPrice,
      };

      case "FILTER_BY_STOCK":
        let filteredStock;
        if (action.payload === "yes") {
          filteredStock = state.allDesserts.filter(
            (elem) => elem.stock > 0
          );
        } else if (action.payload === "no") {
          filteredStock = state.allDesserts.filter(
            (elem) => elem.stock === 0
          );
        }
        return {
          ...state,
          desserts: filteredStock,
        };

    case "CLEAN_DETAIL":
      return {
        ...state,
        detail: [],
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
