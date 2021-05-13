import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

const fetch = require('node-fetch')

const GITHUB_API_V4: string = 'https://api.github.com/graphql'

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_ACCESS_TOKEN}`,
            Accept: 'application/vnd.github.v4.idl',
        },
    })
    return forward(operation)
})

const httpLink = new HttpLink({
    uri: GITHUB_API_V4,
    fetch,
})

export const apolloClient = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
})
