import { createStore } from "vuex";
import counterStore from "./counter";

/**
 * * Se hace el export default para que sea accesible desde el index.js
 * * Para utilizar el store, hay que incluirlo como un plugin en el main.js
 * * state - 
 * * mutations - metodos que modifican el state sincrono
 * * actions - metodos que pueden ser asincronos
 * * getters - metodos que devuelven el state con alguna transformacion como las computed
 */
export default createStore({

    modules: {
        counter: counterStore
    }

})