<template>
  <div :class="{ 'open' : isSidebarOpen }">
    <div class="second-inside-sidebar" v-cloak>
      <XCircleIcon @click="onToggleSidebarByHeaderButton" class="x-circle-icon cursor-pointer"></XCircleIcon>

      <router-link class="bg-none" :to="{name: 'home'}">
        <img src="../../assets/newlogo.png" class="logo-in-sidebar" alt="logo">
      </router-link>

      <b-list-group>
        <router-link :to="{name: 'document-router-verify'}" class="router-link">
          Проверить подпись документа
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
        name: 'document-verify',
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

<style scoped>

</style>
