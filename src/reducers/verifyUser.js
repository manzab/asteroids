import { VERIFY_USER } from "../constants/actions";
import _ from "lodash";

const userCredentials = { username: "demo", password: "demo" };

const verifyUser = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_USER:
      return {
        isUserLoggedIn: _.isEqual(userCredentials, action.payload),
        error: _.isEqual(userCredentials, action.payload)
          ? undefined
          : "Įvesti blogi prisijungimo duomenys"
      };
    default:
      return state;
  }
};

export default verifyUser;
