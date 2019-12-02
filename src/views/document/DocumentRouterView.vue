<template>
  <div :class="{'open': isSidebarOpen}">
    <div class="second-inside-sidebar" v-cloak>
      <XCircleIcon @click="onToggleSidebarByHeaderButton" class="x-circle-icon cursor-pointer"></XCircleIcon>

      <router-link class="bg-none" :to="{name: 'home'}">
        <img src="../../assets/newlogo.png" style="background: none; width: 100%; padding: 18px 15px">
      </router-link>

      <b-list-group>

        <span class="pt-2 pl-3 pb-2 text-muted">Докумнты</span>

        <router-link class="router-link" :to="{name: 'document-create-index'}">
          Создать новый документ
        </router-link>
      </b-list-group>

      <b-list-group class="mt-3">
        <span class="pt-2 pl-3 pb-2 text-muted">Документооборот</span>
        <router-link class="router-link" :to="{name: 'document-inbox'}">
          Входящие
        </router-link>
        <router-link class="router-link" :to="{name: 'document-outbox'}">Исходящие
          <b-badge variant="success" pill>+ 24</b-badge>
        </router-link>
        <router-link class="router-link" :to="{name: 'document-draft'}">Черновики
        </router-link>
        <router-link class="router-link" :to="{name: 'document-import'}">Реестры</router-link>
      </b-list-group>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
    import {
        XCircleIcon
    } from 'vue-feather-icons'

    import eventBus from '../../eventBus';

    export default {
        name: 'document',
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
                    this.$store.dispatch('openToggleMenuButtonInHeader');
                else
                    this.$store.dispatch('closeToggleMenuButtonInHeader');
            },

            onToggleSidebarByHeaderButton() {
                this.isSidebarOpen = !this.isSidebarOpen;
                this.updateStoreSidebarValue();
            }
        },
        created() {
            this.$store.dispatch('showToggleMenuButtonInHeader');
            this.updateStoreSidebarValue();

            this.$store.dispatch("showsetWholeMenuInSidebar");
            this.$store.dispatch("openToggleMenuButtonInHeader");

            eventBus.$on('offSecondSidebar', this.onToggleSidebarByHeaderButton);
        },
        beforeDestroy() {
            eventBus.$off('offSecondSidebar', this.onToggleSidebarByHeaderButton);
        }
    }
</script>
