import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <Container fluid>
          <h1 className="display-3 fw-bold">Simple Blog</h1>
          <p className="col-md-8 fs-4">
            Simple Blog is a web application to Create and share posts
          </p>
          <Link to="/blog" className="btn btn-primary btn-lg">
            See the latest posts
          </Link>
        </Container>
      </div>
    </Container>
  );
};

export default Home;
