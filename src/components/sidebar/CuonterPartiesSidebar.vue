<template>
  <div class="second-inside-sidebar" v-cloak>
    <XCircleIcon @click="toggle" class="x-circle-icon cursor-pointer"></XCircleIcon>

    <router-link style="background: none !important" class="bg-none" :to="{name: 'home'}">
      <img src="../../assets/newlogo.png"  class="logo-in-sidebar" alt="logo">
    </router-link>

    <b-list-group>
      <span class="pt-2 pl-3 pb-2 text-muted">Контрагенты</span>
      <router-link :to="{name: 'counter-parties-view'}" class="router-link">
        Контрагенты
      </router-link>
    </b-list-group>
  </div>
</template>

<script>
import {
    XCircleIcon
} from 'vue-feather-icons'
export default {
    name: 'cuonter-parties-sidebar',
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
