<template>
  <div class="content">
    <div class="content-body-header m-3">
      <div class="row">
        <div class="col-6">
          <div class="input-group input-group-sm">
            <select class="custom-select" id="inputGroupSelect04">
              <option selected></option>
            </select>
            <div class="input-group-append">
              <button class="btn btn btn-success" type="button">Добавить</button>
            </div>
          </div>
        </div>
        <div class="col-6">
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
        </div>
      </div>
    </div>
    <div id="counterparties-body-doc-page">
      <b-table striped fixed hover :items="counterparties" :fields="fields" class="counter-parties-table ">
        <template slot="action">
          <SendIcon class="cursor-pointer mr-2 action-icon"></SendIcon>
          <Trash2Icon class="cursor-pointer  mr-1 action-icon-delete"></Trash2Icon>
        </template>
      </b-table>
    </div>
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

        data() {
            return {
                fields: [
                    {key: 'name', label: 'Наименования контрагента'},
                    {key: 'inn', label: 'ИНН'},
                    {key: 'action', label: ''}
                ],
                counterparties: Counterpartiestable
            }
        },
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
  #counterparties-body-doc-page {
    overflow-y: scroll;
  }
</style>
