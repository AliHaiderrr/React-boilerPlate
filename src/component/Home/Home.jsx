import React, { useEffect } from "react";
import { getHttpRequest, postHttpRequest } from "../../axios";

const Home = () => {
  useEffect(() => {
    postHttpRequest("http://125.209.77.54:8181/ios/stateSummaryReport/6925/y75dMKRnjrThEJmQwjKwaMvVO,ju7mZ3xuXcVScFUgI=")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
      console.log("hello")
  }, []);
  return <div>Home</div>;
};

export default Home;
