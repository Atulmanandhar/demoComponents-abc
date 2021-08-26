import React from "react";
import { Slider, Typography } from "antd";
interface Props {
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  minVal: number;
  maxVal: number;
}

const commaSeperator = (numValue: number): string => {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    numValue
  );
};

const CustomSlider = ({ value, onChange, minVal, maxVal }: Props) => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography.Text>{commaSeperator(minVal)}</Typography.Text>
        <Typography.Text>{commaSeperator(maxVal)}</Typography.Text>
      </div>
      <div>
        <Slider
          value={value}
          disabled={false}
          min={minVal}
          max={maxVal}
          onChange={(val) => onChange(val)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Title level={4}>
          NRs. {commaSeperator(value)}
        </Typography.Title>
      </div>
    </div>
  );
};

export default CustomSlider;
