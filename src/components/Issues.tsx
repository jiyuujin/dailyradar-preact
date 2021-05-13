import { h } from 'preact'
import { Query } from 'react-apollo'
import { searchQuery } from '../graphql/issue'
import { getLabels, getCounts, sortCounts } from '../services/utilService'

const Issues = () => {
    return (
        <section>
            <h1>Daily Issues</h1>
            <Query query={searchQuery}>
                {({ loading, data }: any) => {
                    if (loading) return <p>Loading...</p>
                    const issues = data.viewer.repository?.issues?.nodes
                    const labels = getLabels(issues)
                    const counts = sortCounts(getCounts(labels))
                    return (
                        <div className="issues">
                            {Object.keys(counts).map((label: string) => {
                                return (
                                    <a
                                        key={label}
                                        href={`https://github.com/jiyuujin/dailyradar/labels/${label}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="issue"
                                    >
                                        {`${label} (${counts[label]})`}
                                    </a>
                                )
                            })}
                        </div>
                    )
                }}
            </Query>
        </section>
    )
}

export default Issues
