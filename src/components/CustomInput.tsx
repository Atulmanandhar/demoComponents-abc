import React from "react";
import { Input, Typography } from "antd";
interface Props {
  prefix?: React.ReactNode;
  placeHolder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  error?: string;
  type?: "underline" | "box";
}

const CustomInput = ({
  prefix,
  placeHolder,
  value,
  onChange,
  error,
  type,
}: Props) => {
  return (
    <div className="inputContainer">
      <div
        className={`${type === "box" ? "boxInput" : "underlineInput"} ${
          !!error && "errorInput"
        } `}
      >
        <Input
          placeholder={placeHolder}
          bordered={false}
          onChange={onChange}
          value={value}
          prefix={prefix}
        />
      </div>
      {!!error && <Typography.Text type="danger">{error}</Typography.Text>}
    </div>
  );
};

CustomInput.defaultProps = {
  type: "underline",
};

export default CustomInput;
