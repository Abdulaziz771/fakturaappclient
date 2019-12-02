<template>
  <div :class="{ 'firstSidebarVisible' : !$store.getters.iswholeMenuToggleButtonSidebar}" class="content title-page without-second-sidebar">
    <div class="content-deposit-body">
      <b-container class="depost-back-link text-right mb-2">
        <router-link class="back-link text-decoration-none router-link-drop" :to="{name: 'home'}">
          <span>Назад на главную</span>
        </router-link>
        <h3 class="text-center deposit-title">Финансовая информация </h3>
      </b-container>
      <b-container class="deposit-conteiner">
        <div class="deposit-body">
          <b-row>
            <b-col md="12" class="deposit-tab-block">
              <b-card no-body>
                <b-tabs pills card vertical nav-wrapper-class="deposit-toggle">
                  <b-tab title="Текущий баланс" active>
                    <b-card-text>
                      <div class="content-header-deposit pt-4">
                        <div class="container-fluid">
                          <h5 class="text-center">Текущий баланс</h5>
                        </div>
                      </div>
                      <div class="deposit-content">
                        <b-container class="pay-block">
                          <b-row>
                            <b-col md="6">
                              <div class="current-balance-block">
                                <span class="current-balance"> 6 000 </span>
                                <span class="valueOfBalance">сум</span>
                                <div class="pay-button pt-2">
                                  <router-link class="" :to="{name: 'finance-deposit'}">
                                    <b-button variant="outline-success" size="sm">
                                      <span>Пополнить</span>
                                    </b-button>
                                  </router-link>
                                </div>
                                <div class="tariff-plan">
<!--                                  <DatabaseIcon class="databaseicon"></DatabaseIcon>-->
                                  <span>Ваш активный тарифный план:</span><span>Пробный пероид ещё не предоставлен.</span>
                                </div>
                                <div class="info-pay">
                                  Вы можете использовать баланс за услуги, указанные в тарифах. Абонентская плата тажке будет автоматически списываться с данного баланса.
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab title="Стоимость услуг">
                    <b-card-text>
                      <div class="content-header-deposit pt-4">
                        <div class="container-fluid">
                          <h5 class="text-center">Стоимость услуг</h5>
                        </div>
                      </div>
                      <div class="deposit-content">
                        <b-container class="pay-block">
                          <div class="describe-doc-finance p-0">
                            <div class="">
                              <b-row class="pt-2 pb-2">
                                <b-col class="first-desc-fin" md="6">
                                  <span >Подписание документа:</span>
                                </b-col>
                                <b-col class="second-desc-fin text-right" md="6">
                                  <span>1000,00 сум</span>
                                </b-col>
                              </b-row>
                              <b-row class="pt-2 pb-2">
                                <b-col class="first-desc-fin" md="6">
                                  <span >История корпоративной карты:</span>
                                </b-col>
                                <b-col class="second-desc-fin text-right" md="6">
                                  <span>5000,00 сум</span>
                                </b-col>
                              </b-row>
                              <b-row class="pt-2 pb-2">
                                <b-col class="first-desc-fin " md="6">
                                  <span >История POS термианала:</span>
                                </b-col>
                                <b-col class="second-desc-fin text-right" md="6">
                                  <span> 4000,00 сум</span>
                                </b-col>
                              </b-row>
                            </div>
                          </div>
                        </b-container>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab title="Пакеты на подписание документов" >
                    <b-card-text>
                      <div class="content-header-deposit border-bottom pt-4">
                        <h5 class="text-center">Пакеты на подписание документов</h5>
                        <b-row class="ml-0 padding-for-pages-with-table">
                          <b-col lg="4" md="6" sm="5" class="table-filter-action action-list d-flex justify-content-start p-0">
                            <div class="counter-tool counter pt-3 cunterparties-counter  cursor-pointer">
                              <span class="page-counter">
                                <BookOpenIcon class="BookOpenIcon cursor-pointer mr-2 mb-1" />
                                <span>
                                  <span>1</span>–<span>20</span>
                                </span> из <span>21</span>
                              </span>
                            </div>
                          </b-col>
                          <b-col lg="8" md="6" sm="7"
                                 class="table-filter-action action-list d-flex justify-content-end">
                            <div class="counter-tool cursor-pointer toggle-page-left rounded-circle mr-1">
                              <ChevronLeftIcon class=""/>
                            </div>
                            <div class="counter-tool cursor-pointer toggle-page-right rounded-circle">
                              <ChevronRightIcon class=""/>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="deposit-content-table">
                        <div class="pl-2 tafreiif-for-docs">
                          <b-table id="tarifPlan" responsive hover :fields="fields" :items="TariffBagsData">
                            <template slot="name" slot-scope="data">
                              <div class="font-weight-bold cursor-pointer text-dark-faktura">{{ data.item.name }}</div>
                              <small><AlertCircleIcon class="alertCircleIcon"/> {{ data.item.tarfDecritption }}</small>
                            </template>
                            <template slot="action" slot-scope="data">
                              <b-button id="toggle-btn" @click="toggleModal" variant="outline-success" class="moreButton" size="sm">Подробнее</b-button>
                            </template>
                          </b-table>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab title="Информация по услугам" >
                    <b-card-text>
                      <div class="content-header-deposit pt-4">
                        <div class="container-fluid">
                          <h5 class="text-center">Информация по услугам</h5>
                        </div>
                      </div>
                      <div class="deposit-content">
                        <b-container class="pay-block">
                          <div class="service-information">
                            <div class="service-information-statistics border-bottom border-top pt-2 pb-1">
                              <div class="service-information-index-up font-weight-bold">2311</div>
                              <span class="service-information-description float-left">Отправка электронных документов</span>
                              <div class="service-information-index-precent-up font-weight-bold text-right">2311%<ArrowUpIcon class="arrow-up-icon"></ArrowUpIcon></div>
                            </div>
                            <div class="service-information-statistics border-bottom pt-2 pb-1">
                              <div class="service-information-index-up font-weight-bold">2311</div>
                              <span class="service-information-description float-left">Отправка электронных документов</span>
                              <div class="service-information-index-precent font-weight-bold text-right">2311%</div>
                            </div>
                            <div class="service-information-statistics border-bottom pt-2 pb-1">
                              <div class="service-information-index-up font-weight-bold">2311</div>
                              <span class="service-information-description float-left">Отправка электронных документов</span>
                              <div class="service-information-index-precent font-weight-bold text-right">2311%</div>
                            </div>
                          </div>
                        </b-container>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab title="Информация о расходах">
                    <b-card-text>
                      <div class="content-header-deposit border-bottom pt-4">
                        <h5 class="text-center">Информация о платежах</h5>
                        <b-row class="ml-0 padding-for-pages-with-table">
                          <b-col lg="7" md="6" sm="5" class="table-filter-action action-list d-flex justify-content-start p-0">
                            <div class="counter-tool pt-3 counter  cunterparties-counter  cursor-pointer">
                                <span class="page-counter">
                                  <BookOpenIcon class="BookOpenIcon cursor-pointer mr-2 mb-1" />
                                  <span>
                                    <span>1</span>–<span>20</span>
                                  </span> из <span>21</span>
                                </span>
                            </div>
                          </b-col>
                          <b-col lg="5" md="6" sm="7"
                                 class="table-filter-action action-list d-flex justify-content-end">
                            <div class="counter-tool cursor-pointer toggle-page-left rounded-circle mr-1">
                              <ChevronLeftIcon class=""/>
                            </div>
                            <div class="counter-tool cursor-pointer toggle-page-right rounded-circle">
                              <ChevronRightIcon class=""/>
                            </div>
                            <div class="counter-tool cursor-pointer filter-view" :class="{ fltrBtonAct : isActiveFltr }" @click="isActiveFltr = !isActiveFltr" v-b-toggle.collapse-1>
                              <SlidersIcon class=""/>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="deposit-content-table">
                        <b-collapse id="collapse-1">
                          <b-card class="deposit-filter-collpase pr-4 p-2">
                            <div class="input-group input-group-sm">
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
                            <b-row>
                              <b-col cols="12" class="pt-3 pb-2">
                                <div class="text-right">
                                  <b-button size="sm" variant="outline-secondary" class="info-payers-filter-button" @click="isActiveFltr = !isActiveFltr" v-b-toggle.collapse-1>Отменить</b-button>
                                  <b-button size="sm" variant="outline-success" class="info-payers-filter-button ml-2" @click="isActiveFltr = !isActiveFltr" v-b-toggle.collapse-1>Применить</b-button>
                                </div>
                              </b-col>
                            </b-row>
                          </b-card>
                        </b-collapse>
                        <b-table :items="consumption" :fields="consumptionLocation">
                          <template slot="company" slot-scope="data">
                            <b>{{ data.item.company }}</b><br>
                            <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> Создан: {{ data.item.inn }}</small>
                          </template>
                          <template slot="description" slot-scope="data">
                            Оплата за сервис <b>{{ data.item.description }}</b> в размере {{ data.item.price }}
                          </template>
                        </b-table>
                      </div>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <b-modal  size="md" ref="my-modal" hide-footer title="Пакет на подписание документов">
      <div class="d-block">
        <div class="describe-tar p-0">
          <h6 class="in-block-title-tar">Тариф 50</h6>
          <div class="pb-2">
            <b-row>
              <b-col class="first-desc-tar"  md="4">
                <span>Время активности:</span>
              </b-col>
              <b-col class="second-desc-tar" md="8">
                <span>1 месяц</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="first-desc-tar" md="4">
                <span>Количество:</span>
              </b-col>
              <b-col class="second-desc-tar" md="8">
                <span>5 шт</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="first-desc-tar" md="4">
                <span>Стоимость:</span>
              </b-col>
              <b-col class="second-desc-tar" md="8">
                <span>0 сум</span>
              </b-col>
            </b-row>
          </div>
        </div>
        <b-row class="footer-modal">
          <b-col md="12" class="text-right">
            <div class="closeModal"><p @click="toggleModal">Ативировать</p></div>
            <div class="canelMdoal"><p @click="toggleModal">Создать счет на новое пополнение на 30 000 сум</p></div>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
    import TariffBagsData from "./../../TestData/TariffBagsData"
    import InfoAboutConsumption from './../../TestData/InfoAboutConsumptionData'
    import eventBus from '../../eventBus';
    import {
        AlertCircleIcon,
        ArrowUpIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        BookOpenIcon,
        SlidersIcon,
        DatabaseIcon,

    } from 'vue-feather-icons'

    export default {
        name: 'finance-information',
        data() {
            return {
                isActiveFltr: false,
                TariffBagsData : TariffBagsData,
                fields: [
                    {key: "name" , label: "Наименование тарифа",},
                    {key: "activationTime" , label: "Время активности"},
                    {key: "amount" , label: "Количество"},
                    {key: "cost" , label: "Стоимость"},
                    {key: "action" , label: "Действие"}
                ],
                consumption: InfoAboutConsumption,
                consumptionLocation:[
                    { key: 'company', label: 'Компания', sortable: true},
                    { key: 'price', label: 'На сумму', sortable: true },
                    { key: 'created', label: 'Дата создания', sortable: true },
                    { key: 'description', label: 'Описание', sortable: true }
                ]
            }
        },
        methods: {
            toggleModal() {
                this.$refs['my-modal'].toggle('#toggle-btn')
            }
        },
        components: {
            AlertCircleIcon,
            ArrowUpIcon,
            ChevronLeftIcon,
            ChevronRightIcon,
            BookOpenIcon,
            SlidersIcon,
            DatabaseIcon
        },
        created() {
            this.$store.dispatch('hidesetWholeMenuInSidebar');
            this.$store.dispatch('hideToggleMenuButtonInHeader');
            this.$store.dispatch('closeToggleMenuButtonInHeader');
        }
    }
</script>

<style>
</style>

<style lang="scss">

  .databaseicon {
    margin-right: 2px;
    float: left;
    width: 18px;
    padding-bottom: 5px;
    padding-right: 4px;
  }

  .service-information {
    .arrow-up-icon {
      width: 15px;
      margin-left: 3px;
      color: #62cb31;
    }

    .service-information-index-up {
      color: #62cb31;
      font-size: 21px;
    }
    .service-information-index {
      font-size: 21px;
    }

    .service-information-description {
      color: #6f6f6f;
    }

    .service-information-index-precent-up {
      color: #69ca42;
    }
    .service-information-index-precent {
      margin-right: 16px;
    }

    /*color: #69ca42;*/

    .send-documents-amount-gray {
      font-size: 21px;
    }

    .send-documents-сounter-green {
      color: #62cb31;
      font-size: 21px;
      font-weight: 600;
    }

    .send-documents-counter-gray {
      font-size: 21px;
      font-weight: 600;
    }

  }

  .describe-tar {
    margin-bottom: 30px;
    /*box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);*/
    .in-block-title-tar {
      font-weight: 600;
      color: #34495e;
      border-bottom: 1px solid #ececec;
      padding: 15px 5px 15px 30px;
    }
    .first-desc-tar {
      text-align: left;
      margin: 10px 0;
      font-weight: 700;
      padding: 0 !important;
    }
    .second-desc-tar {
      margin: 10px 0;
      text-align: right;
      margin: 10px 0;
    }
    .row {
      margin: 0px 30px 0px 30px;
    }
  }

  #tarifPlan {
    thead {
      th:nth-child(2),th:nth-child(3),th:nth-child(4) {
        text-align: center;
      }
    }
    tbody {
      .text-dark-faktura {
        color: #34495e;
      }
      td:nth-child(2),td:nth-child(3),td:nth-child(4) {
        text-align: center;
      }
    }
    .moreButton {
      font-size: 11px;
    }
  }

  .alertCircleIcon {
    width: 10px;
  }

  .content-deposit-body {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 99;
    background-image: url("../../assets/Pattern.png");
    top: 59px;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 4px 20px 1px rgba(0,0,0,.06);
    transition: 0.2s;
  }

  .deposit-tab-block {
    .deposit-toggle {
      width: 254px !important;
      height: 620px;
      .nav-pills {
        .nav-link.active {
          color: black;
          background-color: #eaeaea;
        }
      }
    }
    .col {
      background: white;
    }
    .card-body {
      padding: 0 !important;
    }
  }

  .back-link {
    transition: 0.3s;
    color: #66c93e;
    cursor: pointer;
    padding: 10px 5px;
  }

  .deposit-body {
    border-radius: 10px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);
  }

  .deposit-tab {
    .nav-link {
      padding: 0.3rem 0.1rem;
    }
  }

  .current-balance-block {
    .valueOfBalance {
      font-size: 26px;
    }
    .current-balance {
      font-size: 26px;
      font-weight: 700;
    }

    .info-pay {
      padding-top: 15px;
      border-top: 1px solid #e2e2e2;
      margin-top: 15px;
    }

    .tariff-plan {
      padding-top: 15px;
      border-top: 1px solid #e2e2e2;
      margin-top: 15px;
      span:first-child {
        display: block;
        font-size: 14px;
        font-weight: 600;
        padding-bottom: 5px;
      }
      span:nth-child(2) {
        font-size: 12px;
      }
    }
  }

  .describe-doc-finance {
    .row {
      border-bottom: 1px solid #f5f5f5;
      .first-desc-fin {
        font-size: 15px;
      }
      .second-desc-fin {
        font-size: 17px;
        color: #66c93e;
        font-weight: 600;
      }
    }
  }

  .pay-button {
    button {
      font-size: 12px;
    }
  }

</style>
