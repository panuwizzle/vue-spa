<template>
  <div id="app">
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <router-link v-bind:to="'/param'">Param Link</router-link>
    <img src="./assets/logo.png">
    <router-view></router-view>
    {{ count }}
  <input type="button" value="+" @click="appincrease()" />
  <input type="button" value="-" @click="appdecrease()" />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    appincrease () {
      this.$store.commit('increment')
    },
    appdecrease () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
