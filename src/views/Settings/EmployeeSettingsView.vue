<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 employee personal-area">
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
                    <b-table hover :fields="fields" :items="employeeData" class="employee-table">
                      <template slot="name" slot-scope="data">
                        <b>{{ data.item.name }}</b><br>
                      </template>
                      <template slot="status" slot-scope="data">
                        <span v-if="data.item.isActiveStatus"  class="badge badge-success">
                            {{ data.item.status }}
                        </span>
                        <span v-else class="badge badge-danger">
                            {{ data.item.status }}
                        </span>
                      </template>
                      <template slot="action" slot-scope="data">
                        <MailIcon v-show="!data.item.isActiveStatus" class="cursor-pointer mr-2"></MailIcon>
                        <Edit3Icon @click="toggleModal" class="cursor-pointer mr-2"></Edit3Icon>
                        <TrashIcon @click="deleteAction" v-show="!data.item.director" class="cursor-pointer"></TrashIcon>
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
    <b-modal  size="lg" ref="edit" hide-footer title="Редактирование подразделения">
      <div class="d-block">
        <b-row>
          <b-col cols="12">

            <b-form-group
              label-cols-sm="3"
              label="Фамилия:"
              label-align-sm="right"
            >
              <b-form-input disabled size="sm"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Отчество:"
              label-align-sm="right"
            >
              <b-form-input  disabled size="sm"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Адрес эл. почты или телефон:"
              label-align-sm="right"
            >
              <b-form-input  disabled size="sm"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Имя:"
              label-align-sm="right"
            >
              <b-form-input  disabled size="sm"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Должность:"
              label-align-sm="right"
            >
              <b-form-input size="sm"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Подразделение:"
              label-align-sm="right"
            >
              <select style="height: 31px; font-size: 12px" class="form-control">
                <option>Бухгалтерия</option>
                <option>Руководства</option>
                <option>Call center</option>
                <option>Sub Accounting</option>
                <option>Sub Account 2</option>
              </select>

            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Роль:"
              label-align-sm="right"
            >
              <select style="height: 31px; font-size: 12px" class="form-control">
                >
                <option>Бухгалтерия</option>
                <option>Администратор</option>
                <option>Пользователь</option>
                <option>Администратор</option>
                <option>Call center operator</option>
              </select>

            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Доступ к документам:"
              label-align-sm="right"
            >
              <select style="height: 31px; font-size: 12px" class="form-control">
                <option>Бухгалтерия</option>
                <option>Администратор</option>
                <option>Пользователь</option>
                <option>Администратор</option>
                <option>Call center operator</option>
              </select>

            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeModal"><p @click="toggleModal">Сохранить изменение</p></div>
          <div class="canelMdoal"><p @click="toggleModal">Закрыть</p></div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal size="md" ref="delet" hide-footer title="Удаление">
      <div class="d-block">
        <h6 class="pb-4">Вы действительно хотите удалить?</h6>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeDeletAction mr-2"><p @click="deleteAction">Удалить</p></div>
          <div class="canelDeletAction"><p @click="deleteAction">Отмена</p></div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
    import EmployeeData from "./../../TestData/EmpolyeeSettingsData"
    import {
        TrashIcon,
        Edit3Icon,
        MailIcon
    } from 'vue-feather-icons'

    export default {
        name: 'reestr-settings-view',
        components: {
            TrashIcon,
            Edit3Icon,
            MailIcon
        },
        data () {
            return {
                employeeData: EmployeeData,
                fields: [
                    { key: "name", label: "Ф.И.О." },
                    { key: "post", label: "Должность" },
                    { key: "subdivision", label: "Подразделение" },
                    { key: "accountant", label: "Бухгалтер" },
                    { key: "status", label: "Статус" },
                    { key: "action", label: "Действие" },

                ]
            }
        },
        methods: {
            toggleModal() {
                this.$refs['edit'].toggle('#toggle-btn')
            },
            deleteAction() {
                this.$refs['delet'].toggle('#delet-btn')
            }

        },
    }
</script>
<style lang="scss">

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
  .employee-table {
    thead {
      tr {
        th:nth-child(6) {
          width: 102px;
          text-align:right;
        }
        th:nth-child(5) {
          width: 160px;
          text-align: center;
        }
      }
    }
    tbody {
      tr {
        td:nth-child(6) {
          text-align: right;
        }
        td:nth-child(5) {
          text-align: center;
          .badge {
            min-width: 85px ;
          }
        }
      }
    }
  }

</style>
