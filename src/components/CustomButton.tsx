import React from "react";
import { Button } from "antd";

type ButtonType =
  | "default"
  | "link"
  | "text"
  | "ghost"
  | "primary"
  | "dashed"
  | undefined;

interface Props {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  loading?: boolean;
  type: ButtonType;
  icon?: React.ReactNode;
}

const CustomButton = ({
  title,
  disabled,
  onClick,
  loading,
  type,
  icon,
}: Props) => {
  return (
    <div style={{ width: "250px" }}>
      <Button
        type={type}
        block
        shape="round"
        disabled={disabled}
        onClick={onClick}
        loading={loading}
        icon={icon}
      >
        {title}
      </Button>
    </div>
  );
};

CustomButton.defaultProps = {
  loading: false,
  disabled: false,
};

export default CustomButton;
