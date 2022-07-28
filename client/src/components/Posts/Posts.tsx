import React from "react";
import { Row, Col } from "react-bootstrap";
import { Post as PostType } from "../../pages/types";
import Post from "../Post/Post";

type PostsProps = {
  posts: PostType[];
};

const Posts: React.FC<PostsProps> = ({ posts }): JSX.Element => {
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
    </Row>
  );
};

export default Posts;
