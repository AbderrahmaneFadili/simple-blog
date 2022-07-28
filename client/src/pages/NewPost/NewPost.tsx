import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { ObjectShape } from "yup/lib/object";
import { useAddNewPostMutation } from "../posts.slice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

type Values = {
  title: string;
  content: string;
};

function NewPost() {
  const [addNewPost] = useAddNewPostMutation();

  const addPostFormik: FormikProps<Values> = useFormik<Values>({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: Yup.object<ObjectShape>({
      title: Yup.string().required("Post title is required !"),
      content: Yup.string().required("Post description is required !"),
    }),
    onSubmit: (values) => {
      console.log(values);
      addNewPost({
        post: {
          id: uuidv4(),
          title: values.title,
          content: values.content,
          createdAt: new Date().toString(),
          updatedAt: "",
        },
      })
        .unwrap()
        .then(() => {
          toast.success("One post is added");
          addPostFormik.resetForm();
        })
        .catch(() => {
          toast.error("Add post is failed");
        });
    },
  });

  return (
    <Container>
      <h1 className="display-1">Add New</h1>
      <Form method="post" onSubmit={addPostFormik.handleSubmit}>
        <Form.Group>
          <Form.Control
            id="title"
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
            id="content"
            name="content"
            onChange={addPostFormik.handleChange}
            onBlur={addPostFormik.handleBlur}
            value={addPostFormik.values.content}
            size="lg"
            type="text"
            placeholder="Post content"
            style={{ height: 200 }}
            className="mb-2"
          />
          {addPostFormik.touched.content && addPostFormik.errors.content ? (
            <Form.Text className="text-danger">
              {addPostFormik.errors.content}
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
