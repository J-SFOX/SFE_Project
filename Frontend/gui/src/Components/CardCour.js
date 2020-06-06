import React from "react";
import { List, Button } from "antd";
import { BookFilled } from "@ant-design/icons";
// import { Link } from "react-router-dom";

function CardCour(props) {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item
            className="border-bottom"
            extra={
              item.Video_C ? (
                <a href={item.Video_C}>
                  <video width="300" height="200" controls>
                    <source src={item.Video_C} />
                  </video>
                </a>
              ) : null
            }
          >
            <List.Item.Meta
              avatar={<BookFilled />}
              title={item.Titre_C}
              description={
                item.PDF_C ? (
                  <div>
                    <p>Pdf du cour</p>
                    <a href={item.PDF_C}>
                      <Button type="primary">Telecharger PDF</Button>
                    </a>
                  </div>
                ) : (
                  <p>ce cours n'a pas de fichier</p>
                )
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default CardCour;
