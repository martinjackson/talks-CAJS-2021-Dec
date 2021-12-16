

  import fs from 'fs'

  import { makeExecutableSchema } from '@graphql-tools/schema'
  
  import { resolvers } from './resolvers.js'
  import { getQueryResult, execDbCmd } from './db-specific-mongo.js'

  const typeDefs = fs.readFileSync('./db/schema.graphql',{encoding:'utf8', flag:'r'})

  // Build the schema with Type Definitions and Resolvers
  export const schema = makeExecutableSchema({typeDefs, resolvers});

