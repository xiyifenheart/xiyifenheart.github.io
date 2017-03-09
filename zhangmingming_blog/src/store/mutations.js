import {
    INCREMENT
} from './types.js'

const mutations = {
    [INCREMENT] (state) {
        state.count++
    }
}

export default mutations