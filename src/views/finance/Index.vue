<template>
  <div class="content without-second-sidebar" id="financeIndex">
    <div class="content-body">
      <div class="content-header border-bottom">
        <b-row>
          <b-col lg="4" md="6" sm="5" >
            <h5 class="title-text">Счета на пополнение</h5>
            <span class="title-border"></span>
            <div class="action-list upBalance">
              <router-link :to="{name: 'finance-deposit'}">
                <div class="d-flex  w-fill-content tool-actions cursor-pointer hover-effect-active">
                    <span class="pt-1"><CreditCardIcon class="pb-1 mr-2"></CreditCardIcon>Поплнить баланс</span>
                </div>
              </router-link>
            </div>
          </b-col>
          <b-col lg="8" md="6" sm="7" class="table-filter-action action-list d-flex justify-content-end">
            <div class="counter-tool counter  cunterparties-counter  cursor-pointer">
              <span class="pt-1">
                <span>
                  <span>1</span>–<span>20</span>
                </span> из <span>21</span>
              </span>
            </div>
            <div class="counter-tool cursor-pointer toggle-page-left rounded-circle mr-1">
              <ChevronLeftIcon class=""/>
            </div>
            <div class="counter-tool cursor-pointer toggle-page-right rounded-circle">
              <ChevronRightIcon class=""/>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="table-body">
        <div class="table-responsive">
          <b-table responsive hover :fields="fields" :items="ReplenishmentAccountTable"
                    class="index-account-table pl-2">
            <template slot="docname" slot-scope="data">
              <b>Счет на оплату</b><br>
              <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> Создан: 05.11.2019</small>
            </template>
            <template slot="amount" slot-scope="data">
              {{ data.item.amount }}.00
            </template>
            <template slot="status" slot-scope="data">
              <span class="badge badge-danger">
                Не подписан
              </span>
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
    CheckCircleIcon,
    CreditCardIcon,
      AlertCircleIcon,
      ChevronRightIcon,
      ChevronLeftIcon
  } from 'vue-feather-icons'

  export default {
    name: 'index',
    data () {
      return {
        fields: [
          { key: 'docname', label: 'Название документа' },
          { key: 'amount', label: 'На сумму' },
          { key: 'status', label: 'Статус' },
          { key: 'action', label: 'Действие' }
        ],
        ReplenishmentAccountTable: Replenishmentaccounttable
      }
    },
    components: {
      CheckCircleIcon,
      CreditCardIcon,
        AlertCircleIcon,
        ChevronRightIcon,
        ChevronLeftIcon
    },
    created() {
        this.$store.commit('setWholeMenuInSidebar', true)
    }
  }
</script>

<style lang="scss">

  .upBalance {
    a {
      &:hover {
        text-decoration: none;
        color: #404040;
      }
    }
  }
  #financeIndex {
    thead {
      tr {
        th:nth-child(4) {
          width: 100px;
          text-align: center;
        }
        th:nth-child(3) {
          width: 112px;
          text-align: center;
        }
        th:nth-child(1) {
          width: 250px;
        }
      }
    }
    tbody {
      tr {
        td:nth-child(4) {
          text-align: center;
        }
        td:nth-child(3) {
          text-align: center;
        }
      }
    }
  }

  .clockIcon, .alertCircleIcon {
    width: 9px;
  }
</style>
