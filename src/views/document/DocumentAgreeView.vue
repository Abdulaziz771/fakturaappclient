<template>
  <div :class="{ 'open' : isSidebarOpen}">
    <div class="second-inside-sidebar" v-cloak>
      <XCircleIcon @click="onToggleSidebarByHeaderButton" class="x-circle-icon cursor-pointer"></XCircleIcon>

      <router-link class="bg-none" :to="{name: 'home'}">
        <img src="../../assets/newlogo.png" class="logo-in-sidebar">
      </router-link>

      <b-list-group>
        <span class="pt-2 pl-3 pb-2 text-muted">Согласование</span>
        <router-link :to="{name: 'agreement-document-view'}" class="router-link">
          В обработке
        </router-link>
        <router-link :to="{name: 'agreement-done-document-view'}" class="router-link">
          Обработанные
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
} from "vue-feather-icons"

export default {
    name: 'agree',
    data() {
        return {
            isSidebarOpen: true
        }
    },
    components: {
        XCircleIcon
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
