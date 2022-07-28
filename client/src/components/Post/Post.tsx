import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Link, useNavigate, To } from "react-router-dom";
import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import { useDeletePostMutation } from "../../pages/posts.slice";
import toast from "react-hot-toast";

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
  const [deletePost] = useDeletePostMutation();

  const removePost = () => {
    deletePost({ id: id as string })
      .unwrap()
      .then(() => {
        toast.success("Post is deleted");
      })
      .catch(() => {
        toast.error("Post is not deleted");
      });
  };

  const navigate = useNavigate();

  const to = (path: To) => navigate(path);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content.substring(0, content.length / 2)}</Card.Text>
        <Card.Text>
          {updatedAt
            ? `${moment(new Date(updatedAt)).fromNow()} updated`
            : moment(new Date(createdAt)).fromNow()}
        </Card.Text>
        <Link to={`/post/${id}`} className="btn btn-secondary">
          Read more
        </Link>
        <div
          className="d-inline-flex justify-content-between"
          style={{ position: "absolute", right: 16, width: 90 }}
        >
          <Button variant="primary" onClick={() => to(`/post/edit/${id}`)}>
            <BsFillPencilFill style={{ cursor: "pointer" }} />
          </Button>
          <Button variant="danger" onClick={removePost}>
            <BsTrashFill style={{ cursor: "pointer" }} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
