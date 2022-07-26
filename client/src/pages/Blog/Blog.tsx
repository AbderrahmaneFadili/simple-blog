import React from "react";
import { Container } from "react-bootstrap";
import Posts from "../../components/Posts/Posts";

const Blog = () => {
  return (
    <Container>
      <h1 className="display-1 my-3">All posts</h1>
      <Posts />
    </Container>
  );
};

export default Blog;
