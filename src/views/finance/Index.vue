<template>
  <div class="content" id="financeIndex">
    <div class="content-header">
      <div class="row">
        <div class="col-5 col-sm-5 col-md-6  text-md-left">
          <h5 class="p-2 replenishment-check-text">Счета на пополнение</h5>
        </div>
        <div class="col-7 col-sm-7 col-md-6  text-sm-right">
          <router-link :to="{name: 'finance-deposit'}">
            <b-button class="btn replenishment-button-text lightgray-button float-md-right btn-sm m-2 p-1">
              Запросить новый счет на пополнение
            </b-button>
          </router-link>
        </div>
      </div>
      <hr class="m-0">
    </div>
    <div class="content-body">
      <div class="table-body">
        <div class="table-responsive">
          <b-table  striped hover :fields="fields" :items="ReplenishmentAccountTable"
                    class="index-account-table">
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
              <CheckCircleIcon class="action-icon"></CheckCircleIcon>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Replenishmentaccounttable from '../../TestData/Replenishmentaccounttable'
  import {
    CheckCircleIcon
  } from 'vue-feather-icons'

  export default {
    name: 'index',
    data () {
      return {
        fields: [
          { key: 'docname', label: 'Название документа' },
          { key: 'amount', label: 'На сумму' },
          { key: 'datecreate', label: 'Дата создания' },
          { key: 'status', label: 'Статус' },
          { key: 'action', label: 'Действие' }
        ],
        ReplenishmentAccountTable: Replenishmentaccounttable
      }
    },
    components: {
      CheckCircleIcon
    }
  }
</script>

<style lang="scss">
  #financeIndex .scrollTable thead {
    th:nth-child(1) {
      width: 260px;
    }

    .index-account-table thead {
      th:nth-child(1) {
        width: 320px;
      }

      th:nth-child(2) {
        width: 90px;
      }

      th:nth-child(5) {
        width: 100px;
        text-align: center;
      }
    }

    .index-account-table tbody {
      td:nth-child(5) {
        text-align: center;
      }
    }
  }
</style>
