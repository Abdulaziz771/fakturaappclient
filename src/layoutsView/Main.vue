<template>
  <div>
    <headerComponent></headerComponent>
    <sidebarComponent></sidebarComponent>
    <router-view></router-view>
  </div>
</template>

<script>
    import headerComponent from '../components/Header'
    import sidebarComponent from '../components/sidebar/Sidebar'

    export default {
        name: 'mains',
        components: {
            headerComponent,
            sidebarComponent
        }
    }
</script>
