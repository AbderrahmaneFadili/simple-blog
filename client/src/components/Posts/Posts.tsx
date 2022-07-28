import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Post as PostType } from "../../pages/types";
import Post from "../Post/Post";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { hide } from "./Modal.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

type PostsProps = {
  posts: PostType[];
};

const Posts: React.FC<PostsProps> = ({ posts }): JSX.Element => {
  const { modalShow } = useSelector((state: AppState) => state.modal);

  const dispatch = useDispatch();

  const modalActions = bindActionCreators({ hide }, dispatch);

  const hideModal = () => {
    modalActions.hide();
  };

  return (
    <Row>
      {posts.map((post, i) => {
        return (
          <Col key={i} md={4} className="mb-5">
            <Post
              id={post.id}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
          </Col>
        );
      })}

      {/* Confirmation Modal */}
      <Modal show={modalShow} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to remove this post !!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={hideModal}>
            cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default Posts;
