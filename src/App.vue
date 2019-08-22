<template>
  <div id="app">
    <headerComponent></headerComponent>
    <sidebarComponent></sidebarComponent>
    <router-view id="wrapper"></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>
  import headerComponent from '../src/components/Header'
  import sidebarComponent from './components/sidebar/Sidebar'

  export default {
    components: {
      headerComponent,
      sidebarComponent,
    },
    computed: {
      setHeight () {
        document.getElementById('scrollTable').style.height = '800px'
      }
    }
  }
</script>

