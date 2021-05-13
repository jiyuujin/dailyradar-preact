import { h, render } from 'preact'
import { ApolloProvider } from 'react-apollo'
import './index.css'
import '@nekohack/normalize.css/dist/index.css'
import App from './App'
import { apolloClient } from './plugins/apollo'

render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')!
)
