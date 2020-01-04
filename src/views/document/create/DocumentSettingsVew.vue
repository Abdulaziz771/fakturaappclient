<template>

    <div :class="{ 'open': this.$store.getters.isvalueSecondSidebar }">
        <div>
          <router-view/>
        </div>
      </div>

</template>
<script>
import eventBus from "../../../eventBus";
import {
    XCircleIcon
} from "vue-feather-icons"

export default {
    name: 'settings',
    data() {
        return {
            isSidebarOpen: true
        }
    },
    components: {
        XCircleIcon
    },
    methods: {
        // updateStoreSidebarValue() {
        //     if (this.isSidebarOpen)
        //         this.$store.dispatch("openToggleMenuButtonInHeader");
        //     else{
        //         //this.$store.dispatch("closeToggleMenuButtonInHeader")
        //     }
        // },
        onToggleSidebarByHeaderButton() {
            this.isSidebarOpen = !this.isSidebarOpen;
            // this.updateStoreSidebarValue()
        }
    },
    created() {
        // this.$store.dispatch("showToggleMenuButtonInHeader");
        // this.updateStoreSidebarValue();
        //
        // this.$store.dispatch("openToggleMenuButtonInHeader");
        eventBus.$on("offSecondSidebar", this.onToggleSidebarByHeaderButton)
        this.$store.commit('setWholeMenuInSidebar', true)
    },
    beforeDestroy() {
        eventBus.$off('offSecondSidebar', this.onToggleSidebarByHeaderButton);
    }
}
</script>
<style lang="scss">

</style>
