import React, { FC, useEffect } from "react";
import Ipage from "../interfaces/page";
import logging from "../config/logging";
import CustomButton from "../components/CustomButton";
import { RouteChildrenProps } from "react-router-dom";
import Progressbar from "../components/Progressbar";
import CodeInput from "../components/CodeInput";

const Home: FC<Ipage & RouteChildrenProps> = (props) => {
  useEffect(() => {
    logging.info(`loading ${props.name}`);
  }, []);
  return (
    <div>
      <h1>This is the home page</h1>
      <CustomButton
        title="View all the components"
        type="primary"
        onClick={() => props.history.push("/components")}
      />
      <CustomButton
        title="Webcam screen"
        type="primary"
        onClick={() => props.history.push("/webcam")}
      />
      <Progressbar percent={30} leftText="30%" rightText="05:00" />
      <CodeInput />
    </div>
  );
};

export default Home;
