import { ApolloServer, gql } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';

// スキーマ定義
const typeDefs = gql`
  type Query {
    hello: String
    getUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

// ダミーデータ
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

// リゾルバー
const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    getUser: (_: unknown, { id }: { id: string }) => users.find(user => user.id === id),
  },
};

// Apollo Server インスタンスの作成
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

// API ハンドラ
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

// Next.js の API Routes の設定
export const config = {
  api: {
    bodyParser: false,
  },
};
