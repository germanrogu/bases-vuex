import getRandomInt from "@/helpers/getRandomInt";

/**
 * * Se hace el export default para que sea accesible desde el index.js
 * * Para utilizar el store, hay que incluirlo como un plugin en el main.js
 * * state - 
 * * mutations - metodos que modifican el state sincrono
 * * actions - metodos que pueden ser asincronos
 * * getters - metodos que devuelven el state con alguna transformacion como las computed
 */

const counterStore = {

    namespaced: true,

    state: () => ({
        count: 1,
        lastMutation: 'none',
        isLoading: false,
    }),
    mutations: {
        increment(state) {
            state.count++;
        },
        incrementBy(state, value) {
            state.count += value;
            state.lastMutation = 'incrementBy' + value;
        },
        setLoading(state, value) {
            state.isLoading = value;
        }
    },
    actions: {
        async incrementRandomInt({ commit }) {
            commit('setLoading', true);
            const randomInt = await getRandomInt();
            commit('incrementBy', randomInt);
            commit('setLoading', false);
        }
    },
    getters: {
        squareCount(state) {
            return state.count * state.count;
        }

    }
}

export default counterStore;