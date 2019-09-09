<template>
  <div id="app">
    <headerComponent></headerComponent>
    <sidebarComponent @activeSecondSidebar="activeSecondSidebar"></sidebarComponent>
    <router-view v-bind:class="activeClass"></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>
  import headerComponent from '../src/components/Header'
  import sidebarComponent from './components/sidebar/Sidebar'

  export default {
    data () {
      return {
        isActiveSecondSidebar: false
      }
    },
    components: {
      headerComponent,
      sidebarComponent
    },
    computed: {
      activeClass () {
        return this.isActiveSecondSidebar ? 'wrapper' : 'fullContent';
      }
    },
    methods: {
      activeSecondSidebar (value) {
        this.isActiveSecondSidebar = value
      }
    }
  }
</script>
<style>
  .fullContent {
    margin-left: 110px !important;
  }
  .wrapper {
    margin-left: 290px !important;
  }
</style>

