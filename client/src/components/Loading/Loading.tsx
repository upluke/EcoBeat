import React from "react";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div >
    <img src={loadingImg} alt="Spining" />
  </div>
);

export default Loading;