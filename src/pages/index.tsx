import { gql, useQuery } from '@apollo/client';

const GET_HELLO_AND_USER = gql`
  query GetHelloAndUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_HELLO_AND_USER, {
    variables: { id: "1" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {data.getUser.name}</p>
      <p>Email: {data.getUser.email}</p>
    </div>
  );
}
