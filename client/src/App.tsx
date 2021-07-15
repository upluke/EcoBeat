import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

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
interface TodoType {
  title: string;
  completed: boolean;
}
interface TodoTypeData {
  todoType: TodoType[];
}
 

const TODOS=gql`
    query GetTodo{
      todo{
        title
        completed
      }
    }
`

// function Display(){
//   const{loading, error, data}=useQuery <TodoTypeData> (TODOS)
//   if(loading) return <p>Laoding....</p>
//   if(error) return <p>Error occurs</p>
   
//   console.log(data)
//   return data?.todo.map(({ title, completed }) => (
//     <div key={title}>
//       <p>
//         {title}: {completed}
//       </p>
//     </div>
//   ))

// }

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <h1>Lou Team</h1>
           
      </div>
    </ApolloProvider>
  );
}

export default App;
