<template>
  <div class="content">
    <div class="fixed-content-header">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-center text-md-left">
          <h5>Проверка электронного документа</h5>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
          <button class="btn rounded default-success-button btn-secondary float-md-right btn-sm">Запросить новый счет на
            пополнение
          </button>
        </div>
      </div>
    </div>
    <div id="content-body-doc-page">
      <b-table striped fixed hover :fields="fields" :items="ReplenishmentAccountTable" class="replenishment-account-table">
        <template slot="docname" slot-scope="data">
          Счет на оплату на {{data.item.amount}} сум от 19.08.2019
        </template>
        <template slot="datecreate" slot-scope="data">
          19.08.2019 13:52:55
        </template>
        <template slot="status" slot-scope="data">
          Счёт на оплату не подписан
        </template>
        <template slot="action" slot-scope="data">
          <button class="btn rounded default-success-button btn-secondary btn-sm">Перейти к подтверждению</button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
    import Replenishmentaccounttable from '../../TestData/Replenishmentaccounttable'

    export default {
        name: 'ReplenishmentAccount',
        data() {
            return {
                fields: [
                    {key: 'docname', label: 'Название документа'},
                    {key: 'amount', label: 'На сумму'},
                    {key: 'datecreate', label: 'Дата создания'},
                    {key: 'status', label: 'Статус'},
                    {key: 'action', label: 'Действие'}
                ],
                ReplenishmentAccountTable: Replenishmentaccounttable
            }
        }
    }
</script>

<style lang="scss">
  .replenishment-account-table thead {
    th:nth-child(1) {
      width:260px;
    }
    th:nth-child(2) {
      width:90px;
    }
    th:nth-child(5) {
      width:218px;
    }
  }
</style>
