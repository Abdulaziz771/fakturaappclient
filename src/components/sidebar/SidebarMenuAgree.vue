<template>
  <div>

    <XCircleIcon @click="offSecondSidebarMoblie" class="x-circle-icon cursor-pointer"></XCircleIcon>

    <router-link :to="{name: 'home'}">
      <img src="../../assets/newlogo.png" style="width: 100%; padding: 18px 15px" alt="">
    </router-link>

    <b-list-group>
      <span class="pt-2 pl-3 pb-2 text-muted">Согласование</span>
      <router-link :to="{name: 'agreement-document-view'}" class="router-link">
        В обработке
      </router-link>
      <router-link :to="{name: 'agreement-document-viesw'}" class="router-link">
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
        name: 'sidebar-menu-agree',
        components: {
            XCircleIcon
        },
        methods: {
            offSecondSidebarMoblie() {
                this.$emit('offSecondSidebarMoblie', false);
            }
        }
    }
</script>
