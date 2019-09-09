<template>
  <div class="content border">
    <div class="content-header">
      <b-row class="m-0">
        <b-col md="12" lg="4" class="p-0">
          <b-button class="lightgray-button mr-2">
            <Edit2Icon @click="slideOut.extraShow = !slideOut.extraShow" v-b-tooltip.hover
                       title="Подписать и отправить"/>
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
        <b-col md="12" lg="8" class="p-0">
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
            <b-button class="lightgray-button mr-2"  v-b-toggle.filter-inbox size="sm" style="padding: 5px">Фильтр
            </b-button>
            <b-button class="lightgray-button mr-2" @click="activeRightSidebar = !activeRightSidebar" size="sm"
                      style="padding: 5px">Массовое подписание
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="content-body" :class="{ 'position-absolute': bodyPosition  }">
      <div class="table-body">
        <div>
          <b-tabs justified class="document-tabs">
            <b-tab title-item-class="h5" active>
              <template slot="title">Счет фактуры</template>
              <b-table hover :fields="fields" :items="documents"
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
              <b-table hover :fields="fields" :items="documents" class="scrollTable">
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
              <b-table hover :fields="fields" :items="documents" class="scrollTable">
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
    </div>

    <vue-slideout-panel
      closeHtml='<span>X</span>'
      v-model="slideOut.extraShow"
      @close="slideOut.extraShow=false"
      :count=2
      :styles="slideOut.styles"
    >
      slideOut
      <div slot="extra">extrashow Text</div>
    </vue-slideout-panel>
  </div>
</template>
<script>
    import Documents from '../../TestData/Documents'
    import Multiselect from 'vue-multiselect'
    import RightSidebar from '../../components/sidebar/RightSidebar'
    import VueSlideOutPanel from 'vue-slideout-panel'

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
            RightSidebar,
            'vue-slideout-panel': VueSlideOutPanel
        },
        data () {
            return {
                slideOut: {
                    styles: [
                        {},
                        {
                            backgroundColor: '#ffc29c',
                            paddingTop: '2rem',
                            paddingBottom: '1rem'
                        },
                        {},
                        {
                            color: '#555',
                            textDecoration: 'none',
                            top: '8px',
                            right: '1rem'
                        }
                    ],
                    isActiveSlideOut: false,
                    extraShow: false,
                },
                selected: [],
                fixed: true,
                selectAll: false,
                activeRightSidebar: false,
                fields: [
                    { key: 'selected', label: '' },
                    { key: 'title', label: 'Наименование документа' },
                    { key: 'totalPrice', label: 'Общая сумма' },
                    { key: 'company_name', label: 'Контрагент' },
                    { key: 'updatedDateTime', label: 'Обновлен' },
                    { key: 'status', label: 'Статус' },
                    { key: 'action', label: '' }
                ],
                documents: Documents,
                value: [],
                options: [
                    { name: 'Договор', code: '1' },
                    { name: 'Счёт-фактура', code: '2' },
                    { name: 'Оферта', code: '3' },
                    { name: 'Отчёт по транзакциям', code: '4' },
                    { name: 'Акт и счёт фактура', code: '5' },
                    { name: 'Счет на оплату', code: '6' },
                    { name: 'Материальный отчет', code: '7' },
                    { name: 'Акт на штрафные санкции', code: '8' },
                    { name: 'Доверенность', code: '9' },
                    { name: 'Справка', code: '10' }
                ],
            }
        },
        methods: {
            select () {
                this.selected = []
                if (!this.selectAll) {
                    for (let i in this.documents) {
                        this.selected.push(this.documents[i].uniqueId)
                    }
                }
            },
            addTag (newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag)
                this.value.push(tag)
            },
        }
    }
</script>
<style scoped>

</style>
<style lang="scss">



</style>

