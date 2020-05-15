import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
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
            title={
              <Link to={`/admin/dashboard/courPanel/${item.id}`}>
                {item.Titre_C}
              </Link>
            }
          />
        </List.Item>
      )}
    />
  );
}
export default Cour;
