import { GraphQLClient } from "graphql-request"

const API_URL = `http://localhost:4000/graphql`

const useRequest = () => {
    const graphQLClient = new GraphQLClient(API_URL)

    return { graphQLClient };
}

export default useRequest