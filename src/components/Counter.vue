<template>
  <h1>Counter Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">Increment +1</button>
  <button @click="incrementBy(5)">Increment +5</button>
  <button @click="randomInt">Increment Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>mapState: {{ lastMutation }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

/**
 * * Podemos usar los 3 formas para acceder a los datos del store
 * * Para hacer llamado de la mutation del store se utiliza commit
 * * mapActions me ayuda a utilizar las actions del store 
 */
export default {
  name: "Counter",
  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState({
      count: (state) => state.count,
      lastMutation: (state) => state.lastMutation,
    }),
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementBy(value) {
      this.$store.commit("incrementBy", value);
    },
    ...mapActions({
      randomInt: "incrementRandomInt",
    }),
    //...mapActions(["incrementRandomInt"]),
    // incrementRandomInt(){
    //   this.$store.dispatch("incrementRandomInt");
    // }
  },
};
</script>

<style>
</style>