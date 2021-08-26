import React from "react";
import { Space, Typography } from "antd";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
interface Props {
  label: string;
  active: boolean;
  onClick: () => void;
}

const CustomCheckbox = ({ label, active, onClick }: Props) => {
  return (
    <div
      className={`checkboxContainer ${active && "checkboxActive"}`}
      onClick={onClick}
    >
      <Space
        direction={"horizontal"}
        align="center"
        className="checkboxContent"
      >
        <Space>
          <div
            style={{
              width: 40,
              height: 40,
              background: "#E5E5E5",
            }}
          />

          <Space direction="vertical" style={{ marginLeft: 10 }}>
            <Typography.Text strong>{label}</Typography.Text>
            <Typography.Text>
              <ClockCircleOutlined style={{ marginRight: 5 }} />
              03 min
            </Typography.Text>
          </Space>
        </Space>

        <div>
          {active && (
            <CheckCircleOutlined style={{ fontSize: 24, color: "#3D3E4A" }} />
          )}
        </div>
      </Space>
    </div>
  );
};

export default CustomCheckbox;
