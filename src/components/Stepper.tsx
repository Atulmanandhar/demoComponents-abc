import React from "react";
import { Steps } from "antd";
const { Step } = Steps;
interface Props {
  current: number;
}

const customDot = (
  dot: any,
  { status, index }: { status: any; index: any }
) => (
  <>
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -3,
          left: -3,
          right: 0,
          bottom: 0,
          background: status === "process" ? "#5E5A5A" : "#868686",
          height: status === "process" ? 18 : 12,
          width: status === "process" ? 18 : 12,
          borderRadius: status === "process" ? 9 : 6,
        }}
      />
      {status === "process" && (
        <span
          style={{
            position: "absolute",
            color: "white",
            fontSize: "14px",
            top: -2,
            left: 1,
            right: 0,
            bottom: 0,
            background: "transparent",
          }}
        >
          {index}
        </span>
      )}
    </div>
  </>
);

const Stepper = ({ current }: Props) => {
  return (
    <Steps size="small" current={current} progressDot={customDot}>
      <Step />
      <Step />
      <Step />
    </Steps>
  );
};

export default Stepper;
