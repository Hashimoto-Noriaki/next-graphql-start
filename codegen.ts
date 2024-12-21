import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_ENDPOINT || "http://localhost:3000/api/graphql",
  documents: "src/**/*.tsx", // GraphQL クエリが含まれる TypeScript ファイルのパス
  generates: {
    "src/types/graphql/": {
      preset: "client", // Apollo Client 用
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"], // 必要なプラグイン
    },
  },
};

export default config;
