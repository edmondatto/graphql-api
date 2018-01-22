const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const MeType = require('../types/me');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    me: {
      type: MeType,
      args: {
        key: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: () => ({
        id: 33,
        email: 'edmond@gmail.com'
      }),
    }
  }
});

const nameContestsSchema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: ...
});

module.exports = nameContestsSchema;