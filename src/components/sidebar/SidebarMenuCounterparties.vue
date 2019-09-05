<template>
  <div>
    <b-list-group class="mt-3">
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
