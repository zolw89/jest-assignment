const analyzeArray = (arr) => {
    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: length(arr)
    }
}

const average = (arr) => {
    return arr.reduce((sum, curr) => sum + curr) / arr.length
}

const min = (arr) => {
    return Math.min(...arr)
}

const max = (arr) => {
    return Math.max(...arr)
}

const length = (arr) => {
    return arr.length
}

export default analyzeArray