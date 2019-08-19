<template>
  <div class="content">
    <div class="content-header">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-center text-md-left"><h5>Мои организации</h5></div>
        <div class="col-sm-12 col-md-6 text-center">
          <button class="btn rounded default-success-button btn-secondary float-md-right btn-sm">Сохранить
          </button>
        </div>
      </div>
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
