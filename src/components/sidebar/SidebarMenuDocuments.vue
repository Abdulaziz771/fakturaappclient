<template>
  <div>

    <XCircleIcon @click="offSecondSidebarMoblie" class="x-circle-icon cursor-pointer"></XCircleIcon>

      <router-link style="background: none" :to="{name: 'home'}">
        <img src="../../assets/newlogo.png" style="background: none; width: 100%; padding: 18px 15px" alt="">
      </router-link>

      <b-list-group>

        <span class="pt-2 pl-3 pb-2 text-muted">Докумнты</span>

        <router-link class="router-link" :to="{name: 'document-create-index'}">
          Создать новый документ
        </router-link>
      </b-list-group>

      <b-list-group class="mt-3">
        <span class="pt-2 pl-3 pb-2 text-muted">Документооборот</span>
        <router-link class="router-link"  :to="{name: 'document-inbox'}">
          Входящие
        </router-link>
        <router-link class="router-link"  :to="{name: 'document-outbox'}">Исходящие
          <b-badge variant="success" pill>+ 24</b-badge>
        </router-link>
        <router-link class="router-link"  :to="{name: 'document-draft'}">Черновики
        </router-link>
        <router-link class="router-link"  :to="{name: 'document-import'}">Реестры</router-link>
      </b-list-group>

      <b-list-group class="mt-3">
        <span class="pt-2 pl-3 pb-2 text-muted">Согласование</span>
        <b-list-group-item href="#">В обработке</b-list-group-item>
        <b-list-group-item href="#">Обработанные</b-list-group-item>
      </b-list-group>
    </div>
</template>
<script>
  import  {
    XCircleIcon
  } from 'vue-feather-icons'
  export default {
    name: 'sidebar-menu-documents',
      components: {
          XCircleIcon
      },
      methods: {
          offSecondSidebarMoblie() {
              this.$emit('offSecondSidebarMoblie', false);
          },
      }
  }
</script>
<style lang="scss">

</style>
