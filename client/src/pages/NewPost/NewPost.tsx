import React from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { ObjectShape } from "yup/lib/object";

type Values = {
  title: string;
  description: string;
};

function NewPost() {
  const addPostFormik: FormikProps<Values> = useFormik<Values>({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object<ObjectShape>({
      title: Yup.string().required("Post title is required !"),
      description: Yup.string().required("Post description is required !"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <h1 className="display-1">Add New</h1>
      <Form method="post" onSubmit={addPostFormik.handleSubmit}>
        <Form.Group>
          <Form.Control
            name="title"
            onChange={addPostFormik.handleChange}
            onBlur={addPostFormik.handleBlur}
            value={addPostFormik.values.title}
            size="lg"
            type="text"
            placeholder="Post title"
            className="mb-2"
          />
          {addPostFormik.touched.title && addPostFormik.errors.title ? (
            <Form.Text className="text-danger">
              {addPostFormik.errors.title}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Control
            as="textarea"
            name="description"
            onChange={addPostFormik.handleChange}
            onBlur={addPostFormik.handleBlur}
            value={addPostFormik.values.description}
            size="lg"
            type="text"
            placeholder="Post description"
            style={{ height: 200 }}
            className="mb-2"
          />
          {addPostFormik.touched.description &&
          addPostFormik.errors.description ? (
            <Form.Text className="text-danger">
              {addPostFormik.errors.description}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group className="mt-3">
          <Button type="submit" size="lg" className="w-100" variant="primary">
            Add
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default NewPost;
