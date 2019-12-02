<template>
  <div id="app">
    <headerComponent></headerComponent>
    <sidebarComponent></sidebarComponent>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>
    import headerComponent from '../src/components/Header'
    import sidebarComponent from './components/sidebar/Sidebar'

    export default {
        components: {
            headerComponent,
            sidebarComponent
        }
    }
</script>


