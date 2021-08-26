import React, { FC } from "react";
import { UserOutlined, LeftOutlined } from "@ant-design/icons";
import { Space } from "antd";
import CustomButton from "../components/CustomButton";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomDropDown from "../components/CustomDropdown";
import CustomInput from "../components/CustomInput";
import ForwardButton from "../components/ForwardButton";
import Progressbar from "../components/Progressbar";
import Stepper from "../components/Stepper";
import IPage from "../interfaces/page";
import { RouteChildrenProps } from "react-router-dom";
import CustomSlider from "../components/CustomSlider";
import CustomModal2 from "../components/CustomModal";

const dropdownData = [
  {
    id: "1",
    value: "Kathmandu ",
  },
  {
    id: "2",
    value: "Kavrepalanchowk",
  },
  {
    id: "3",
    value: "Khotang",
  },
  {
    id: "4",
    value: "Bhaktapur ",
  },
  {
    id: "5",
    value: "Lalitpur",
  },
  {
    id: "6",
    value: "Pokhara",
  },
  {
    id: "7",
    value: "Chitwan",
  },
  {
    id: "8",
    value: "Lumbini ",
  },
];

const Components: FC<IPage & RouteChildrenProps> = (props) => {
  const [dropdownVal, setDropDownVal] = React.useState<string>("");
  const [dmatVal, setDematVal] = React.useState<boolean>(false);
  const [sliderVal, setSliderVal] = React.useState<number>(50000);

  return (
    <Space
      direction={"vertical"}
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        flexWrap: "wrap",
      }}
    >
      <Progressbar percent={30} leftText="30%" rightText="05:00" />
      <Stepper current={1} />
      <CustomSlider
        value={sliderVal}
        onChange={setSliderVal}
        minVal={50000}
        maxVal={500000}
      />
      <Space
        direction={"vertical"}
        align="center"
        style={{
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CustomModal2 />
        <CustomCheckbox
          label="DEMAT"
          active={dmatVal}
          onClick={() => {
            setDematVal(!dmatVal);
          }}
        />
        <CustomDropDown
          data={dropdownData}
          value={dropdownVal}
          setValue={setDropDownVal}
        />
        <Space style={{ flexWrap: "wrap" }}>
          <CustomInput
            placeHolder={"Full Name"}
            prefix={<UserOutlined className="underlineIcon" />}
          />
          <CustomInput
            placeHolder={"Full Name"}
            prefix={<UserOutlined className="underlineIcon" />}
            error="Full name is required."
          />
          <CustomInput placeHolder={"Full Name"} type="box" />
          <CustomInput
            placeHolder={"Full Name"}
            type="box"
            error="Full name is required."
          />
        </Space>
        <div style={{ marginTop: 30 }} />
        <CustomButton
          title="Disabled Button"
          type="primary"
          loading={false}
          disabled={true}
          onClick={() => alert("het")}
        />
        <CustomButton
          title="Save and Next (loading)"
          type="primary"
          loading={true}
          disabled={false}
          onClick={() => alert("het")}
        />
        <CustomButton
          title="Cancel"
          type="text"
          // loading={false}
          // disabled={false}
          onClick={() => alert("Text button")}
        />
        <CustomButton
          title="Back"
          type="text"
          // loading={false}
          // disabled={false}
          icon={<LeftOutlined />}
          onClick={() => props.history.goBack()}
        />
        <CustomButton
          title="Verify"
          type="primary"
          disabled={false}
          loading={false}
          onClick={() => alert("het")}
        />
        <ForwardButton
          disabled={true}
          loading={true}
          onClick={() => alert("het")}
        />
        <ForwardButton
          disabled={false}
          // loading={false}
          onClick={() => alert("het")}
        />
      </Space>
    </Space>
  );
};

export default Components;
