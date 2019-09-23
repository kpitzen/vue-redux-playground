<template lang="pug">
  p {{connectedCopy}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

interface SimpleDisplayProps {
  isConnected: boolean;
}

@Component({})
export default class SimpleDisplay extends Vue {
  @Prop() public isConnected!: boolean;

  get connectedCopy() {
    return this.$props.isConnected ? "This component is connected to a redux store!" : "This component is not a connected component :("
  }
}

</script>