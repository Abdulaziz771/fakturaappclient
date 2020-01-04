<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 employee personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Согласование</span></b-col>
                <b-col class="text-right" v-if="!showMatchingSettings">
                  <EditIcon @click="onMatchingSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showMatchingSettings">
                <b-col cols="12">
                  <b-form-group
                    label-cols-sm="2"
                    label="Руководитель:"
                    label-align-sm="right"
                  >
                    <select style="height: 31px; font-size: 12px" class="form-control" v-model="form.responsibleSign">
                      <option>Жамшид Касымов (Директор)</option>
                      <option>Мирол Косимов (Сотрудник)</option>
                      <option>Абдулазиз Ахмедов (Frontend)</option>
                    </select>

                  </b-form-group>

                  <b-form-group
                    label-cols-sm="3"
                    label="Обязательность ЭЦП для согласования:"
                    label-align-sm="right"
                  >

                    <b-form-checkbox v-model="form.necessaryECP" value="Включено" unchecked-value="Выключено" switch>
                    </b-form-checkbox>

                  </b-form-group>

                  <b-form-group
                    label-cols-sm="3"
                    label="Включить отображение хода согласования:"
                    label-align-sm="right"
                  >

                    <b-form-checkbox v-model="form.agreeingProcess" value="Включено" unchecked-value="Выключено" switch>
                    </b-form-checkbox>

                  </b-form-group>

                  <b-form-group
                    label-cols-sm="3"
                    label="Поэтапное согласование:"
                    label-align-sm="right"
                  >

                    <b-form-checkbox v-model="form.stepAgreeing" value="Включено" unchecked-value="Выключено" switch>
                    </b-form-checkbox>

                  </b-form-group>
                </b-col>
                <b-col>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button size="sm" variant="outline-success" @click="onMatchingSettings(false)">Сохранить</b-button>
                    <b-button  size="sm" variant="outline-secondary" class="mr-3" @click="onMatchingSettings(false)">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col>
                  <b-list-group>
                    <b-list-group-item><b>Лицо, ответственное за подпись:</b> {{ form.responsibleSign }}</b-list-group-item>
                    <b-list-group-item><b>Обязательность ЭЦП для согласования:</b> {{ form.necessaryECP }}</b-list-group-item>
                    <b-list-group-item><b>Включить отображение хода согласования:</b> {{ form.agreeingProcess }} </b-list-group-item>
                    <b-list-group-item><b>Поэтапное согласование:</b> {{ form.stepAgreeing }} </b-list-group-item>
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
        name: 'matching-settings-view',
        components: {
            EditIcon
        },
        data () {
            return {
                showMatchingSettings: false,
                form: {
                    responsibleSign: "Абдулазиз Ахмедов (Frontend)",
                    necessaryECP: "Включено",
                    agreeingProcess: "Включено",
                    stepAgreeing: "Выключено",
                }
            }
        },
        methods: {
            toggleModal() {
                this.$refs['edit'].toggle('#toggle-btn');
            },
            onMatchingSettings(value) {
                this.showMatchingSettings = value;
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
