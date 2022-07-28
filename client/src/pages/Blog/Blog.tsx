import React from "react";
import { Container } from "react-bootstrap";
import Posts from "../../components/Posts/Posts";
import { useGetPostsQuery } from "../posts.slice";
import Spinner from "react-bootstrap/Spinner";

const Blog = () => {
  const { isFetching, data } = useGetPostsQuery();

  return (
    <Container>
      <h1 className="display-1 my-3">All posts</h1>
      {isFetching && (
        <div
          style={{ height: 300 }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner
            style={{
              width: 60,
              height: 60,
            }}
            animation="border"
            variant="primary"
          />
        </div>
      )}
      {data && <Posts posts={data} />}
    </Container>
  );
};

export default Blog;
