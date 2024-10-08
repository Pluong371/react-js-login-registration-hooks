import React from "react";
import { withRouter } from "react-router-dom";

const parseJwt = (token) => {
  try {
    return JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString("utf-8"));;
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

export default withRouter(AuthVerify);
