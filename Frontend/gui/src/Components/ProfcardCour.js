import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { List} from "antd";
import { BookFilled } from "@ant-design/icons";
import { Button } from "react-bootstrap";

function ProfCour(props) {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item
            className="border-bottom"
            extra={
              <div className="mr-5">
                <Link to={`/amprof/${item.id}`}>
                  <Button variant="success">Plus d'info</Button>
                </Link>
              </div>
            }
          >
            <List.Item.Meta avatar={<BookFilled />} title={item.Titre_C} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default ProfCour;
