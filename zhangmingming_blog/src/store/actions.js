import * as types from './types.js'

const actions = {
    add ({commit, state}) {
        console.log(state);
        commit(types.INCREMENT);
    }
}

export default actions