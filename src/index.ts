import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import SchemaBuilder from '@pothos/core';

const builder = new SchemaBuilder({});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name || 'World'}`,
    }),
  }),
});

export const schema = builder.toSchema({});

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('Visit http://localhost:4000/graphql');
});

const a = await new Promise(() => setTimeout(() => {}, 1000));
