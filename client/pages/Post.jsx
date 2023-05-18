import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRequest } from "../hooks";
import { fetchPost } from "../graphql/queries";

const Post = () => {
  const { id } = useParams();
  const { graphQLClient } = useRequest();

  const { isLoading, data, isError } = useQuery({
    queryKey: ["POSTS", id],
    queryFn: async () => {
      const res = await graphQLClient.request(...fetchPost(Number(id)));
      return res;
    },
  });

  if (isLoading) return <div>Loading post...</div>;

  if (isError) return <div>Error fetching post...</div>;

  return (
    <div className="post">
      <h3>{data.post.title}</h3>
      <p>{data.post.body}</p>
    </div>
  );
};

export default Post;
