
import fs from 'fs'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import { schema } from './db/schema.js'

const makeRouter = (argv) => {
    let router = express.Router();

    router.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true, }));

    router.get('/api/example/:n', function (req, res) {
        console.log(`GET: /api/example/ ${req.params.n}`);

        try {
          const example = { "name": 'Bob', "Address": '1 Infinite Loop Cupertino, CA 95014' }
          res.json(example)
        } catch (err) {
          res.status(500).send("Error:"+err);
          console.error(err)
        }
      })

    return router
}

export default makeRouter;
