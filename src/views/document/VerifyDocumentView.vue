<template>
  <div :class="{ 'open' : this.$store.getters.isvalueSecondSidebar }">
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>

    export default {
        name: 'document-verify',
    }

</script>
