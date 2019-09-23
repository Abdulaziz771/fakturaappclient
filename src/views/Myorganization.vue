<template>
  <div class="title-page">
    <Organization></Organization>
  </div>
</template>

<script>
    import Organization from "./Organization";

    export default {
        name: 'organization',
        components: {
            Organization
        }
    }
</script>

<style lang="scss">

  .active-organization {
    background-color: #34495e !important;
  }

</style>
