<template>
  <div>
    <b-list-group class="mt-3">
      <span class="pt-2 pl-3 pb-2 text-muted">Настройки</span>
      <router-link :to="{name: 'settings-personal-area'}" class="router-link">
        Личный кабинет
      </router-link>
      <b-list-group-item href="#">Реквизиты</b-list-group-item>
      <b-list-group-item href="#">Метка</b-list-group-item>
      <b-list-group-item href="#">Сотрудники</b-list-group-item>
      <b-list-group-item href="#">Согласование</b-list-group-item>
      <b-list-group-item href="#">Роли</b-list-group-item>
      <b-list-group-item href="#">Истории КПК и POS транзакций</b-list-group-item>
      <b-list-group-item href="#">Шаблоны документов</b-list-group-item>
      <b-list-group-item href="#">Доступ к API</b-list-group-item>
      <b-list-group-item href="#">Владелец компании</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
  export default {
    name: 'sidebar-menu-settings'
  }
</script>
