import { GET_SIMPLE_RETURNS, GET_LOGARITHMIC_RETURNS, LOAD_PORTFOLIO_RETURNS } from "../actions/types";

const initialState = {
  simple_returns: [],
  logarithmic_returns: [],
  portfolio_returns: [],
  maxPrice: 0,
  minPrice: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOGARITHMIC_RETURNS:
      return {
        ...state,
        logarithmic_returns: action.payload
      };
    case GET_SIMPLE_RETURNS:
      return {
        ...state,
        simple_returns: action.payload
      };
    case LOAD_PORTFOLIO_RETURNS:
      return {
        ...state,
        portfolio_returns: action.payload.prices,
        maxPrice: action.payload.max.maxPrice,
        minPrice: action.payload.min.minPrice
      };
    default:
      return state;
  }
}
