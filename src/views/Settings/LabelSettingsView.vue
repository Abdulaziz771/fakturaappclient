<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Метки</span></b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row>
                <b-col md="12">
                  <div>
                    <b-table hover :fields="fields" :items="labelTable" class="label-table">
                      <template slot="name" slot-scope="data">
                        <b>{{ data.item.name }}</b><br>
                        <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> Создан: {{ data.item.createdDate }}</small>
                      </template>
                      <template slot="action">
                        <Edit3Icon class="cursor-pointer mr-2"></Edit3Icon>
                        <TrashIcon class="cursor-pointer"></TrashIcon>
                      </template>
                    </b-table>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
    import LabelData from "./../../TestData/LabelData"
    import {
        TrashIcon,
        Edit3Icon,
        AlertCircleIcon
    } from 'vue-feather-icons'

    export default {
        name: 'label-settings-view',
        components: {
            TrashIcon,
            Edit3Icon,
            AlertCircleIcon
        },
        data () {
            return {
                labelTable: LabelData,
                fields: [
                    { key: "name", label: "Название" },
                    { key: "refleshDate", label: "Обновлен" },
                    { key: "action", label: "Действия" },
                ]
            }
        }
    }
</script>
<style lang="scss">

  .item1 {
    padding: 17px;
  }

  .item1-sub {
    padding: 17px;
  }

  .form-control {
    background: #f7f7f7;
  }

  .personal-area {
    .form-control:focus {
      color: #665c70;
      background-color: #fff;
      border-color: #7984d2 !important;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(51, 111, 153, 0.25) !important;
    }
  }
  //table
  .label-table {
    thead {
      tr {
        th:nth-child(2) {
          width: 195px;
          text-align: center  ;
        }
        th:nth-child(3) {
          width: 75px;
        }
      }
    }
    tbody {
      tr {
        td:nth-child(2) {
          text-align: center;
        }
      }
    }
  }

</style>
