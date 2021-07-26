import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"; //server component handling graphQL requests

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // link to the graphql server
  cache: new InMemoryCache()
});


// for todos jsonplaceholder testing:
// const TODOS=gql`
//     query GetTodo{
//       todo{
//         title
//         completed
//       }
//     }
// `

// function Display(){
//   const{loading, error, data}=useQuery (TODOS)
//   if(loading) return <p>Laoding....</p>
//   if(error) return <p>Error occurs</p>
    
//   if(loading || !data) return <div>loading...</div>
//   return(
//     <div>
//       <pre>{JSON.stringify(data,null,2)}</pre>
//     </div>
//   )

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
