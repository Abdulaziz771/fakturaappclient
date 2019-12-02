<template>
  <div class="content">
    <div class="content-body">
      <div class="content-header border-bottom-tool">
        <b-row class="m-0">
          <b-col sm="6" md="6" xl="8" class="d-sm-flex action-list d-none" :class="bindClass2">
            <div class="tool-actions pt-3" :class="bindClass">
              <XIcon v-b-tooltip.hover title="Удалить"/>
              <span>Удалить</span>
            </div>
<!--            <div class="doc-search" @click="isActiveSrch = !isActiveSrch" :class="{ activeDocSearch : isActiveSrch }">-->
<!--              <label for="search" @click="isActiveSrch = !isActiveSrch">-->
<!--                <SearchIcon></SearchIcon>-->
<!--              </label>-->
<!--              <b-input-group size="sm" class="">-->
<!--                <b-form-input placeholder="Поиск" id="search"></b-form-input>-->
<!--              </b-input-group>-->
<!--              <span><XIcon></XIcon></span>-->
<!--            </div>-->
          </b-col>
          <b-col cols="12" sm="6" md="6" xl="4" class="d-sm-flex action-list justify-content-end pr-2 padding-for-pages-with-table"
                 :class="bindClass3">
            <div class="counter-tool counter  cursor-pointer">
              <span class="page-counter">
                <span>
                  <span>1</span>–<span>20</span>
                </span> из <span>21</span>
              </span>
            </div>
            <div class="counter-tool cursor-pointer toggle-page-left rounded-circle mr-2">
              <ChevronLeftIcon class=""/>
            </div>
            <div class="counter-tool cursor-pointer toggle-page-right rounded-circle">
              <ChevronRightIcon class=""/>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="table-body">
        <div>
          <div class="document-tabs table-responsive import-table">
            <b-table hover :fields="fields" :items="documents"
                     class="documentTable inboxDocTable">
              <template slot="HEAD_selected" slot-scope="data">
                <b-form-checkbox v-model="selectAll" @change="select"/>
              </template>
              <template slot="selected" slot-scope="data">
                <b-form-checkbox :value="data.item.uniqueId" v-model="selected"/>
              </template>
              <template slot="title" slot-scope="data">
                <router-link class="router-link table-router-link" :to="{name: 'document-details'}">
                  <b>{{ data.item.title }} <br>
                    <small>
                      <ClockIcon class="clockIcon"></ClockIcon>
                      Создан: {{ data.item.createdDateTime }}</small></b>
                </router-link>
              </template>
              <template slot="totalPrice" slot-scope="data">
                {{ data.item.totalPrice }}
              </template>
              <template slot="company_name" slot-scope="data">
                {{ data.item.contractor.name }} <br>
              </template>
              <template slot="updatedDateTime" slot-scope="data">
                {{ data.item.updatedDateTime }}
              </template>
              <template slot="status" slot-scope="data">
                <template v-if='data.item.status === "обработана"'>
                  <span class="badge fix-w-badge badge-success">
                    {{ data.item.status }}
                  </span>
                </template>
                <template v-if='data.item.status === "ошибка"'>
                  <span class="badge fix-w-badge badge-danger">
                    {{ data.item.status }}
                  </span>
                </template>
                <template v-if='data.item.status === "в проверки"'>
                  <span class="badge fix-w-badge badge-warning">
                    {{ data.item.status }}
                  </span>
                </template>
              </template>
            </b-table>
          </div>
<!--          <RightSidebar :active="activeRightSidebar"/>-->
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
    import Documents from '../../TestData/ImportDocs'
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
        SearchIcon,
    } from 'vue-feather-icons'

    export default {
        name: 'import-documents-component',
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
            SearchIcon,
            'vue-slideout-panel': VueSlideOutPanel
        },
        data() {
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
                    {key: 'selected', label: ''},
                    {key: 'title', label: 'Наименование файла'},
                    {key: 'totalPrice', label: 'Общая сумма'},
                    {key: 'company_name', label: 'Количество'},
                    {key: 'status', label: 'Статус'},
                ],
                documents: Documents,
                value: [],
                options: [
                    {name: 'Договор', code: '1'},
                    {name: 'Счёт-фактура', code: '2'},
                    {name: 'Оферта', code: '3'},
                    {name: 'Отчёт по транзакциям', code: '4'},
                    {name: 'Акт и счёт фактура', code: '5'},
                    {name: 'Счет на оплату', code: '6'},
                    {name: 'Материальный отчет', code: '7'},
                    {name: 'Акт на штрафные санкции', code: '8'},
                    {name: 'Доверенность', code: '9'},
                    {name: 'Справка', code: '10'}
                ],
                isActiveSrch: false,
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
  .card {
    background: #f7f9fd !important;
    border-top: none;
    border-bottom: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0;
  }
</style>
<style lang="scss">
  .page:hover {
    background: rgba(0, 0, 0, 0.05);
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

  .import-table {
      table td:nth-child(5), table thead th:nth-child(5) {
        width: 162px;
        text-align: center;
      }
      table td:nth-child(4), table thead th:nth-child(4) {
        width: 113px;
        text-align: center;
      }
  }

  .inboxDocTable thead th:nth-child(1) {
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

  //document-search in tool-bar
  .activeDocSearch {
    left: 300px !important;
    transition: 0.1s;
    width: 80% !important;
    background: #f6f6f7 !important;
    border: 1px solid #e0e0e0 !important;

    span {
      display: block !important;
    }
  }

  /*.doc-search {*/
  /*  position: relative;*/
  /*  left: 495px;*/
  /*  z-index: 99;*/
  /*  transition: 0.1s;*/
  /*  width: 487px;*/
  /*  margin: 8px;*/
  /*  display: flex;*/
  /*  border-radius: 5px;*/
  /*  flex-direction: unset;*/
  /*  background: #f6f6f7;*/
  /*  cursor: pointer;*/

  /*  label {*/
  /*    margin: 6px;*/
  /*    margin-left: 11px;*/

  /*    svg {*/
  /*      color: #a5a5a5;*/
  /*      width: 20px;*/
  /*      cursor: pointer;*/
  /*    }*/
  /*  }*/

  /*  span {*/
  /*    display: none;*/
  /*    margin: 6px;*/

  /*    svg {*/
  /*      color: #a5a5a5;*/
  /*      width: 20px;*/
  /*      cursor: pointer;*/
  /*    }*/
  /*  }*/

  /*  .form-control {*/
  /*    height: auto !important;*/
  /*    background: transparent;*/
  /*    border: none;*/

  /*    &:focus {*/
  /*      box-shadow: none !important;*/
  /*      border: none;*/
  /*      background: transparent;*/
  /*    }*/
  /*  }*/
  /*}*/

  #collapse-1 {
    //filter forms
    .form-control, .custom-select, .multiselect__tags, .multiselect__input {
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

  //badge
  .fix-w-badge {
    min-width: 75px;
  }
</style>

