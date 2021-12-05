import { VERIFY_USER } from "../constants/actions";

const verifyUser = (user) => {
  return {
    type: VERIFY_USER,
    payload: user
  };
};

export default verifyUser;
