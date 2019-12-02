<template>
  <div :class="{ 'open' : isSidebarOpen }">
    <div class="second-inside-sidebar" v-cloak>
      <XCircleIcon @click="onToggleSidebarByHeaderButton" class="x-circle-icon cursor-pointer"></XCircleIcon>

      <router-link class="bg-none" :to="{name: 'home'}">
        <img src="../../assets/newlogo.png" class="logo-in-sidebar" alt="logo">
      </router-link>

      <b-list-group>
        <router-link :to="{name: 'counter-parties-view'}" class="router-link">
          Контрагенты
        </router-link>
      </b-list-group>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
    import eventBus from '../../eventBus';
    import {
        XCircleIcon
    } from 'vue-feather-icons'

    export default {
        name: 'CounterParties',
        components: {
            XCircleIcon
        },
        data() {
            return {
                isSidebarOpen: true
            }
        },
        methods: {
            updateStoreSidebarValue() {
                if (this.isSidebarOpen)
                    this.$store.dispatch("openToggleMenuButtonInHeader");
                else
                    this.$store.dispatch("closeToggleMenuButtonInHeader");
            },
            onToggleSidebarByHeaderButton() {
                this.isSidebarOpen = !this.isSidebarOpen;
                this.updateStoreSidebarValue();
            }
        },
        created() {
            this.$store.dispatch("showToggleMenuButtonInHeader");
            this.updateStoreSidebarValue();

            this.$store.dispatch("showsetWholeMenuInSidebar");
            this.$store.dispatch("openToggleMenuButtonInHeader");

            eventBus.$on("offSecondSidebar", this.onToggleSidebarByHeaderButton);
        },
        beforeDestroy() {
            eventBus.$off('offSecondSidebar', this.onToggleSidebarByHeaderButton);
        }
    }
</script>

<!--<style scoped>-->
<!--  .table th, .table td {-->
<!--    padding-left: 15px !important;-->
<!--  }-->
<!--</style>-->

<!--<style lang="scss">-->

<!--  .counter-parties-table thead {-->
<!--    th:last-child {-->
<!--      width: 90px;-->
<!--    }-->

<!--    th:last-child {-->
<!--      width: 90px;-->
<!--    }-->
<!--  }-->

<!--  .input-group {-->

<!--    select:focus {-->
<!--      box-shadow: none;-->
<!--      border: 1px solid #cecbcb;-->
<!--    }-->
<!--  }-->

<!--  .table th, .table td {-->
<!--    /*padding-left: 15px !important;*/-->
<!--  }-->

<!--  .gabarage-icon {-->
<!--    width: 20px;-->
<!--    margin-left: 5px;-->
<!--  }-->

<!--  .clockIcon, .alertCircleIcon {-->
<!--    width: 9px;-->
<!--  }-->

<!--  .cunterparties-counter {-->
<!--    padding-top: 16px !important;-->
<!--  }-->

<!--  .form-control:focus {-->
<!--    color: #665c70;-->
<!--    background-color: #fff;-->
<!--    border-color: #7984d2 !important;-->
<!--    outline: 0;-->
<!--    box-shadow: 0 0 0 0.2rem rgba(51, 111, 153, 0.25) !important;-->
<!--  }-->
<!--</style>-->

