import React from "react";
import Card from "react-bootstrap/Card";
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
    <Card className="bg-dark text-white">
      <Card.Img style={{ opacity: 0.5 }} src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description.substring(0, description.length / 2)}
        </Card.Text>
        <Card.Text>
          {updatedAt
            ? moment(updatedAt).fromNow()
            : moment(createdAt).fromNow()}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Post;
