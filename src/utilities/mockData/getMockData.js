import * as data from "./data"

const getMockData = (name) => {
    if (name in data.default) {
        return data.default[name]
    } else {
        return [{}]
    }
}

export const getAllMockName = () => {
    return Object.keys(data)
}

export default getMockData
