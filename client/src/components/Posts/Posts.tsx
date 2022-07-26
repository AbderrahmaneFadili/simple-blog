import React from "react";
import { Row, Col } from "react-bootstrap";
import Post from "../Post/Post";

const posts = [
  {
    id: 1,
    title: "Post One",
    description:
      "Nulla irure enim exercitation ipsum occaecat est ipsum culpa consequat consectetur. Et enim excepteur laboris duis culpa eiusmod tempor. Duis dolore tempor non do et proident ut mollit. Ea nisi velit incididunt laborum veniam ex velit cupidatat.",
    image: "https://source.unsplash.com/random/300x300/?book",
    createdAt: "Tue Jul 26 2022 18:21:09 GMT+0100 (GMT+02:00)",
    updatedAt: "",
  },
  {
    id: 2,
    title: "Post Two",
    description:
      "Nulla irure enim exercitation ipsum occaecat est ipsum culpa consequat consectetur. Et enim excepteur laboris duis culpa eiusmod tempor. Duis dolore tempor non do et proident ut mollit. Ea nisi velit incididunt laborum veniam ex velit cupidatat.",
    image: "https://source.unsplash.com/random/300x300/?learn",
    createdAt: "Tue Jul 26 2022 18:21:09 GMT+0100 (GMT+02:00)",
    updatedAt: "",
  },
  {
    id: 3,
    title: "Post Three",
    description:
      "Nulla irure enim exercitation ipsum occaecat est ipsum culpa consequat consectetur. Et enim excepteur laboris duis culpa eiusmod tempor. Duis dolore tempor non do et proident ut mollit. Ea nisi velit incididunt laborum veniam ex velit cupidatat.",
    image: "https://source.unsplash.com/random/300x300/?books",
    createdAt: "Tue Jul 26 2022 18:21:09 GMT+0100 (GMT+02:00)",
    updatedAt: "",
  },
  {
    id: 4,
    title: "Post One",
    description:
      "Nulla irure enim exercitation ipsum occaecat est ipsum culpa consequat consectetur. Et enim excepteur laboris duis culpa eiusmod tempor. Duis dolore tempor non do et proident ut mollit. Ea nisi velit incididunt laborum veniam ex velit cupidatat.",
    image: "https://source.unsplash.com/random/300x300/?book",
    createdAt: "Tue Jul 26 2022 18:21:09 GMT+0100 (GMT+02:00)",
    updatedAt: "",
  },
  {
    id: 5,
    title: "Post Two",
    description:
      "Nulla irure enim exercitation ipsum occaecat est ipsum culpa consequat consectetur. Et enim excepteur laboris duis culpa eiusmod tempor. Duis dolore tempor non do et proident ut mollit. Ea nisi velit incididunt laborum veniam ex velit cupidatat.",
    image: "https://source.unsplash.com/random/300x300/?learn",
    createdAt: "Tue Jul 26 2022 18:21:09 GMT+0100 (GMT+02:00)",
    updatedAt: "",
  },
  {
    id: 6,
    title: "Post Three",
    description:
      "Nulla irure enim exercitation ipsum occaecat est ipsum culpa consequat consectetur. Et enim excepteur laboris duis culpa eiusmod tempor. Duis dolore tempor non do et proident ut mollit. Ea nisi velit incididunt laborum veniam ex velit cupidatat.",
    image: "https://source.unsplash.com/random/300x300/?books",
    createdAt: "Tue Jul 26 2022 18:21:09 GMT+0100 (GMT+02:00)",
    updatedAt: "",
  },
];

const Posts = () => {
  return (
    <Row>
      {posts.map((post) => {
        return (
          <Col key={post.id} md={4}>
            <Post
              image={post.image}
              title={post.title}
              description={post.description}
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
