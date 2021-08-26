import React from "react";
import { Menu, Dropdown, Typography } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";

interface dropdownData {
  id: string;
  value: string;
}

interface Props {
  value: string;
  data: dropdownData[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const menu = (
  data: dropdownData[],
  setValue: React.Dispatch<React.SetStateAction<string>>,
  currentValue: string
) => {
  return (
    <Menu
     className="dropdownMenu"
    >
      {data.map((item) => {
        const { id, value } = item;
        return (
          <Menu.Item key={id}>
            <div
              onClick={() => setValue(item.value)}
              className={`dropdownItem ${
                value === currentValue && "dropdownItem-active"
              }`}
            >
              <div className="dropdownTextContainer">
                <Typography.Text
                  className={` ${
                    value === currentValue && "dropdownText-active"
                  }`}
                >
                  {value}
                </Typography.Text>
                {value === currentValue && <CheckOutlined />}
              </div>
            </div>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

const CustomDropDown = ({ value, data, setValue }: Props) => {
  return (
    <div className="dropdownContainer">
      <Dropdown overlay={() => menu(data, setValue, value)} trigger={["click"]}>
        <div onClick={(e) => e.preventDefault()} className="dropdownView">
          <Typography.Text>{value}</Typography.Text>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};

CustomDropDown.defaultProps = {
  value: "",
};

export default CustomDropDown;
