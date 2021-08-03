import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client"; //server component handling graphQL requests

import HomePage from './pages/HomePage';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

// data fetch testing
// client
//   .query({
//     query: gql`
//       query GetTodo{
//         todo{
//           title
//           completed
//         }
//       }
//   `
// })
// .then(result=>console.log(result))
// interface TodoType {
//   title: string;
//   completed: boolean;
// }
// interface TodoTypeData {
//   todoType: TodoType[];
// }


const TODOS = gql`
    query GetTodo{
      todo{
        title
        completed
      }
    }
`

function Display() {
  const { loading, error, data } = useQuery(TODOS)
  if (loading) return <p>Laoding....</p>
  if (error) return <p>Error occurs</p>

  if (loading || !data) return <div>loading...</div>
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )

}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HomePage />
        {/* <h1>Lou Team</h1> */}
        <Display />
      </div>
    </ApolloProvider>
  );
}

export default App;
