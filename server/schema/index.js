const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require("graphql");
const posts = require('../mocks/posts.json')

const Posts = JSON.parse(JSON.stringify(posts))

const PostType = new GraphQLObjectType({
    name: "Posts",
    description: "Posts list",
    fields: () => ({
      id: { type: GraphQLNonNull(GraphQLInt) },
      title: { type: GraphQLString },
      body: { type: GraphQLString },
      userId: { type: GraphQLNonNull(GraphQLInt) },
    }),
  });

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: "A list of all the queries in the application",
        fields: () => ({
            posts: {
                type: new GraphQLList(PostType),
                resolve: () => Posts
            },
            post: {
                type: PostType,
                args: {
                    id: { type: GraphQLInt },
                },
                resolve: (parent, args) => {
                    return Posts.find((post) => post.id === args.id)
                }
            }
        })
    }),
})

module.exports = schema