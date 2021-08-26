import React from "react";
import { Input } from "antd";

interface Props {}

const singleInput = () => {
  return (
    <div>
      <Input className="underlineInput" />;
    </div>
  );
};

const CodeInput = (props: Props) => {
  return <div>{singleInput()}</div>;
};

export default CodeInput;
