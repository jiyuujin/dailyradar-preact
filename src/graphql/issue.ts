import gql from 'graphql-tag'

export const searchQuery = gql`
    query {
        viewer {
            login
            repository(name: "dailyradar") {
                description
                createdAt
                name
                issues(
                    last: 100
                    orderBy: { field: CREATED_AT, direction: DESC }
                ) {
                    nodes {
                        body
                        createdAt
                        title
                        url
                        labels(last: 10) {
                            nodes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`
