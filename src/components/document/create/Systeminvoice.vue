<template>
  <div class="content">
    <div class="content-header">Счет фактура</div>
    <div class="content-body">
      <div id="invoice">
        <b-container>
          <b-row class="justify-content-md-center">
            <table class="properties">
              <tr>
                <td>Счет-фактура №</td>
                <td><input type="text" class="form-control form-control-sm"></td>
                <td>Дата</td>
                <td><input type="text" class="form-control form-control-sm"></td>
              </tr>
              <tr>
                <td>К товарно-отгрузочным документам №</td>
                <td><input type="text" class="form-control form-control-sm"></td>
                <td>Дата</td>
                <td><input type="text" class="form-control form-control-sm"></td>
              </tr>
            </table>
          </b-row>
        </b-container>
        <hr>
        <b-container fluid>
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
                <b-col cols="4" class="text-right"><b>ОКОНХ</b></b-col>
                <b-col cols="8" class="text-left"></b-col>
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
                  <b-select size="sm"></b-select>
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
                <b-col cols="4" class="text-right"><b>ОКОНХ:</b></b-col>
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
        </b-container>
        <hr>
        <b-container fluid>
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
              <tr>
                <td><textarea class="form-control"></textarea></td>
                <td>
                  <b-form-input></b-form-input>
                </td>
                <td>
                  <b-form-input></b-form-input>
                </td>
                <td>
                  <b-form-input></b-form-input>
                </td>
                <td class="text-center"></td>
                <td>
                  <b-form-input style="width: 90%" class="form-control text-right float-left"></b-form-input>
                  <span class="pt-1 float-right">%</span>
                </td>
                <td class="text-center"></td>
                <td>
                  <b-form-input style="width: 90%" class="form-control text-right float-left"></b-form-input>
                  <span class="pt-1 float-right">%</span>
                </td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center text-danger"><b class="cursor-pointer">x</b></td>
              </tr>
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
            <div class="pt-2 cursor-pointer">Добавить ещё</div>
          </b-row>
        </b-container>
        <hr>
        <b-container class="mt-5" fluid>
          <b-row align-h="center">
            <b-col cols="6">
              <table>
                <tr>
                  <td class="p-2">Руководитель</td>
                  <td class="p-2">
                    <b-input-group>
                      <b-form-input size="sm"></b-form-input>
                      <b-dropdown class="invoice-dropdown" size="sm" text="Из списка" slot="append">
                        <b-dropdown-item>Жамшид Касымов</b-dropdown-item>
                        <b-dropdown-item>Мирол Косимов</b-dropdown-item>
                      </b-dropdown>
                    </b-input-group>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">Главный бухгалтер</td>
                  <td class="p-2">
                    <b-input-group>
                      <b-form-input size="sm"></b-form-input>
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
                      <b-form-input size="sm"></b-form-input>
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
                    <b-form-input size="sm"></b-form-input>
                  </td>
                </tr>
                <tr>
                  <td class="p-2"></td>
                  <td class="pt-2 pl-2 text-right">
                    <b-form-input style="max-width: 160px; margin-right: 20px" class="float-left"
                                  size="sm"></b-form-input>
                    <b-form-input style="max-width: 105px;" class="float-left" size="sm"></b-form-input>
                  </td>
                </tr>
                </tbody>
              </table>
            </b-col>
          </b-row>
        </b-container>
        <div class="text-right mt-5 mb-2">
          <b-button class="default-success-button">Создать документ</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SystemInvoice'
  }
</script>
<style lang="scss" scoped>

  #invoice {
    & input {
      padding: 4px !important;
      font-size: 12px;
      height: 27px;

      &:focus {
        box-shadow: none;
        border-color: #e4e5e7 !important;
        background-color: #fff2a7;
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
        border: none !important;
        background-color: #fff2a7;
      }
    }

    & tbody {
      & tr:nth-child(2), tr:nth-child(3) {
        height: 27px;

        td:first-child, td:nth-child(2) {
          padding-right: 20px !important;
          font-size: 12px;
        }
      }
    }
  }
</style>
<style lang="scss">
  .invoice-dropdown {
    & button {
      padding: 0 8px;
    }
  }
</style>
