import React from "react";
import { List } from "antd";
// import { Link } from "react-router-dom";
import { BookFilled } from "@ant-design/icons";
function Cour(props) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<BookFilled />}
            title={item.Titre_C}
            // description={item.description}
          />
        </List.Item>
      )}
    />
  );
}
export default Cour;
