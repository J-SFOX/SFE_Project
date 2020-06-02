import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { VideoCameraAddOutlined } from "@ant-design/icons";
function Event(props) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<VideoCameraAddOutlined />}
            title={
              <Link to={`/admin/dashboard/eventPanel/${item.id}`}>
                {item.Titre_E} version: {item.Version_E}
              </Link>
            }
          />
        </List.Item>
      )}
    />
  );
}
export default Event;
