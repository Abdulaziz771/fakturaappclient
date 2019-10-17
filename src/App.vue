<template>
  <div id="app">
    <headerComponent @offSecondSidebar="offSecondSidebar" :class="sidebar"></headerComponent>
    <sidebarComponent
      :is-off-second-sidebar="isOffSecondSidebar"
      @onSecondSidebar="onSecondSidebar"
      v-show="sidebarVisible"
      @openSidebar="openSidebar"
    ></sidebarComponent>
    <router-view :class="sidebar"></router-view>
<!--    <vue-progress-bar></vue-progress-bar>-->
  </div>
</template>
<script>
    import headerComponent from '../src/components/Header'
    import sidebarComponent from './components/sidebar/Sidebar'

    export default {
        data() {
            return {
                sidebarVisible: true,
                isOffSecondSidebar: true
            }
        },
        components: {
            headerComponent,
            sidebarComponent
        },
        methods: {
            offSecondSidebar(value) {
                this.isOffSecondSidebar = value;
            },
            onSecondSidebar(value) {
                this.isOffSecondSidebar = value;
            },
            openSidebar(value) {
                this.isOffSecondSidebar = value;
            }
        },
        computed: {
            sidebar() {
                if (this.sidebarVisible) {
                    if (this.isOffSecondSidebar) {
                        return "offSidebar"
                    } else {
                        return "sidebarOn"
                    }
                } else {
                    if (this.isOffSecondSidebar) {
                        return "sidebarOff"
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
  .fullContent {
    margin-left: 110px !important;
  }

  .wrapper {
    margin-left: 290px !important;
  }

</style>

