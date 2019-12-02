<template>
  <div class="content title-page">
    <div class="content-body">
      <div class="content-header">
        <h5 class="text-center">Стандартная счет-фактура</h5>
      </div>
      <div class="table-body">
        <div class="container" id="invoice">
          <div id="invoice-title">
            <b-row>
              <b-col md="6" class="text-right">
                <div>
                  <span>Счет Фактура №</span>
                  <input type="text" class="invoice-form invoice-number  ml-2 text-right" >
                </div>
              </b-col>
              <b-col md="6" class="text-left">
                <div>
                  <span>Дата </span>
                  <input type="date" class="invoice-form invoice-date text-left ml-2">
                </div>
              </b-col>
            </b-row>
            <b-row class="pt-2">
              <b-col md="6" class="text-right">
                <div>
                  <span>К товарно-отгрузочным документам №</span>
                  <input type="text" class="invoice-form  invoice-number text-right ml-2">
                </div>
              </b-col>
              <b-col md="6" class="text-left">
                <div>
                  <span>Дата </span>
                  <input type="date" class="invoice-form invoice-date text-left ml-2"  placeholder="дд.мм.гггг">
                </div>
              </b-col>
            </b-row>
          </div>
          <hr>
          <div id="invoice-info">
            <b-row>
              <b-col>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Поставщик :</b></b-col>
                  <b-col cols="8" class="text-left">302563857 Corporation</b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Адрес :</b></b-col>
                  <b-col cols="8" class="text-left">ГОРОД ТАШКЕНТ, ЮНУСАБАДСКИЙ РАЙОН, ул. Дехканабад, 1</b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Телефон :</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Расчётный счёт № :</b></b-col>
                  <b-col cols="8" class="text-left">20208000900214706001</b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Банк</b></b-col>
                  <b-col cols="8" class="text-left">ТОШКЕНТ Ш., "ИПАК ЙУЛИ" АИТ БАНКИНИНГ ЧИЛОНЗОР ФИЛИАЛИ</b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>МФО</b></b-col>
                  <b-col cols="8" class="text-left">01067</b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>ИНН</b></b-col>
                  <b-col cols="8" class="text-left">302563857</b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>ОКЭД</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Эл.адрес</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Заказчик :</b></b-col>
                  <b-col cols="8" class="text-left">
                      <multiselect v-model="value" :options="options" placeholder="Select one" class="invoice-select" label="name" track-by="name"></multiselect>
                  </b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Адрес:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Телефон:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Расчётный счёт №:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Банк:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>МФО:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>ИНН:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>ОКЭД:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
                <b-row class="pb-2">
                  <b-col cols="4" class="text-right"><b>Эл.адрес:</b></b-col>
                  <b-col cols="8" class="text-left"></b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
          <hr>
          <div id="invoice-table">
            <b-row>
              <table class="invoice-table table-sm table-bordered">
                <thead>
                <tr>
                  <th rowspan="2" scope="col" style="width: 255px;">Наименование товара, выполненных работ и оказанных
                    услуг
                  </th>
                  <th rowspan="2" scope="col">Ед. изм.</th>
                  <th rowspan="2" scope="col">Кол - во</th>
                  <th rowspan="2" scope="col">Цена за единицу</th>
                  <th rowspan="2" scope="col">Стоимость поставки</th>
                  <th colspan="2" scope="col">Акцизный Налог</th>
                  <th colspan="2" scope="col">НДС</th>
                  <th rowspan="2" scope="col">Стоимость поставок с учётом налога</th>
                  <th rowspan="2" scope="col" style="width: 20px"></th>
                </tr>
                <tr>
                  <th>ставка</th>
                  <th>сумма</th>
                  <th>ставка</th>
                  <th>сумма</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(row, index) in rows">
                  <tr  :class="{ 'active' : row.isActive  }">
                    <td class="text-center table-input-td">
                      <textarea v-model="row.productname" @focus="onFocus(index)" @blur="onBlur(index)" class="form-control"></textarea>
                    </td>
                    <td class="table-input-td">
                      <b-form-input v-model="row.measurement" @focus="onFocus(index)" @blur="onBlur(index)" class="table-input text-center"></b-form-input>
                    </td>
                    <td class=" table-input-td">
                      <b-form-input v-model="row.amount" @focus="onFocus(index)" @blur="onBlur(index)" class="table-input text-center"></b-form-input>
                    </td>
                    <td class="table-input-td">
                      <b-form-input   v-model="row.price" @focus="onFocus(index)" @blur="onBlur(index)" class="table-input text-center"></b-form-input>
                    </td>
                    <td class="table-input-td disabled-td">
<!--                      <b-form-input v-model="row.deliveries_cost" disabled class="table-input-disabled"></b-form-input>-->
                      <p class="pl-1 m-0">{{ row.deliveries_cost | format }}</p>
                    </td>
                    <td class="table-input-td-precent">
                      <b-form-input v-model="row.rate" @focus="onFocus(index)" @blur="onBlur(index)" style="width: 80%" class="table-input form-control text-right float-left"></b-form-input>
                      <span class="pt-1 float-right precent">%</span>
                    </td>
                    <td class="text-center table-input-td disabled-td">
<!--                      <b-form-input v-model="row.coast" disabled class="table-input-disabled"></b-form-input>-->
                      <p class="pl-1 m-0">{{ row.coast }}</p>
                    </td>
                    <td class="table-input-td-precent">
                      <b-form-input v-model="row.rate_nds" @focus="onFocus(index)" @blur="onBlur(index)" style="width: 80%" class="table-input form-control text-right float-left"></b-form-input>
                      <span class="pt-1 float-right precent">%</span>
                    </td>
                    <td class="text-center table-input-td disabled-td">
<!--                      <b-form-input v-model="row.coast_nds" disabled class="table-input-disabled"></b-form-input>-->
                      <p class="pl-1 m-0">{{ row.coast_nds }}</p>
                    </td>
                    <td class="text-center table-input-td disabled-td">
                      <p class="pl-1 m-0">{{ row.overall }}</p>
                    </td>
                    <td class="table-x-td text-center text-danger" ><b class="cursor-pointer" @click="deleteRow(index)">x</b></td>
                  </tr>
                </template>
                <tr>
                  <td colspan="4" class="text-right">Итого сум:</td>
                  <td colspan="7" class="text-center"></td>
                </tr>
                <tr>
                  <td colspan="4" class="text-right">Всего к оплате:</td>
                  <td colspan="7" class="text-center"></td>
                </tr>
                </tbody>
              </table>
              <div class="pt-2 w-100 text-right"><span class="cursor-pointer" @click="addRow">Добавить строку<PlusSquareIcon class="ml-2 PlusSquareIcon"/></span></div>
            </b-row>
          </div>
          <hr>
          <div id="ivoice-footer">
            <b-container class="mt-5" fluid>
              <b-row align-h="center">
                <b-col cols="6">
                  <table>
                    <tr>
                      <td class="p-2">Руководитель</td>
                      <td class="p-2">
                        <b-input-group>
                          <b-form-input class="invoice-form"  size="sm"></b-form-input>
                          <b-dropdown class="invoice-dropdown" size="sm" text="Из списка" slot="append">
                            <b-dropdown-item size="sm">Жамшид Касымов</b-dropdown-item>
                            <b-dropdown-item size="sm">Мирол Косимов</b-dropdown-item>
                          </b-dropdown>
                        </b-input-group>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2">Главный бухгалтер</td>
                      <td class="p-2">
                        <b-input-group>
                          <b-form-input class="invoice-form"  size="sm"></b-form-input>
                          <b-dropdown class="invoice-dropdown" size="sm" text="Из списка" slot="append">
                            <b-dropdown-item>Жамшид Касымов</b-dropdown-item>
                            <b-dropdown-item>Мирол Косимов</b-dropdown-item>
                          </b-dropdown>
                        </b-input-group>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2">Товар отпустил</td>
                      <td class="p-2">
                        <b-input-group>
                          <b-form-input class="invoice-form" size="sm"></b-form-input>
                          <b-dropdown class="invoice-dropdown" size="sm" text="Из списка" slot="append">
                            <b-dropdown-item>Жамшид Касымов</b-dropdown-item>
                            <b-dropdown-item>Мирол Косимов</b-dropdown-item>
                          </b-dropdown>
                        </b-input-group>
                      </td>
                    </tr>
                  </table>
                </b-col>
                <b-col cols="6" md="auto">
                  <table>
                    <tbody>
                    <tr>
                      <td class="p-2">По доверенности</td>
                      <td class="p-2" style="width: 300px;">
                        <b-form-input class="invoice-form" size="sm"></b-form-input>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2"></td>
                      <td class="pt-2 pl-2 text-right">
                        <b-form-input style="max-width: 160px; margin-right: 20px" placeholder="Номер" class="float-left invoice-form"
                                      size="sm"></b-form-input>
                        <b-form-input style="max-width: 105px;"  placeholder="Дата" class="float-left invoice-form" size="sm"></b-form-input>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <div class="text-right mt-5 mb-2">
            <b-button class="create-button" size="sm" variant="outline-success">Создать документ</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
      PlusSquareIcon
  } from 'vue-feather-icons'
  export default {
    name: 'SystemInvoice',
      components: {
          PlusSquareIcon
      },
      data() {
        return {
            value: { name: 'Zero organization 21314242'},
            options: [
                { name: 'First organization 21314242'},
                { name: 'Second organization 543523'}
            ],
            rows: [
                {
                    productname: '',
                    measurement: '',
                    amount: '',
                    price: '',
                    deliveries_cost: '',
                    coast: '',
                    rate: '',
                    summorise: '',
                    rate_nds: '',
                    coast_nds: '',
                    overall: '',
                    isActive: false
                }
            ]
        }
      },
      methods: {
          nameWithLang ({ name, language }) {
              return `${name} — [${language}]`
          },
          onFocus(index) {
              this.rows[index].isActive = true
          },
          onBlur(index) {
              this.rows[index].isActive = false;

              this.calculate(index);
          },
          calculate(index) {

              //Умножаем на два Кол - во и Цена за единицу
              this.rows[index].deliveries_cost  = this.rows[index].amount * this.rows[index].price;

              this.rows[index].coast = this.rows[index].deliveries_cost / 100 * this.rows[index].rate;
              this.rows[index].coast_nds = this.rows[index].deliveries_cost / 100 * this.rows[index].rate_nds;

              this.rows[index].overall  = (this.rows[index].coast + this.rows[index].coast_nds) + this.rows[index].deliveries_cost

          },
          addRow() {
              this.rows.push({
                  productname: '',
                  measurement: '',
                  amount: '',
                  price: '',
                  deliveries_cost: '',
                  coast: '',
                  rate: '',
                  summorise: '',
                  rate_nds: '',
                  coast_nds: '',
                  overall: '',
                  isActive: false
              })
          },
          deleteRow(index) {
              this.$delete(this.rows, index)
          },
      },
      filters: {
          format(value) {
              return value.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
          },
      }
  }
</script>
<style lang="scss" scoped>

  .PlusSquareIcon {
    width: 17px;
  }

  .table-x-td {
    width: 25px;
  }

  #invoice {
    border: 1px solid #e0e0e0;
    padding: 25px;
    border-radius: 10px;
    & input {
      padding: 4px !important;
      font-size: 12px;
      height: 27px;

      &:focus {
        box-shadow: none;
        border-color: #e4e5e7 !important;
      }
    }
  }

  .properties {
    & tr td {
      padding: 5px 10px;

      & input {
        width: 100px;
        font-size: 10px;
      }

      &:nth-child(1) {
        font-weight: 500;
        text-align: right;
      }

      &:nth-child(2) {
        width: 300px;
      }

      &:nth-child(3) {
        min-width: 150px;
        font-weight: 500;
        text-align: right;
      }

      &:nth-child(4) {
        width: 300px;
      }
    }
  }

  .invoice-table {
    width: 100%;

    & tr th {
      vertical-align: middle;
      text-align: center;
      font-size: 12px;
      background-color: #f5f5f5;
      color: #28282d;
    }

    & td {
      padding: 0 !important;
    }

    & input {
      border-width: 0;
      border-radius: unset;
    }

    & textarea {
      height: 28px;
      overflow: hidden;
      border-radius: unset;
      font-size: 10px;
      border: none;
      &:focus {
        box-shadow: none !important;
        background-color: #fff2a7;
        border: none;
      }
    }

    & tbody {
      & tr:nth-child(2), tr:nth-child(3) {
        height: 27px;

        td:first-child, td:nth-child(2) {
          /*padding-right: 20px !important;*/
          font-size: 12px;
        }
      }
    }
  }
</style>
<style lang="scss">
  .disabled-td {
    background: #f7f7f7;
  }

  .invoice-dropdown {
    & button {
      padding: 0 8px;
    }
  }

  #invoice-title {
    .invoice-form {
      background: #f6f6f6;
      border-radius: 4px;
      border: 1px solid #e6e6e6;
      &:hover {
        cursor: pointer;
        border: 1px solid #66c93e;
      }
      &:focus {
        cursor: text;
        outline: none;
        color: rgb(0, 0, 0);
        text-shadow: rgb(255, 255, 255) 1px 1px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px ;
        background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(255, 255, 100, 0.5)), to(rgba(255, 255, 100, 0.2))) !important;;
      }
    }
  }

  #invoice-info {
    .multiselect--active {
      background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(255, 255, 100, 0.5)), to(rgba(255, 255, 100, 0.2))) !important;;
      .multiselect__input {
        padding: 0;
        font-size: 13px;
        background: transparent;
      }
    }
    .multiselect {
        border-radius: 4px;
        background: #f6f6f6;
        min-height: 27px;
        border: 1px solid transparent;
        &:hover {
          cursor: pointer;
          border: 1px solid #66c93e;
        }
        .multiselect__select {
          width: 27px;
          height: 27px;
          right: 0;
          top: 0;
          padding: 0 0;
        }
        .multiselect__single {
          font-size: 13px;
          margin: 0;
          background: transparent;
        }
        .multiselect__tags {
          padding: 3px 22px 0 5px;
          min-height: 27px;
          background: transparent;
        }
        .multiselect__content-wrapper {

        }
        .multiselect__option {
          padding: 7px;
          min-height: 22px;
          font-size: 14px;
        }
        .multiselect__option--highlight:after {
          content: none;
          display: none;
        }
        .multiselect__placeholder {
          margin-bottom: 0;
        }
      }
  }

  #invoice-table {
    .active {
      border: 2px solid #67ff67;
      border-top: 3px solid #67ff67;
    }
    .table-input-td {
      position: relative;
      width: 120px;
    }
    .table-input-td-precent {
      position: relative;
      width: 120px;
      background: #f6f6f6;
    }
    .table-input {
      position: absolute;
      top: 0;
      bottom: 0;
      height: 100% !important;
      &:hover {
        cursor: pointer;
        border: 1px solid #66c93e;
      }
      &:focus {
        cursor: text;
        outline: none;
        color: rgb(0, 0, 0);
        text-shadow: rgb(255, 255, 255) 1px 1px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px !important;
        background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(255, 255, 100, 0.5)), to(rgba(255, 255, 100, 0.2))) !important;
      }
    }
    .table-input-disabled {
      background: #f7f7f7;
      position: absolute;
      top: 0;
      bottom: 0;
      height: 100% !important;
      &:focus {
        cursor: text;
        outline: none;
        color: rgb(0, 0, 0);
        text-shadow: rgb(255, 255, 255) 1px 1px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px !important;
        background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(255, 255, 100, 0.5)), to(rgba(255, 255, 100, 0.2))) !important;
      }
    }
    textarea {
      &:hover {
        cursor: pointer;
        border: 1px solid #66c93e;
      }
      &:focus {
        cursor: text;
        border: none;
      }
    }
  }

  #ivoice-footer {
    .form-control {
      &:focus {
        box-shadow: none !important;
      }
    }
    .invoice-form {
      background: #f6f6f6;
      border-radius: 4px;
      border: 1px solid #e6e6e6;
      &:hover {
        cursor: pointer;
        border: 1px solid #66c93e;
      }
      &:focus {
        cursor: text;
        outline: none;
        color: rgb(0, 0, 0);
        text-shadow: rgb(255, 255, 255) 1px 1px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
        background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(255, 255, 100, 0.5)), to(rgba(255, 255, 100, 0.2))) !important;;
      }
    }
    .dropdown-toggle {
      font-size: 11px !important;
    }
    .dropdown-menu.show {
      font-size: 11px !important;
    }
  }

  //forms size
  .invoice-number {
    width: 50px;
  }

  .invoice-date {
    width: 120px;
  }

  .precent {
    background: #f7f7f7;
  }

  .create-button {
    font-size: 11px;
  }

</style>
