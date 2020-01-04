<template>
  <div class="second-inside-sidebar" v-cloak>
    <XCircleIcon @click="toggle" class="x-circle-icon cursor-pointer"></XCircleIcon>

    <router-link style="background: none !important" :to="{name: 'home'}">
      <img src="../../assets/newlogo.png" class="logo-in-sidebar" alt="logo">
    </router-link>

    <b-list-group>
      <span class="pt-2 pl-3 pb-2 text-muted">Подпись документа</span>
      <router-link :to="{name: 'document-router-verify'}" class="router-link">
        Проверить подпись документа
      </router-link>
    </b-list-group>
  </div>
</template>

<script>
    import {
        XCircleIcon
    } from 'vue-feather-icons'
  export default {
      name: 'document-verify-sidebar',
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
