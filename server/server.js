const Koa = require('koa');
const mount = require('koa-mount');
const cors = require('@koa/cors');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = new Koa();

app.use(cors());

app.use(mount('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
})));

app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));