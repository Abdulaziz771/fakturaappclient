<template>
  <div id="header">
    <b-navbar>
      <b-navbar-brand><router-link :to="{name: 'home'}"><img alt="Header Logo" class="logo" src="../assets/newlogo.png"></router-link></b-navbar-brand>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'headerComponent'
}
</script>
<style lang="scss" scoped>
  #header {
    width: 100%;
    position: fixed !important;
    z-index: 999;
    -webkit-box-shadow: 0 1px 6px rgba(57,73,76,0.35);
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
    height: auto !important;
    top: 0;
    background-color: white;
  }
</style>

