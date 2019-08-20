<template>
  <div class="content">
    <div class="content-header">
      <b-row>
        <b-col cols="12" class="text-center"><h5>Мои организации</h5></b-col>
      </b-row>
      <hr>
    </div>
    <div class="content-body">
      <Organization></Organization>
    </div>
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
