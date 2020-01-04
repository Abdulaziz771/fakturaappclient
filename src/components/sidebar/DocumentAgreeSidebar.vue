<template>
  <div class="second-inside-sidebar" v-cloak>
    <XCircleIcon @click="toggle" class="x-circle-icon cursor-pointer"></XCircleIcon>

    <router-link style="background: none !important" class="bg-none" :to="{name: 'home'}">
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
</template>

<script>
    import {
        XCircleIcon
    } from 'vue-feather-icons'
  export default {
      name: 'document-agree-sidebar',
      components: {
          XCircleIcon
      },
      methods: {
          toggle() {
              this.$store.commit('toggleSidebar');
          }
      },
      created() {
          this.$store.commit('toggleSecondSidebar', true)
      }
  }
</script>
