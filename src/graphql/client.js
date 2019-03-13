import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {setContext} from "apollo-link-context";
import {  getToken } from "../utils/user";
const end_point = "https://api.graph.cool/simple/v1/cjt0yzpv51lx301752eumwhz1";



const authLink = setContext(async (req, { headers }) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  };
});



const httpLink = new HttpLink({ uri: end_point });
const link = authLink.concat(httpLink);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});


export default client;