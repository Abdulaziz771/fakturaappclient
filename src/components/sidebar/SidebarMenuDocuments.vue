<template>
  <div>
      <ChevronLeftIcon class="chevronLeftIcon cursor-pointer" @click="emitEvent"></ChevronLeftIcon>

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
        <b-list-group-item href="#">Исходящие
          <b-badge variant="success" pill>+ 24</b-badge>
        </b-list-group-item>
        <b-list-group-item href="#">Черновики</b-list-group-item>
        <b-list-group-item href="#">Реестры</b-list-group-item>
      </b-list-group>

      <b-list-group class="mt-3">
        <span class="pt-2 pl-3 pb-2 text-muted">Согласование</span>
        <b-list-group-item href="#">В обработке</b-list-group-item>
        <b-list-group-item href="#">Обработанные</b-list-group-item>
      </b-list-group>
    </div>
</template>
<script>
    import {
        ChevronLeftIcon

    } from 'vue-feather-icons'

  export default {
    name: 'sidebar-menu-documents',
      components: {
          ChevronLeftIcon
      },
      methods: {
          emitEvent() {
              this.$emit('changeShow', true)
          }
      }
  }
</script>
<style lang="scss">

</style>
