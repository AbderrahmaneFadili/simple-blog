import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import moment from "moment";

const post = {
  id: 1,
  title: "Post One",
  description:
    "Nulla irure enim exercitation ipsum occaecat est ipsum culpa consequat consectetur. Et enim excepteur laboris duis culpa eiusmod tempor. Duis dolore tempor non do et proident ut mollit. Ea nisi velit incididunt laborum veniam ex velit cupidatat.",
  image: "https://source.unsplash.com/random/800x800/?book",
  createdAt: "Tue Jul 26 2022 18:21:09 GMT+0100 (GMT+02:00)",
  updatedAt: "",
};

const PostDetails = () => {
  return (
    <Container style={{ height: 900 }}>
      <Image
        src={post.image}
        rounded
        style={{ width: "100%", objectFit: "cover", height: 500 }}
      />
      <div className="d-flex justify-content-end p-3">
        <div>
          <p className="fs-5">
            {post.updatedAt
              ? moment(new Date(post.updatedAt)).fromNow()
              : moment(new Date(post.createdAt)).fromNow()}
          </p>
        </div>
      </div>
      <h1 className="display-1 my-2">{post.title}</h1>
      <p className="my-4 fs-5">{post.description}</p>
    </Container>
  );
};

export default PostDetails;
