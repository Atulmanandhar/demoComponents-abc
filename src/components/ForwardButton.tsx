import React from "react";
import { RightOutlined, LoadingOutlined } from "@ant-design/icons";
interface Props {
  disabled: boolean;
  onClick: () => void | any;
  loading?: boolean;
}

const ForwardButton = ({ disabled, onClick, loading }: Props) => {
  return (
    <div
      className={`forwardBtn ${disabled && "btnDisabled"} ${
        loading && "btnDisabled"
      }`}
      onClick={() => {
        if (!loading && !disabled) onClick();
      }}
    >
      {loading ? (
        <LoadingOutlined className="forwardIcon" />
      ) : (
        <RightOutlined className="forwardIcon" />
      )}
    </div>
  );
};

ForwardButton.defaultProps = {
  loading: false,
};

export default ForwardButton;
