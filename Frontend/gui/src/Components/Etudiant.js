import React from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";

function Etudiant(props) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={
              <Link to={`/admin/dashboard/etudPanel/${item.id}`}>
                {item.E_fname}
              </Link>
            }
            // description={item.id}
          />
        </List.Item>
      )}
    />
  );
}
export default Etudiant;
