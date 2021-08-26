import React from "react";
import { Progress, Space, Typography } from "antd";

interface Props {
  percent: number;
  leftText?: string;
  rightText?: string;
}

const Progressbar = ({ percent, leftText, rightText }: Props) => {
  return (
    <>
      <Progress
        percent={percent}
        showInfo={false}
        strokeColor="#C4C4C4"
        trailColor="#F1F6F6"
      />
      <Space
        direction="horizontal"
        align="center"
        style={{
          width: "100%",
          justifyContent: "space-between",
          paddingInline: "20px",
        }}
      >
        <Typography.Text>{leftText}</Typography.Text>
        <Typography.Text>{rightText} min</Typography.Text>
      </Space>
    </>
  );
};

export default Progressbar;
