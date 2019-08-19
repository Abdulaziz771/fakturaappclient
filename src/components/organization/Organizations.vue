<template>
  <div class="d-block">
    <div id="current-organization" class="row pb-2">
      <div class="col-12 text-white">
        <div class="list-group m-b-xs"><a class="list-group-item active-organization">
          <span class="float-right text-white rounded default-success-button p-1"> Текущая организация </span>
          <h5 class="list-group-item-heading">302563857 Corporation (302563857)</h5>
          <p class="list-group-item-text">Жамшид Касымов </p></a></div>
        <div class="text-left"></div>
      </div>
    </div>
    <div id="organization" class="row pb-2">
      <div class="col-12">
        <div class="list-group m-b-xs"><a class="list-group-item">
          <h5 class="list-group-item-heading">302563857 Corporation (302563857)</h5>
          <p class="list-group-item-text">Жамшид Касымов </p></a></div>
        <div class="text-left"></div>
      </div>
    </div>
    <div class="modal-footer">
      <b-button class="rounded default-success-button">Добавить новую организацию</b-button>
      <b-button>Закрыть</b-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'organization'
    }
</script>

<style lang="scss">

  .active-organization {
    background-color: #34495e !important;
  }

</style>
