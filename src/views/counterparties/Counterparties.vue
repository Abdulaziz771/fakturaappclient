<template>
  <div class="content">
    <div id="fixed-content-header">
      <b-container fluid>
        <b-row>
          <b-col cols="6">
            <div class="input-group input-group-sm">
              <select class="custom-select" id="inputGroupSelect04">
                <option selected></option>
              </select>
              <div class="input-group-append">
                <button class="btn btn btn-success" type="button">Добавить</button>
              </div>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="form-inline float-right">
              <div class="pl-2 form-inline">
                <label class="mr-1">Показать по: </label>
                <select class="form-control form-control-sm">
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </select>
              </div>
              <div class="form-inline pl-4 pr-2">
                <span class="pr-2">1-20 из 134</span>
                <ChevronLeftIcon class="cursor-pointer mr-1"/>
                <ChevronRightIcon class="cursor-pointer ml-1"/>
              </div>
              <b-button class="lightgray-button mr-2" size="sm" style="padding: 5px">Фильтр</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-table sticky-header hover sticky-header="87vh" :fields="fields" :items="counterparties">
      <template slot="name" slot-scope="data">
        {{ data.item.name }}
      </template>
      <template slot="inn" slot-scope="data">
        {{ data.item.inn }}
      </template>
      <template slot="action">
        <SendIcon class="mr-2 action-icon"></SendIcon>
        <Trash2Icon class="mr-1 action-icon-delete"></Trash2Icon>
      </template>
    </b-table>
  </div>
</template>

<script>
  import Counterpartiestable from '../../TestData/Counterpartiestable'
  import {
    Trash2Icon,
    SendIcon,
    ChevronRightIcon,
    ChevronLeftIcon
  } from 'vue-feather-icons'

  export default {
    name: 'CounterParties',
    components: {
      Trash2Icon,
      SendIcon,
      ChevronRightIcon,
      ChevronLeftIcon
    },
    data () {
      return {
        counterparties: Counterpartiestable,
        fields: [
          { key: 'name', label: 'Наименования контрагента' },
          { key: 'inn', label: 'ИНН' },
          { key: 'action', label: '' }
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
