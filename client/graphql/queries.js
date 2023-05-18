import { gql } from "graphql-request";

export const fetchPosts = () => gql`
  query {
    posts {
      id
      title
    }
  }
`;

export const fetchPost = (id) => [
    gql`
      query ($id: Int!) {
        post(id: $id) {
          title
          body
          id
        }
      }
    `,
    { id },
  ];