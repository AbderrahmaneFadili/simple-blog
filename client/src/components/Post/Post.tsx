import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import { show } from "../Posts/Modal.slice";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

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
  const dispatch = useDispatch();

  const modalActions = bindActionCreators({ show }, dispatch);

  const modalShow = () => {
    modalActions.show();
  };

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
        <Link to={`/post/${id}`} className="btn btn-secondary">
          Read more
        </Link>
        <div
          className="d-inline-flex justify-content-between"
          style={{ position: "absolute", right: 16, width: 90 }}
        >
          <Button variant="primary">
            <BsFillPencilFill style={{ cursor: "pointer" }} />
          </Button>
          <Button variant="danger" onClick={modalShow}>
            <BsTrashFill style={{ cursor: "pointer" }} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
