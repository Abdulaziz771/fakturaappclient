<template>
  <div class="content">
    <div class="fixed-content-header">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-center text-md-left">
          <h5 class="p-2">Проверка электронного документа</h5>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
          <b-button class="btn rounded default-success-button btn-secondary float-md-right btn-sm m-2">
            <router-link class="text-decoration-none router-link-button" :to="{name: 'deposit'}">
              Запросить новый счет на пополнение
            </router-link>
          </b-button>
        </div>
      </div>
    </div>
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
        <template  slot="action" slot-scope="data">
          <CheckCircleIcon class="action-icon"></CheckCircleIcon>
        </template>
      </b-table>
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
        },
        components: {
            CheckCircleIcon
        }
    }
</script>

<style lang="scss">
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
</style>
