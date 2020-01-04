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
                        <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> Создан: {{ data.item.createdDate | date }}</small>
                      </template>
                      <template slot="refleshDate" slot-scope="data" >
                        {{ data.item.refleshDate | date }}
                      </template>
                      <template slot="action">
                        <Edit3Icon class="cursor-pointer mr-2" @click="toggleChangeModal(data.item)"></Edit3Icon>
                        <TrashIcon  class="cursor-pointer" ></TrashIcon>
                      </template>
                    </b-table>
                    <b-button size="sm" class="float-right" @click="toggleModal">Добавить</b-button>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-container>
      </div>
    </div>
    <b-modal  class="special-modal" size="lg" ref="add" hide-footer title="Добавление метки">
      <div class="d-block">
        <b-row>
          <b-col cols="12">
            <b-form-group
              label-cols-sm="3"
              label="Название:"
              label-align-sm="right"
            >
              <b-form-input size="sm" v-model="markName"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeModal" v-if="false"><p>Сохранить изменение</p></div>
          <div class="closeModal" v-else @click="addMark"><p >Сохранить изменение</p></div>
          <div class="canelMdoal"><p @click="toggleModal">Закрыть</p></div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal  class="special-modal" size="lg" ref="chnage" hide-footer title="Редактировать метку">
      <div class="d-block">
        <b-row>
          <b-col cols="12">
            <b-form-group
              label-cols-sm="3"
              label="Название:"
              label-align-sm="right"
            >
              <b-form-input size="sm" v-model="changeName"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeModal" v-if="false"><p>Сохранить изменение</p></div>
          <div class="closeModal" v-else @click="toggleChangeModal"><p >Сохранить изменение</p></div>
          <div class="canelMdoal"><p @click="toggleChangeModal">Закрыть</p></div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>

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
                // newDate: new Date(),
                // dateFormat: this.newDate.getDate() + '.' + this.newDate.getMonth() + '.' + this.newDate.getFullYear(),
                markName: null,
                changeName: null,
                test: new Date(),
                labelTable: [
                    {
                        name: "Фирма",
                        createdDate: "29.10.2019 14:17:05",
                        refleshDate: "29.10.2019 14:17:05"
                    },
                    {
                        name: "Организация",
                        createdDate: "29.10.2019 14:17:05",
                        refleshDate: "29.10.2019 14:17:05"
                    },
                    {
                        name: "Предприятие",
                        createdDate: "29.10.2019 14:17:05",
                        refleshDate: "29.10.2019 14:17:05"
                    }
                ],
                fields: [
                    { key: "name", label: "Название" },
                    { key: "refleshDate", label: "Обновлен" },
                    { key: "action", label: "Действия" },
                ]
            }
        },
        filters: {
            date(value) {
                return value.toLocaleString()
            }
        },
        methods: {
            addMark() {
                this.labelTable.push({
                   name: this.markName,
                    createdDate: new Date(),
                    refleshDate: new Date()

                });
                this.toggleModal()
            },
            toggleModal() {
                this.$refs['add'].toggle('#toggle-btn');
            },
            toggleChangeModal() {
                this.$refs['chnage'].toggle('#toggle-btn');
            }
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', true)
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

  .alertCircleIcon {
    width: 10px;
  }

</style>
