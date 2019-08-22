<template>
  <div class="content" id="financeIndex">
    <div class="fixed-content-header">
      <b-container>
        <b-row>
          <b-col col>
            <h5>Проверка электронного документа</h5>
          </b-col>
          <b-col col>
            <button class="btn rounded default-success-button btn-secondary float-md-right btn-sm">Запросить новый счет
              на пополнение
            </button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="scroll-content-body">
      <div striped sticky-header hover :fields="fields" :items="ReplenishmentAccountTable" class="scrollTable">
        <div id="content-body-doc-page">
          <b-table striped fixed hover :fields="fields" :items="ReplenishmentAccountTable"
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
