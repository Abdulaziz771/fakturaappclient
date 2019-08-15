<template>
  <div>
    <b-list-group class="mt-3">
      <span class="pt-2 pl-3 pb-2 text-muted">Контрагенты</span>
      <router-link class="router-link" :to="{name: 'counter-parties'}">
        Контрагенты
      </router-link>
    </b-list-group>
  </div>
</template>
<script>
  export default {
    name: 'sidebar-menu-counterparties',
  }
</script>
