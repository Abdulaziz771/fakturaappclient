<template>

    <div :class="{ 'open': isSidebarOpen }">
        <div class="second-inside-sidebar" v-cloak>
          <XCircleIcon @click="onToggleSidebarByHeaderButton" class="x-circle-icon cursor-pointer"></XCircleIcon>

          <router-link class="bg-none" :to="{name: 'home'}">
            <img src="../../../assets/newlogo.png" class="logo-in-sidebar">
          </router-link>

          <b-list-group>
            <span class="pt-2 pl-3 pb-2 text-muted">Настройки</span>
            <router-link :to="{name: 'settings-personal-area'}" class="router-link">
              Личный кабинет
            </router-link>
            <router-link :to="{name: 'props-area-settings-view'}" class="router-link">
              Реквизиты
            </router-link>
            <router-link :to="{name: 'subdivision-settings-view'}" class="router-link">
              Подразделение
            </router-link>
            <router-link :to="{name: 'label-settings-view'}" class="router-link">
              Метки
            </router-link>
            <router-link :to="{name: 'employee-settings-view'}" class="router-link">
              Сотрудники
            </router-link>
            <router-link :to="{name: 'reestr-settings-view'}" class="router-link">
              Реестры
            </router-link>
            <router-link :to="{name: 'matching-settings-view'}" class="router-link">
              Согласование
            </router-link>
            <router-link :to="{name: 'roles-settings-view'}" class="router-link">
              Роли
            </router-link>
            <router-link :to="{name: 'document-templates-settings-view'}" class="router-link">
              Шаблоны документов
            </router-link>
            <router-link :to="{name: 'access-api-settings-view'}" class="router-link">
              Доступ к API
            </router-link>
          </b-list-group>
        </div>
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
        updateStoreSidebarValue() {
            if (this.isSidebarOpen)
                this.$store.dispatch("openToggleMenuButtonInHeader");
            else
                this.$store.dispatch("closeToggleMenuButtonInHeader")
        },
        onToggleSidebarByHeaderButton() {
            this.isSidebarOpen = !this.isSidebarOpen;
            this.updateStoreSidebarValue()
        }
    },
    created() {
        this.$store.dispatch("showToggleMenuButtonInHeader");
        this.updateStoreSidebarValue();

        this.$store.dispatch("showsetWholeMenuInSidebar");
        this.$store.dispatch("openToggleMenuButtonInHeader");

        eventBus.$on("offSecondSidebar", this.onToggleSidebarByHeaderButton)
    },
    beforeDestroy() {
        eventBus.$off('offSecondSidebar', this.onToggleSidebarByHeaderButton);
    }
}
</script>

<style lang="scss">

</style>
