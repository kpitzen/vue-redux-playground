<template lang="pug">
  Provider(:store="store" :mapStateToProps="mapStateToProps")
    template(#default="{ isConnected }")
      div(id="app")
        img(alt="Vue logo" src="./assets/logo.png")
        HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
        SimpleDisplay(:isConnected="isConnected")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import SimpleDisplay from './components/SimpleDisplay.vue';
import configureStore from "./store/configureStore";
import initialApplicationState from "./reducers/initialState";
import { RootState } from './reducers';
import Provider from "vuejs-redux";

interface AppProps {
  isConnected: boolean;
}

@Component({
  components: {
    HelloWorld,
    Provider,
    SimpleDisplay
  }
})
export default class App extends Vue {
  store = configureStore(initialApplicationState);

  public mapStateToProps(state: RootState) {
    return {
      isConnected: state.connected
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
