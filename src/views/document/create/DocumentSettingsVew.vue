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
        onToggleSidebarByHeaderButton() {
            this.isSidebarOpen = !this.isSidebarOpen;
            // this.updateStoreSidebarValue()
        }
    },
    created() {
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
