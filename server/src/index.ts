import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

require('dotenv').config();

// TODO: We will not pass dataSources via context because this does not work with subscriptions
// See https://github.com/apollographql/apollo-server/issues/1526
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
