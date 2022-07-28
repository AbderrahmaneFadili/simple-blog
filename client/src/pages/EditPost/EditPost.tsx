import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetOnePostQuery, useUpdatePOstMutation } from "../posts.slice";
import Form from "react-bootstrap/Form";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { ObjectShape } from "yup/lib/object";
import { Button, Container, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";

type Values = {
  title: string;
  content: string;
};

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isFetching } = useGetOnePostQuery({ id: id as string });

  const [updatePost] = useUpdatePOstMutation();

  const editPostFormik: FormikProps<Values> = useFormik<Values>({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: Yup.object<ObjectShape>({
      title: Yup.string().required("Post title is required !"),
      content: Yup.string().required("Post description is required !"),
    }),
    onSubmit: (values) => {
      updatePost({
        id: id as string,
        title: values.title,
        content: values.content,
        createdAt: "",
        updatedAt: new Date().toString(),
      })
        .then(() => toast.success("Post is edited"))
        .catch(() => toast.error("Post is not edited "));
    },
  });

  useEffect(() => {
    if (post) {
      editPostFormik.setFieldValue("title", post?.title);
      editPostFormik.setFieldValue("content", post?.content);
    }
  }, [post]);

  console.log(post);

  return (
    <Container>
      <h1 className="display-1">Edit</h1>
      <>
        {/* {isFetching && (
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
        )} */}
        {post && (
          <Form method="post" onSubmit={editPostFormik.handleSubmit}>
            <Form.Group>
              <Form.Control
                id="title"
                name="title"
                onChange={editPostFormik.handleChange}
                onBlur={editPostFormik.handleBlur}
                value={editPostFormik.values.title}
                size="lg"
                type="text"
                placeholder="Post title"
                className="mb-2"
              />
              {editPostFormik.touched.title && editPostFormik.errors.title ? (
                <Form.Text className="text-danger">
                  {editPostFormik.errors.title}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control
                as="textarea"
                id="content"
                name="content"
                onChange={editPostFormik.handleChange}
                onBlur={editPostFormik.handleBlur}
                value={editPostFormik.values.content}
                size="lg"
                type="text"
                placeholder="Post content"
                style={{ height: 200 }}
                className="mb-2"
              />
              {editPostFormik.touched.content &&
              editPostFormik.errors.content ? (
                <Form.Text className="text-danger">
                  {editPostFormik.errors.content}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-3">
              <Button
                type="submit"
                size="lg"
                className="w-100"
                variant="primary"
              >
                Edit
              </Button>
            </Form.Group>
          </Form>
        )}
      </>
    </Container>
  );
};
export default EditPost;
