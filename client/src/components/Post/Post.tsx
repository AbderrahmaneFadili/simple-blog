import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";

type PostProps = {
  id?: number | string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image: string;
};

const Post: React.FC<PostProps> = ({
  title,
  description,
  createdAt,
  updatedAt,
  image,
}): JSX.Element => {
  return (
    <Card>
      <Card.Img
        style={{ height: 240, objectFit: "cover" }}
        variant="top"
        src={image}
        alt="Card image"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description.substring(0, description.length / 2)}
        </Card.Text>
        <Card.Text>
          {updatedAt
            ? moment(updatedAt).fromNow()
            : moment(createdAt).fromNow()}
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
