<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 employee personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Реестры</span></b-col>
                <b-col class="text-right" v-if="!showReestrSettings">
                  <EditIcon @click="onReestrSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showReestrSettings">
                <b-col cols="12">
                  <b-form-group
                    label-cols-sm="2"
                    label="Руководитель:"
                    label-align-sm="right"
                  >
                    <select style="height: 31px; font-size: 12px" class="form-control" v-model="form.supervisor">
                      <option>Жамшид Касымов (Директор)</option>
                      <option>Мирол Косимов (Сотрудник)</option>
                      <option>Абдулазиз Ахмедов (Frontend)</option>
                    </select>

                  </b-form-group>

                  <b-form-group
                    label-cols-sm="2"
                    label="Главный бухгалтер:"
                    label-align-sm="right"
                  >
                    <select style="height: 31px; font-size: 12px" class="form-control" v-model="form.accountant">
                      <option>Жамшид Касымов (Директор)</option>
                      <option>Мирол Косимов (Сотрудник)</option>
                      <option>Абдулазиз Ахмедов (Frontend)</option>
                    </select>

                  </b-form-group>

                  <b-form-group
                    label-cols-sm="2"
                    label="Товар отпустил:"
                    label-align-sm="right"
                  >
                    <select style="height: 31px; font-size: 12px" class="form-control" v-model="form.releaser">
                      <option>Жамшид Касымов (Директор)</option>
                      <option>Мирол Косимов (Сотрудник)</option>
                      <option>Абдулазиз Ахмедов (Frontend)</option>
                    </select>

                  </b-form-group>
                </b-col>
                <b-col>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button size="sm" variant="outline-success" @click="onReestrSettings(false)">Сохранить</b-button>
                    <b-button  size="sm" variant="outline-secondary" class="mr-3" @click="onReestrSettings(false)">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col>
                  <b-list-group>
                    <b-list-group-item><b>Руководитель:</b> {{form.supervisor}}</b-list-group-item>
                    <b-list-group-item><b>Главный бухгалтер:</b> {{form.accountant}}</b-list-group-item>
                    <b-list-group-item><b>Товар отпустил:</b> {{form.releaser}} </b-list-group-item>

                  </b-list-group>
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
    import {
        EditIcon
    } from 'vue-feather-icons'

    export default {
        name: 'registry-settings-view',
        components: {
            EditIcon
        },
        data () {
            return {
                showReestrSettings: false,
                form: {
                    supervisor: 'Жамшид Касымов (Директор)',
                    accountant: 'Жамшид Касымов (Директор)',
                    releaser: "Абдулазиз Ахмедов (Frontend)"
                }
            }
        },
        methods: {
            toggleModal() {
                this.$refs['edit'].toggle('#toggle-btn');
            },
            onReestrSettings(value) {
                this.showReestrSettings = value;
            }
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', true)
        }
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

</style>
