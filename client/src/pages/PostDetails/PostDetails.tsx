import { Container, Spinner } from "react-bootstrap";
import moment from "moment";
import { useGetOnePostQuery } from "../posts.slice";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetOnePostQuery({ id: id as string });

  return (
    <Container>
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
      {data && (
        <div className="d-flex flex-column  p-3">
          <h1 className="display-1 my-2">{data.title}</h1>
          <p className="my-4 fs-5">{data.content}</p>
          <div>
            <p className="fs-5">
              {data.updatedAt
                ? `${moment(new Date(data.updatedAt)).fromNow()} updated`
                : moment(new Date(data.createdAt)).fromNow()}
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default PostDetails;
