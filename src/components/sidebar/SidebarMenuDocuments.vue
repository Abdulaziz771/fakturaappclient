<template>
  <div>
    <b-list-group class="mt-3">
      <b-list-group-item>
        <router-link :to="{name: 'create-document-view'}">
          Создать новый документ
        </router-link>
      </b-list-group-item>
    </b-list-group>
    <b-list-group class="mt-3">
      <span class="pt-2 pl-3 pb-2 text-muted">Документооборот</span>
      <b-list-group-item>
        <router-link :to="{name: 'InboxDocuments'}">Входящие
          <b-badge variant="success" pill>+ 14</b-badge>
        </router-link>
      </b-list-group-item>
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
  export default {
    name: 'sidebar-menu-documents'
  }
</script>
