import axios from "axios";
import { GET_SIMPLE_RETURNS, GET_LOGARITHMIC_RETURNS, LOAD_PORTFOLIO_RETURNS } from "./types";

export const getSimpleReturns = ticket => async dispatch => {
  try {
    const res = await axios.get(`http://127.0.0.1:5000/returns/simple/${ticket}`);
    console.log(`Action was called for: ${ticket}`);
    dispatch({
      type: GET_SIMPLE_RETURNS,
      payload: res.data
    });
  } catch (error) {}
};

export const getLogarithmicReturns = ticket => async dispatch => {
  try {
    const res = await axios.get(`http://127.0.0.1:5000/returns/logarithmic/${ticket}`);
    dispatch({
      type: GET_LOGARITHMIC_RETURNS,
      payload: res.data
    });
  } catch (error) {}
};

export const loadPortfolioReturns = stocks => async dispatch => {
  console.log("In Action, loadPortfolioReturns was called");
  try {
    const res = await axios.post("http://127.0.0.1:5000/returns/portfolio", stocks);
    console.log("In Action, the res.data is: ", res.data);
    dispatch({
      type: LOAD_PORTFOLIO_RETURNS,
      payload: res.data
    });
  } catch (error) {}
};
