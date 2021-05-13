type IssuesType = Array<{
    body: string
    createdAt: string
    title: string
    url: string
    labels: {
        nodes: Array<{
            name: string
        }>
    }
}>

type CountsType = {
    [key: string]: number
}

export const removeDuplicates = (items: string[]) => {
    return items.filter((x, i, self) => {
        return self.indexOf(x) === i
    })
}

export const getLabels = (issues: IssuesType) => {
    let labels = []
    for (const issue of issues) {
        for (const label of issue.labels.nodes) {
            labels.push(label.name)
        }
    }
    return labels
}

export const getCounts = (items: string[]) => {
    let counts: CountsType = {}
    for (let i = 0; i < items.length; i++) {
        const key = items[i]
        counts[key] = counts[key] ? counts[key] + 1 : 1
    }
    return counts
}

export const sortCounts = (items: CountsType) => {
    const sorted = Object.entries(items).sort((a, b) => {
        if (Number(a[1]) > Number(b[1])) return -1
        if (Number(a[1]) < Number(b[1])) return 1
        return 0
    })
    return Object.fromEntries(sorted)
}
