<template>
  <div class="content">

    <div class="content-body">
      <div class="content-header border-bottom-tool">
        <b-row class="m-0">
          <b-col sm="6" md="6" xl="8" class="d-sm-flex action-list d-none" :class="bindClass2">
            <div class="tool-actions pt-3" :class="bindClass">
              <Edit2Icon v-b-tooltip.hover title="Подписать" /><span>Подписать</span>
            </div>
            <div class="tool-actions pt-3" :class="bindClass">
              <XIcon v-b-tooltip.hover title="Удалить"/><span>Удалить</span>
            </div>
            <div class="tool-actions pt-3" :class="bindClass">
              <UsersIcon v-b-tooltip.hover title="Согласовать"/><span>Согласовать</span>
            </div>
            <div class="tool-actions pt-3" :class="bindClass">
              <StarIcon v-b-tooltip.hover title="Отметить"/><span>Отметить</span>
            </div>
            <div class="tool-actions pt-3" :class="bindClass">
              <PrinterIcon v-b-tooltip.hover title="Печать"/><span>Печать</span>
            </div>
          </b-col>
          <b-col cols="12" sm="6" md="6" xl="4" class="d-sm-flex action-list justify-content-end p-0" :class="bindClass3">
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
      <div class="table-body">
        <div>
          <b-tabs justified class="document-tabs table-responsive inbox-document-tabs">
            <b-tab title-item-class="h5" active>
              <template slot="title">Счет фактуры</template>
              <b-table hover :fields="fields" :items="documents"
                       class="documentTable inboxDocTable" >
                <template slot="HEAD_selected" slot-scope="data">
                  <b-form-checkbox v-model="selectAll" @change="select" />
                </template>
                <template slot="selected" slot-scope="data">
                  <b-form-checkbox :value="data.item.uniqueId" v-model="selected" />
                </template>
                <template slot="title" slot-scope="data">
                  <router-link class="router-link table-router-link" :to="{name: 'document-details'}">
                    <b>{{ data.item.title }} <br>
                    <small><em> Создан: {{ data.item.createdDateTime }} </em></small></b>
                  </router-link>
                </template>
                <template slot="totalPrice" slot-scope="data">
                  {{ data.item.totalPrice }}
                </template>
                <template slot="company_name" slot-scope="data">
                  {{ data.item.contractor.name }} <br>
                  <small><em> ИНН: {{ data.item.contractor.inn }} </em></small>
                </template>
                <template slot="updatedDateTime" slot-scope="data">
                  {{ data.item.updatedDateTime }}
                </template>
                <template slot="status" slot-scope="data">
                  {{ data.item.status }}
                </template>
              </b-table>
            </b-tab>
            <b-tab title-item-class="h5">
              <template slot="title">Договоры</template>
              <b-table hover :fields="fields" :items="documents" class="scrollTable inboxDocTable">

                <template slot="HEAD_selected" slot-scope="data">
                  <b-form-checkbox v-model="selectAll" @change="select"/>
                </template>
                <template slot="selected" slot-scope="data">
                  <b-form-checkbox :value="data.item.uniqueId" v-model="selected" />
                </template>
                <template slot="title" slot-scope="data">
                  <router-link class="router-link table-router-link" :to="{name: 'document-details'}">
                    <b>{{ data.item.title }} <br>
                    <small><em> Создан: {{ data.item.createdDateTime }} </em></small></b>
                  </router-link>
                </template>
                <template slot="totalPrice" slot-scope="data">
                  {{ data.item.totalPrice }}
                </template>
                <template slot="company_name" slot-scope="data">
                  {{ data.item.contractor.name }} <br>
                  <small><em> ИНН: {{ data.item.contractor.inn }} </em></small>
                </template>
                <template slot="updatedDateTime" slot-scope="data">
                  {{ data.item.updatedDateTime }}
                </template>
                <template slot="status" slot-scope="data">
                  {{ data.item.status }}
                </template>
              </b-table>
            </b-tab>
            <b-tab title-item-class="h5">
              <template slot="title" >Акты</template>
              <b-table hover :fields="fields" :items="documents" class="scrollTable inboxDocTable">
                <template slot="HEAD_selected" slot-scope="data" >
                  <b-form-checkbox v-model="selectAll" @change="select" />
                </template>
                <template slot="selected" slot-scope="data" class="checkbox-table">
                  <b-form-checkbox :value="data.item.uniqueId" v-model="selected"/>
                </template>
                <template slot="title" slot-scope="data">
                  <router-link class="router-link table-router-link" :to="{name: 'document-details'}">
                    <b>{{ data.item.title }} <br>
                    <small><em> Создан: {{ data.item.createdDateTime }} </em></small></b>
                  </router-link>
                </template>
                <template slot="totalPrice" slot-scope="data">
                  {{ data.item.totalPrice }}
                </template>
                <template slot="company_name" slot-scope="data">
                  {{ data.item.contractor.name }}<br>
                  <small><em> ИНН: {{ data.item.contractor.inn }} </em></small>
                </template>
                <template slot="updatedDateTime" slot-scope="data">
                  {{ data.item.updatedDateTime }}
                </template>
                <template slot="status" slot-scope="data">
                  {{ data.item.status }}
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
        PrinterIcon,
        XIcon,
        SlidersIcon,
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
            XIcon,
            SlidersIcon,
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
                ]
            }
        },
        computed: {
          bindClass() {
              if (this.selected.length > 0) {
                  return 'cursor-pointer hover-effect-active';

              } else if (this.selected.length == 0) {
                  return 'text-disabled cursor-default'
              }
          },
          bindClass2() {
              if (this.selected.length > 0) {
                  return 'd-flex'
              } else if (this.selected.length == 0) {
                  return 'd-none'
              }
          },
            bindClass3() {
              if (this.selected.length > 0) {
                  return 'd-none'
              } else if (this.selected.length == 0) {
                  return 'd-flex'
              }
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
            }
        }
    }
</script>
<style scoped>

</style>
<style lang="scss">
  .page:hover {
    background:rgba(0,0,0,0.05);
  }
</style>

