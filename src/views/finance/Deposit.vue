<template>
  <div :class="{ 'firstSidebarVisible' : !$store.getters.iswholeMenuToggleButtonSidebar}" class="content title-page without-second-sidebar">
    <div class="content-deposit-body">
      <b-container class="depost-back-link text-right mb-2">
        <router-link class="back-link text-decoration-none router-link-drop" :to="{name: 'home'}">
          <span>Назад на главную</span>
        </router-link>
        <h3 class="text-center deposit-title">Пополнеине баланса</h3>
      </b-container>
      <b-container class="deposit-conteiner">
        <div class="deposit-body">
          <b-row>
            <b-col md="12" class="deposit-tab-block">
              <b-card no-body>
                <b-tabs pills card vertical nav-wrapper-class="deposit-toggle">
                  <b-tab title="Пополнить баланс" active>
                    <b-card-text>
                      <div class="content-header-deposit pt-4">
                        <div class="container-fluid">
                          <h5 class="text-center">Пополнить баланс</h5>
                        </div>
                      </div>
                      <div class="deposit-content">
                        <b-container class="pay-block">
                          <b-tabs content-class="mt-5" justified class="deposit-tab create-new-document-tabs document-tabs">
                            <b-tab  title-item-class="h5" title="Детали">
                              <b-row class="pt-3">
                                <b-col md="12">
                                  <div class="input-group pay-input-group d-flex justify-content-center mb-3">
                                    <b-input-group class="cursor-pointer" size="sm" prepend="Сум" append="Создать счет на оплату">
                                      <b-form-input ></b-form-input>
                                    </b-input-group>
                                  </div>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col md="12" class="pr-5 pt-4">
                                  <div><p class="small m-t-md"></p>
                                    <div class="text-justify">
                                      <p>
                                        Основанием перевода денежных средств служит документ-счёт на оплату, который подписывается обеими
                                        сторонами и имеет юридическую силу.Клиент имеет возможность изменять сумму пополнения до тех пор,
                                        пока не переведет денежные средства.
                                      </p>
                                      <p>
                                        Пополнение баланса в системе происходит поэтапно:
                                      </p>
                                      <ol class="font-light">
                                        <li>Определение суммы пополнения.</li>
                                        <li>Подтверждение подписанием счета на оплату.</li>
                                        <li>Перевод денежных средств через доступные методы.</li>
                                        <li>Информация о пополнении.</li>
                                      </ol>
                                      <p></p>
                                      <p>
                                        При переводе денежных средств методами онлайн-оплаты, баланс клиента пополняется в системе сразу
                                        после успешной оплаты.При переводе денежных средств методом банковского перевода или другими,
                                        которые требуют на подтверждение некоторое время, баланс клиента пополняется сразу после получения
                                        подтверждения перевода.
                                      </p>
                                    </div>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-tab>
                            <b-tab  title-item-class="h5" title="Подтверждение">
                              <b-row class="mb-4">
                                <b-col md="2" offset-md="10" class="text-center">
                                  <b-button size="sm">Подписать</b-button>
                                </b-col>
                              </b-row>
                              <b-row class="deposit-iframe">
                                <b-col md="12"class="p-0">
                                  <div class="document-content" style="height: 100%;">
                                    <embed style="border: 0;padding-bottom: 20px;" type="application/pdf"  allowfullscreen src="http://www.pdf995.com/samples/pdf.pdf#page=1&view=fitH&toolbar=0&scrollbar=0" width="100%" height="100%"/>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-tab>
                            <b-tab  title-item-class="h5" title="Оплата">
                              <b-row>
                                <b-col md="6">
                                  <CreditCardIcon class="float-left icon pay-icons mr-3"></CreditCardIcon>
                                  <p>
                                    В этом шаге вы выполняете оплата через Payme.
                                    <br>
                                    Для этого вам достаточно нажать метод Payme и заполнить номер карты и срок действия карты.
                                  </p>
                                </b-col>
                                <b-col md="6">
                                  <img id="show-btn" @click="$bvModal.show('payme-modal')" src="../../assets/payme.png" class="cursor-pointer w-75 pr-5" >
                                  <img  src="../../assets/finbox.jpg" class="cursor-pointer w-75 pt-4 pr-5" alt="Payme">
                                </b-col>
                              </b-row>
                            </b-tab>
                            <b-tab  title-item-class="h5" title="Информация о переводе">
                              <b-row class="pt-5">
                                <b-col class="text-center">
                                  <div class="text-center">
                                    <h5><span><CheckCircleIcon class="pay-icons icon mr-3"></CheckCircleIcon></span>Оплата на сумму <strong>3 000 000 </strong> успешно проведена.</h5>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-tab>
                          </b-tabs>
                        </b-container>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab title="История операций">
                    <b-card-text>
                      <div class="content-header-deposit border-bottom pt-4">
                        <h5 class="text-center">История операций</h5>
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
                              <ChevronLeftIcon/>
                            </div>
                            <div class="counter-tool cursor-pointer toggle-page-right rounded-circle">
                              <ChevronRightIcon/>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="deposit-content-table">
                        <b-table id="financeIndex" responsive hover :fields="fieldsReplanish" :items="ReplenishmentAccountTable"
                                 class="index-account-table">
                          <template slot="docname" slot-scope="data">
                            <b>Счет на оплату</b><br>
                            <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> Создан: 05.11.2019</small>
                          </template>
                          <template slot="amount" slot-scope="data">
                            {{ data.item.amount }}.00
                          </template>
                          <template slot="status" slot-scope="data">
                                <span class="badge badge-danger">
                                  Не подписан
                                </span>
                          </template>
                          <template slot="action" slot-scope="data">
                            <CheckCircleIcon class="action-icon"></CheckCircleIcon>
                          </template>
                        </b-table>
                  </div>
                  </b-card-text>
                  </b-tab>
                  <b-tab title="Информация о платежах">
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
                        <b-table id="infoAboutPaymentsData" responsive hover :fields="fieldsPayment" :items="InfoAboutPaymentsData"
                                 class="index-account-table pl-2">
                          <template slot="company" slot-scope="data">
                            <b>{{ data.item.company }}</b><br>
                            <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> ИНН: {{ data.item.inn }}</small>
                          </template>
                          <template slot="price" slot-scope="data">
                            <b>{{ data.item.price }}.00</b><br>
                          </template>
                        </b-table>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab title="TEST">
                    <b-card-text>
                      <H1>ASDASDASD</H1>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <b-modal id="payme-modal" size="sm" hide-footer>
      <template slot="modal-title">
        <img src="../../assets/payme.png" class="w-50 p-2" alt="Payme">
      </template>
      <b-row class="d-block text-center">
        <b-col md="12" class="pl-3 pr-3 pb-3">
          <label>Номер карты</label>
          <b-form-input id="card-number" class="input-card"
                        placeholder="____ ____ ____ ____"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="d-block text-center">
        <b-col md="12" class="pl-3 pr-3 pb-3">
          <label>Срок действие карты</label>
          <b-form-input id="card-validity" class="input-card" placeholder="__/__"></b-form-input>
        </b-col>
      </b-row>
      <h6 class="text-center">Сумма платежа: <strong>сум</strong></h6>
      <b-row>
        <b-col md="6">
          <b-button class="mt-3" block @click="$bvModal.hide('payme-modal')">Отменить</b-button>
        </b-col>
        <b-col md="6">
          <b-button class="mt-3" variant="info" block>Оплатить</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
    import InfoAboutPaymentsData from '../../testData/InfoAboutPaymentsData'
    import ReplenishmentAccountTable from '../../testData/Replenishmentaccounttable'
    import eventBus from '../../eventBus';
    import {
        CreditCardIcon,
        CheckCircleIcon,
        ChevronsRightIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        AlertCircleIcon,
        SlidersIcon,
        BookOpenIcon
    } from 'vue-feather-icons'

    export default {
        name: 'deposit',
        data() {
            return {
                isActiveFltr: false,
                fieldsReplanish: [
                    { key: 'docname', label: 'Название документа' },
                    { key: 'amount', label: 'На сумму' },
                    { key: 'status', label: 'Статус' },
                    { key: 'action', label: 'Действие' }
                ],
                ReplenishmentAccountTable: ReplenishmentAccountTable,
                fieldsPayment: [
                    { key: 'company', label: 'Компания', sortable: true },
                    { key: 'price', label: 'На сумму', sortable: true },
                    { key: 'created', label: 'Дата создания', sortable: true },
                    { key: 'description', label: 'Оплата', sortable: true }
                ],
                InfoAboutPaymentsData: InfoAboutPaymentsData
            }
        },
        components: {
            CreditCardIcon,
            CheckCircleIcon,
            ChevronsRightIcon,
            ChevronLeftIcon,
            ChevronRightIcon,
            AlertCircleIcon,
            SlidersIcon,
            BookOpenIcon
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', false);
        }
    }
</script>

<style>
</style>

<style lang="scss">

  .alertCircleIcon {
    width: 10px;
  }

  .deposit-tab-block {
    .deposit-toggle {
      width: 254px !important;
      height: 58vh;
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

  #financeIndex {
    thead {
      tr {
        th:nth-child(4) {
          width: 100px;
          text-align: center;
        }
        th:nth-child(3) {
          width: 112px;
          text-align: center;
        }
        th:nth-child(1) {
          width: 250px;
        }
      }
    }
    tbody {
      tr {
        td:nth-child(4) {
          text-align: center;
        }
        td:nth-child(3) {
          text-align: center;
        }
      }
    }
  }

  #infoAboutPaymentsData {
    thead {
      tr {
        th:nth-child(4) {
          width: 115px;
        }
      }
    }
  }

  .deposit-iframe {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 212px !important;
    margin: 13px 13px;
  }

  .back-link {
    transition: 0.3s;
    color: #66c93e;
    cursor: pointer;
    padding: 10px 5px;
  }

  .deposit-block-left {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
  }

  .deposit-block-right {
    position: absolute;
    bottom: 0;
    top: 0;
    right:0;
  }

  .pay-input-group {
    .input-group {
      width: 570px;
    }
  }

  .content-header-deposit {
    h5 {
      font-weight: normal;
    }
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

  .deposit-tab {
    .nav-link {
      padding: 0.3rem 0.1rem;
    }
  }

  .pay-icons {
    width: 40px;
    height: 40px;
  }

  #payme-modal .modal-header {
    text-align: center;

    button {
      display: none;
    }
  }

  .input-card {
    height: 52px;
    line-height: 1.4;
    font-size: 18px;
    text-align: center;
    padding: 10px 20px;
    border: 1px solid #d7dbe6 !important;
    box-shadow: inset 0 2px 3px rgba(1, 1, 2, .1);
  }

  .pay-done-text {
    font-size: 16px;
  }

</style>
