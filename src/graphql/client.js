import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";



const end_point = "https://api.graph.cool/simple/v1/cjt0yzpv51lx301752eumwhz1";
const httpLink = new HttpLink({ uri: end_point });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


export default client;