<template>
  <div class="content">
    <div class="content-body">
      <div class="content-header border-bottom-tool">
        <b-row class="m-0">
          <b-col sm="6" md="6" xl="8" class="d-sm-flex action-list d-none" :class="bindClass2">
            <div class="tool-actions pt-3" :class="bindClass">
              <XIcon v-b-tooltip.hover title="Удалить"/><span>Удалить</span>
            </div>
            <div class="tool-actions pt-3" :class="bindClass">
              <StarIcon v-b-tooltip.hover title="Отметить"/><span>Отметить</span>
            </div>
            <div class="tool-actions pt-3" :class="bindClass">
              <PrinterIcon v-b-tooltip.hover title="Печать"/><span>Печать</span>
            </div>
          </b-col>
          <b-col cols="12" sm="6" md="6" xl="4" class="d-sm-flex action-list justify-content-end p-0" :class="bindClass3">
            <div class="counter-tool counter  cursor-pointer">
              <span class="pt-1">
                <span>
                  <span>1</span>–<span>20</span>
                </span> из <span>21</span>
              </span>
            </div>
            <div class="counter-tool toggle-page-left rounded-circle mr-2">
              <ChevronLeftIcon class="cursor-pointer"/>
            </div>
            <div class="counter-tool toggle-page-right rounded-circle">
              <ChevronRightIcon class="cursor-pointer"/>
            </div>
            <div class="counter-tool filter-view" :class="{ fltrBtonAct : isActiveFltr }" @click="isActiveFltr = !isActiveFltr" v-b-toggle.collapse-1>
              <SlidersIcon class="cursor-pointer"/>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="table-body">
        <div>
          <b-collapse id="collapse-1">
            <b-card>
              <b-row>
                <b-col md="6">
                  <div class="input-group input-group-sm mb-3">
                    <span class="filter-form" for="Counterparty">Контрагент</span>
                    <select class="custom-select custom-select-ftr left-form" id="Counterparty" placeholder="Введите инн или название"></select>
                  </div>
                  <div class="input-group input-group-sm mb-3">
                    <label class="filter-form" >Создан</label>
                    <div class="input-group input-group-sm left-form">
                      <div class="input-group-prepend">
                        <label class="input-group-text">с</label>
                      </div>
                      <b-form-input type="date" id="inputId5"></b-form-input>
                      <div class="input-group-prepend">
                        <label class="input-group-text">по</label>
                      </div>
                      <b-form-input type="date" id="inputId4"></b-form-input>
                    </div>
                  </div>
                  <div class="input-group input-group-sm mb-3">
                    <label class="filter-form" for="status">Статус</label>
                    <select class="custom-select custom-select-ftr left-form" id="status">
                      <option value="1"></option>
                      <option value="2">Требуется подпись</option>
                      <option value="3">На рассмотрении аннулирования</option>
                    </select>
                  </div>
                  <div class="input-group input-group-sm mb-3">
                    <label class="filter-form" for="Subdivision">Подразделение</label>
                    <select class="custom-select custom-select-ftr left-form" id="Subdivision">
                      <option></option>
                      <option value="18">Бухгалтерия</option>
                      <option value="40">Руководства</option>
                      <option value="861">Call center (код:)</option>
                      <option value="898">Sub Accounting</option>
                    </select>
                  </div>
                </b-col>
                <b-col md="6">
                  <label  class="multi-select-label" for="selectDoc">Тип документа</label>
                  <multiselect class="multi-select" id="selectDoc" v-model="value" tag-placeholder="Add this as new tag"
                               label="name" track-by="code" :options="options" :multiple="true" :taggable="true"
                               @tag="addTag">
                  </multiselect>
                  <div class="input-group input-group-sm pt-2 mb-3">
                    <label class="filter-form" >Реестр</label>
                    <b-form-input class="left-form" type="text" id="inputId3"></b-form-input>
                  </div>
                  <div class="input-group input-group-sm mb-3">
                    <label class="filter-form" >Наименование документа</label>
                    <b-form-input class="left-form" type="text" id="inputId2"></b-form-input>
                  </div>
                  <div class="input-group input-group-sm mb-3">
                    <label class="filter-form" >Метка</label>
                    <b-form-input class="left-form" type="text" id="inputId1"></b-form-input>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <div class="text-right">
                    <b-button size="sm" variant="outline-secondary" @click="isActiveFltr = !isActiveFltr" v-b-toggle.collapse-1>Отменить</b-button>
                    <b-button size="sm" variant="outline-success" class="ml-2" @click="isActiveFltr = !isActiveFltr" v-b-toggle.collapse-1>Применить</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-collapse>
          <b-tabs justified class="document-tabs table-responsive inbox-document-tabs">
              <b-tab title-item-class="h5 " active>
                <template slot="title"><FileIcon class="tab-icon"></FileIcon>Счет фактуры</template>
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
                        <small><ClockIcon class="clockIcon"></ClockIcon> Создан: {{ data.item.createdDateTime }}</small></b>
                    </router-link>
                  </template>
                  <template slot="totalPrice" slot-scope="data">
                    {{ data.item.totalPrice }}
                  </template>
                  <template slot="company_name" slot-scope="data">
                    {{ data.item.contractor.name }} <br>
                    <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> ИНН: {{ data.item.contractor.inn }}</small>
                  </template>
                  <template slot="updatedDateTime" slot-scope="data">
                    {{ data.item.updatedDateTime }}
                  </template>
                  <template slot="status" slot-scope="data">
                  <span class="badge  badge-success">
                    {{ data.item.status }}
                  </span>
                  </template>
                </b-table>
              </b-tab>
              <b-tab title-item-class="h5">
                <template slot="title"><LayersIcon class="tab-icon"></LayersIcon>Договоры</template>
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
                        <small><ClockIcon class="clockIcon"></ClockIcon>Создан: {{ data.item.createdDateTime }} </small></b>
                    </router-link>
                  </template>
                  <template slot="totalPrice" slot-scope="data">
                    {{ data.item.totalPrice }}
                  </template>
                  <template slot="company_name" slot-scope="data">
                    {{ data.item.contractor.name }} <br>
                    <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> ИНН: {{ data.item.contractor.inn }} </small>
                  </template>
                  <template slot="updatedDateTime" slot-scope="data">
                    {{ data.item.updatedDateTime }}
                  </template>
                  <template slot="status" slot-scope="data">
                  <span class="badge badge-warning">
                    {{ data.item.status }}
                  </span>
                  </template>
                </b-table>
              </b-tab>
              <b-tab title-item-class="h5">
                <template slot="title" ><FileTextIcon class="tab-icon"></FileTextIcon>Акты</template>
                <b-table hover :fields="fields" :items="documents" class="scrollTable inboxDocTable">
                  <template slot="HEAD_selected" slot-scope="data" >
                    <b-form-checkbox v-model="selectAll" @change="select" />
                  </template>
                  <template slot="selected" slot-scope="data" class="checkbox-table">
                    <b-form-checkbox :value="data.item.uniqueId" v-model="selected"/>
                  </template>
                  <template slot="title" slot-scope="data">
                    <router-link class="router-link table-router-link" :to="{name: 'document-details', }">
                      <b>{{ data.item.title }} <br>
                        <small><ClockIcon class="clockIcon"></ClockIcon> Создан: {{ data.item.createdDateTime }}</small></b>
                    </router-link>
                  </template>
                  <template slot="totalPrice" slot-scope="data">
                    {{ data.item.totalPrice }}
                  </template>
                  <template slot="company_name" slot-scope="data">
                    {{ data.item.contractor.name }}<br>
                    <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> ИНН: {{ data.item.contractor.inn }}</small>
                  </template>
                  <template slot="updatedDateTime" slot-scope="data">
                    {{ data.item.updatedDateTime }}
                  </template>
                  <template slot="status" slot-scope="data">
                  <span class="badge badge-info">
                    <i class="fab fa-accessible-icon"></i>{{ data.item.status }}
                  </span>
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
        ClockIcon,
        AlertCircleIcon,
        FileIcon,
        LayersIcon,
        FileTextIcon,
    } from 'vue-feather-icons'

    export default {
        name: 'outbox-documents-component',
        components: {
            ArrowLeftCircleIcon,
            EyeIcon,
            Edit2Icon,
            XCircleIcon,
            UsersIcon,
            ClockIcon,
            StarIcon,
            AlertCircleIcon,
            PrinterIcon,
            ChevronRightIcon,
            FileTextIcon,
            ChevronLeftIcon,
            XIcon,
            SlidersIcon,
            LayersIcon,
            FileIcon,
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
                isActiveFltr: false,
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
  .card {
    background: #f7f9fd !important;
    border-top: none;
    border-bottom: 0;
    border-right:1px solid rgba(0, 0, 0, 0.125);
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0;
  }
</style>
<style lang="scss">
  .page:hover {
    background:rgba(0,0,0,0.05);
  }

  .counter {
    padding-top: 18px !important;
  }

  .clockIcon, .alertCircleIcon {
    width: 9px;
  }

  .tab-icon {
    width: 15px;
    margin-right: 8px;
  }

  .inboxDocTable thead th:nth-child(1)  {
    width: 37px;
    padding-left: 15px;
    div {
      border: none !important;
    }
  }

  .table td {
    padding-left: 6px !important;
  }

  .filter-form {
    padding: 7px 0px;
    padding-right: 15px;
    color: #8e8e8e;
  }

  .multi-select-label {
    color: #8e8e8e;
  }

  .input-group-text {
    height: 31px;
  }

  .filter-form {
    width: 25%;
    text-align: right;
  }

  .left-form {
    width: 75%;
  }

  .multi-select {
    width: 75%;
    float: right;
    font-size: 13px;
  }

  .multi-select-label {
    width: 25%;
    padding: 10px;
    text-align: right;
  }

  .fltrBtonAct {
    background: rgba(0, 0, 0, 0.05);
  }

  #collapse-1 {
    //filter forms
    .form-control, .custom-select, .multiselect__tags, .multiselect__input{
      background: white;
      border-radius: 4px !important;
    }

    .multiselect__input {
      font-size: 13px;
    }

    .custom-select-ftr {
      border: 1px solid #e8e8e8;
    }

    .form-control {
      border: 1px solid #e8e8e8;
    }
  }
</style>

