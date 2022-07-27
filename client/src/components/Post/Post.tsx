import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { Link } from "react-router-dom";

type PostProps = {
  id?: number | string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const Post: React.FC<PostProps> = ({
  id,
  title,
  content,
  createdAt,
  updatedAt,
}): JSX.Element => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content.substring(0, content.length / 2)}</Card.Text>
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
