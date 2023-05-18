const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require('./schema')
const app = express()
const cors = require("cors")

app.use(
    cors(),
)

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema
    })
)



const PORT = 4000

app.listen(PORT, () => console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`))