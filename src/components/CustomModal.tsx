import React from "react";
import { Modal, Button, Typography, Divider, Space } from "antd";
interface Props {}

const renderContent = (
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        // height: "100%",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Typography.Text strong>Do you want to click again?</Typography.Text>
      <Typography.Text className="text-center" style={{marginTop:10}}>
        Click you citizenship id again if it is not clear or different than real
        one.
      </Typography.Text>
      <Divider />
      <Space
        direction="horizontal"
        align="center"
        style={{ justifyContent: "space-around", width: "100%" }}
      >
        <div className="modalButton" onClick={() => setIsVisible(false)}>
          <Typography.Text strong>No</Typography.Text>
        </div>
        <div className="modalButton" onClick={() => alert("yes")}>
          <Typography.Text strong>Yes</Typography.Text>
        </div>
      </Space>
    </div>
  );
};

const CustomModal2 = (props: Props) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setIsVisible(true)}>
        Open Modal
      </Button>
      <Modal
        centered
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
        footer={null}
        closable={false}
        className="modalContainer"
        width={300}
        maskClosable={true}
        style={{ height: 170 }}
      >
        {renderContent(setIsVisible)}
      </Modal>
    </div>
  );
};

export default CustomModal2;
