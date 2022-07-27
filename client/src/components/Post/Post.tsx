import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { Link } from "react-router-dom";

type PostProps = {
  id?: number | string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image: string;
};

const Post: React.FC<PostProps> = ({
  id,
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
            ? moment(new Date(updatedAt)).fromNow()
            : moment(new Date(createdAt)).fromNow()}
        </Card.Text>
        <Link to={`/post/${id}`} className="btn btn-primary">
          Read more
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Post;
