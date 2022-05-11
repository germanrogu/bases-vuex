import { createStore } from "vuex";
import getRandomInt from "@/helpers/getRandomInt";

/**
 * * Se hace el export default para que sea accesible desde el index.js
 * * Para utilizar el store, hay que incluirlo como un plugin en el main.js
 * * state - 
 * * mutations - metodos que modifican el state sincrono
 * * actions - metodos que pueden ser asincronos
 */
export default createStore({

    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        incrementBy(state, value) {
            state.count += value;
            state.lastMutation = 'incrementBy' + value;
        }
    },
    actions: {
        async incrementRandomInt(context) {
            const randomInt = await getRandomInt();
            context.commit('incrementBy', randomInt);
        }
    }

})