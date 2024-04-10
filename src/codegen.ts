import { printSchema } from 'graphql';
import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from './index.ts';

const config: CodegenConfig = {
  schema: printSchema(schema),
  emitLegacyCommonJSImports: false,
  generates: {
    './src/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
  config: {
    scalars: {
      Date: 'Date',
      UUID: 'string',
    },
  },
};

// eslint-disable-next-line import/no-default-export -- This is a config file
export default config;
