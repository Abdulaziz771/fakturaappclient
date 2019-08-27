<template>
  <div class="content">
    <b-collapse id="filter-inbox" class="m-2">
      <b-card>
        <b-row>
          <b-col md="6">

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="Counterparty">Контрагент</label>
              </div>
              <select class="custom-select" id="Counterparty" placeholder="Введите инн или название"></select>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputId5">Создан с</label>
              </div>
              <b-form-input type="date" id="inputId5"></b-form-input>
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputId4">по</label>
              </div>
              <b-form-input type="date" id="inputId4"></b-form-input>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="status">Статус</label>
              </div>
              <select class="custom-select" id="status">
                <option value="1"></option>
                <option value="2">Требуется подпись</option>
                <option value="3">На рассмотрении аннулирования</option>
              </select>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="Subdivision">Подразделение</label>
              </div>
              <select class="custom-select" id="Subdivision">
                <option></option>
                <option value="18">Бухгалтерия</option>
                <option value="40">Руководства</option>
                <option value="861">Call center (код:)</option>
                <option value="898">Sub Accounting</option>
              </select>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputId3">Реестр</label>
              </div>
              <b-form-input type="text" id="inputId3"></b-form-input>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputId2">Наименование документа</label>
              </div>
              <b-form-input type="text" id="inputId2"></b-form-input>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputId1">Метка</label>
              </div>
              <b-form-input type="text" id="inputId1"></b-form-input>
            </div>

          </b-col>

          <b-col md="6">
            <label for="selectDoc">Тип документа</label>
            <multiselect id="selectDoc" v-model="value" tag-placeholder="Add this as new tag"
                         label="name" :options="options" :multiple="true" :taggable="true"
                         @tag="addTag">
            </multiselect>
          </b-col>

        </b-row>
        <b-row>
          <b-col md="3" offset-md="9" class="text-right">
            <b-button variant="success" size="sm" class="m-1">Показать</b-button>
            <b-button variant="light" size="sm" class="m-1">Сбросить</b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-collapse>
    <div id="fixed-content-header">
      <b-container fluid>
        <b-row>
          <b-col md="12" lg="5" class="p-0">
            <b-button class="lightgray-button mr-2">
              <Edit2Icon v-b-tooltip.hover title="Подписать и отправить"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <XCircleIcon v-b-tooltip.hover title="Отказать и удалить"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <UsersIcon v-b-tooltip.hover title="Отправить на согласование"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <StarIcon class="cursor-pointer " v-b-tooltip.hover title="Отметить как"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <PrinterIcon class="cursor-pointer " v-b-tooltip.hover title="Отправить на печать"/>
            </b-button>
          </b-col>
          <b-col md="12" lg="7" class="p-0">
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
              <b-button class="lightgray-button mr-2" v-b-toggle.filter-inbox size="sm" style="padding: 5px">Фильтр</b-button>
              <b-button class="lightgray-button mr-2" @click="activeRightSidebar = !activeRightSidebar" size="sm"
                        style="padding: 5px">Массовое подписание
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="pt-5">
      <b-tabs justified class="mt-2 document-tabs">
        <b-tab title-item-class="h5" active>
          <template slot="title">Счет фактуры</template>
          <b-table sticky-header striped hover sticky-header="83vh" :fields="fields" :items="documents"
                   class="documentTable">
            <template slot="HEAD_selected" slot-scope="data">
              <b-form-checkbox v-model="selectAll" @change="select"/>
            </template>
            <template slot="selected" slot-scope="data">
              <b-form-checkbox :value="data.item.uniqueId" v-model="selected"/>
            </template>
            <template slot="title" slot-scope="data">
              {{ data.item.title }} <br>
              <small><em> Создан: {{ data.item.createdDateTime }} </em></small>
            </template>
            <template slot="totalPrice" slot-scope="data">
              {{ data.item.totalPrice }}
            </template>
            <template slot="company_name" slot-scope="data">
              <b>{{ data.item.contractor.name }}</b> <br>
              <small><em> ИНН: {{ data.item.contractor.inn }} </em></small>
            </template>
            <template slot="updatedDateTime" slot-scope="data">
              {{ data.item.updatedDateTime }}
            </template>
            <template slot="status" slot-scope="data">
              {{ data.item.status }}
            </template>
            <template slot="action" slot-scope="data">
              <EyeIcon class="action-icon"/>
            </template>
          </b-table>
        </b-tab>
        <b-tab title-item-class="h5">
          <template slot="title">Договоры</template>
          <b-table sticky-header striped hover :fields="fields" :items="documents" class="scrollTable">
            <template slot="HEAD_selected" slot-scope="data">
              <b-form-checkbox v-model="selectAll" @change="select"/>
            </template>
            <template slot="selected" slot-scope="data">
              <b-form-checkbox :value="data.item.uniqueId" v-model="selected"/>
            </template>
            <template slot="title" slot-scope="data">
              {{ data.item.title }} <br>
              <small><em> Создан: {{ data.item.createdDateTime }} </em></small>
            </template>
            <template slot="totalPrice" slot-scope="data">
              {{ data.item.totalPrice }}
            </template>
            <template slot="company_name" slot-scope="data">
              <b>{{ data.item.contractor.name }}</b> <br>
              <small><em> ИНН: {{ data.item.contractor.inn }} </em></small>
            </template>
            <template slot="updatedDateTime" slot-scope="data">
              {{ data.item.updatedDateTime }}
            </template>
            <template slot="status" slot-scope="data">
              {{ data.item.status }}
            </template>
            <template slot="action" slot-scope="data">
              <EyeIcon class="action-icon"/>
            </template>
          </b-table>
        </b-tab>
        <b-tab title-item-class="h5">
          <template slot="title">Акты</template>
          <b-table sticky-header striped hover :fields="fields" :items="documents" class="scrollTable">
            <template slot="HEAD_selected" slot-scope="data">
              <b-form-checkbox v-model="selectAll" @change="select"/>
            </template>
            <template slot="selected" slot-scope="data">
              <b-form-checkbox :value="data.item.uniqueId" v-model="selected"/>
            </template>
            <template slot="title" slot-scope="data">
              {{ data.item.title }} <br>
              <small><em> Создан: {{ data.item.createdDateTime }} </em></small>
            </template>
            <template slot="totalPrice" slot-scope="data">
              {{ data.item.totalPrice }}
            </template>
            <template slot="company_name" slot-scope="data">
              <b>{{ data.item.contractor.name }}</b> <br>
              <small><em> ИНН: {{ data.item.contractor.inn }} </em></small>
            </template>
            <template slot="updatedDateTime" slot-scope="data">
              {{ data.item.updatedDateTime }}
            </template>
            <template slot="status" slot-scope="data">
              {{ data.item.status }}
            </template>
            <template slot="action" slot-scope="data">
              <EyeIcon class="action-icon"/>
            </template>
          </b-table>
        </b-tab>
      </b-tabs>
      <RightSidebar :active="activeRightSidebar"/>
    </div>
  </div>
</template>
<script>
    import Documents from '../../TestData/Documents'
    import Multiselect from 'vue-multiselect'
    import RightSidebar from '../../components/sidebar/RightSidebar'

    import {
        ArrowLeftCircleIcon,
        ChevronRightIcon,
        ChevronLeftIcon,
        EyeIcon,
        Edit2Icon,
        XCircleIcon,
        UsersIcon,
        StarIcon,
        PrinterIcon
    } from 'vue-feather-icons'

    export default {
        name: 'inbox-documents-component',
        components: {
            ArrowLeftCircleIcon,
            EyeIcon,
            Edit2Icon,
            XCircleIcon,
            UsersIcon,
            StarIcon,
            PrinterIcon,
            ChevronRightIcon,
            ChevronLeftIcon,
            Multiselect,
            RightSidebar
        },
        data() {
            return {
                selected: [],
                fixed: true,
                selectAll: false,
                activeRightSidebar: true,
                fields: [
                    {key: 'selected', label: ''},
                    {key: 'title', label: 'Наименование документа'},
                    {key: 'totalPrice', label: 'Общая сумма'},
                    {key: 'company_name', label: 'Контрагент'},
                    {key: 'updatedDateTime', label: 'Обновлен'},
                    {key: 'status', label: 'Статус'},
                    {key: 'action', label: ''}
                ],
                documents: Documents,
                value: [],
                options: [
                    {name: 'Договор'},
                    {name: 'Счёт-фактура'},
                    {name: 'Оферта'},
                    {name: 'Отчёт по транзакциям'},
                    {name: 'Акт и счёт фактура'},
                    {name: 'Счет на оплату'},
                    {name: 'Материальный отчет'},
                    {name: 'Акт на штрафные санкции'},
                    {name: 'Доверенность'},
                    {name: 'Справка'}
                ]
            }
        },
        methods: {
            select() {
                this.selected = []
                if (!this.selectAll) {
                    for (let i in this.documents) {
                        this.selected.push(this.documents[i].uniqueId)
                    }
                }
            },
            addTag(newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag)
                this.value.push(tag)
            }
        }
    }
</script>
<style scoped>
  .lightgray-button svg {
    color: #6b6868;
    padding: 2px;
  }
</style>
<style lang="scss">
  .scrollTable thead th:first-child {
    width: 50px;
  }
  .scrollTable thead th:last-child {
    width: 50px;
  }
</style>

