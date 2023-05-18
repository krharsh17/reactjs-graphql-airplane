import { useQuery } from "react-query";
import { useRequest } from "../hooks";
import { fetchPosts } from "../graphql/queries";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { graphQLClient } = useRequest();
  const navigate = useNavigate();

  const { isLoading, data, isError } = useQuery({
    queryKey: "POSTS",
    queryFn: async () => {
      const res = await graphQLClient.request(fetchPosts());
      return res;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching posts...</div>;

  return (
    <>
      <h1>Posts</h1>

      {data?.posts.map((post) => (
        <div key={post.id} className="posts" onClick={() => navigate(`/posts/${post.id}`)}>
          <h3>{post.id}</h3>
          <p>{post.title}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;