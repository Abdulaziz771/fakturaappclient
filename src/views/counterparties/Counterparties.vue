<template>
  <div class="content">
    <div class="content-header border-bottom">
      <b-row >
        <b-col lg="4" md="6" sm="5" class="add-inn-input d-none d-sm-block d-md-block">
          <div class="input-group input-group-sm p-2">
            <select class="custom-select" id="inputGroupSelect04">
              <option selected></option>
            </select>
            <div class="input-group-append">
              <button class="btn btn btn-light border" type="button">
                <span class="d-none d-md-block">Добавить</span>
                <PlusIcon class="d-block d-md-none"></PlusIcon>
              </button>
            </div>
          </div>
        </b-col>
        <b-col lg="8" md="6" sm="7" cols="12" class="table-filter-action action-list d-flex justify-content-end">
          <div class="counter-tool counter">
            <span>
              <span>
                <span>1</span>–<span>20</span>
              </span> из <span>21</span>
            </span>
          </div>
          <div class="counter-tool toggle-page-left rounded-circle mr-1">
            <ChevronLeftIcon class="cursor-pointer"/>
          </div>
          <div class="counter-tool toggle-page-right rounded-circle">
            <ChevronRightIcon class="cursor-pointer"/>
          </div>
          <div class="counter-tool filter-view">
            <SlidersIcon class="cursor-pointer"/>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="content-body">
      <div class="table-body">
        <b-table hover :fields="fields" :items="counterparties" class="counter-parties-table">
          <template slot="name" slot-scope="data">
            {{ data.item.name }}
          </template>
          <template slot="inn" slot-scope="data">
            {{ data.item.inn }}
          </template>
          <template slot="action">
            <img src="../../assets/send.png" class="send-icon">
            <Trash2Icon class="mr-1 action-icon ml-1"></Trash2Icon>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
  import Counterpartiestable from '../../TestData/Counterpartiestable'
  import {
    Trash2Icon,
    SendIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
      PlusIcon
  } from 'vue-feather-icons'

  export default {
    name: 'CounterParties',
    components: {
      Trash2Icon,
      SendIcon,
      ChevronRightIcon,
      ChevronLeftIcon,
        PlusIcon
    },
    data () {
      return {
        counterparties: Counterpartiestable,
        fields: [
          { key: 'name', label: 'Наименования контрагента' },
          { key: 'inn', label: 'ИНН' },
          { key: 'action', label: 'Действие' }
        ],
      }
    }
  }
</script>

<style lang="scss">

  .counter-parties-table thead {
    th:last-child {
      width: 90px;
    }

    th:last-child {
      width: 90px;
    }
  }
</style>
