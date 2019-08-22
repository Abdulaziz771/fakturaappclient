<template>
  <div class="content">
    <div class="content-header">
      <div class="container-fluid">
        <h5 class="text-center">Пополнить баланс</h5>
      </div>
      <hr>
    </div>
    <div class="content-body">
      <b-container>
        <b-tabs content-class="mt-3" justified class="create-new-document-tabs">
          <b-tab title="Шаг 1-Детали">
            <b-row class="pt-3">
              <b-col md="7">
                <div class="input-group mb-3 pl-5">
                  <div class="input-group-prepend">
                    <b-button variant="light" class="border" type="button">Создать счет</b-button>
                  </div>
                  <input type="text" class="form-control" placeholder="Сумма">
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">сум</span>
                  </div>
                </div>
              </b-col>
              <b-col md="5" class="text-right">
                <b-button variant="outline-success" size="sm">Показать запросы на пополнение</b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12" class="pl-5 pr-5 pt-4">
                <div><p class="small m-t-md"></p>
                  <InfoIcon class="float-left icon mr-2 pay-icons"></InfoIcon>
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
                  </p></div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Шаг 2-Подтверждение">
            <b-row class="mb-4">
              <b-col md="2" offset-md="10" class="text-center">
                <b-button variant="outline-success" size="sm">Подписать</b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <hr>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Шаг 3-Оплата">
            <b-row class="mb-4">
              <b-col md="4">
                <img id="show-btn" @click="$bvModal.show('payme-modal')" src="../../assets/payme.png" class="w-100 pr-5 pl-5"
                     alt="Payme">
                <b-modal id="payme-modal" size="sm" hide-footer>
                  <template slot="modal-title">
                    <img src="../../assets/payme.png" class="w-50 p-2" alt="Payme">
                  </template>
                  <b-row class="d-block text-center">
                    <b-col md="12" class="pl-3 pr-3 pb-3">
                      <label for="card-number">Номер карты</label>
                      <b-form-input id="card-number" class="input-card"
                                    placeholder="____ ____ ____ ____"></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="d-block text-center">
                    <b-col md="12" class="pl-3 pr-3 pb-3">
                      <label for="card-validity">Срок действие карты</label>
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
              </b-col>
              <b-col md="8" class="pt-3">
                <CreditCardIcon class="float-left icon pay-icons mr-3"></CreditCardIcon>
                <p>
                  В этом шаге вы выполняете оплата через Payme.
                  <br>
                  Для этого вам достаточно нажать метод Payme и заполнить номер карты и срок действия карты.
                </p>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Шаг 4-Информация о переводе">
            <b-row class="pt-5">
              <b-col md="5" offset-md="3" class="text-center">
                <!--                <CheckCircleIcon class="pay-icons icon mr-3"></CheckCircleIcon>-->
                <!--                <span class="pay-done-text">Оплата на сумму <strong>3 000</strong> успешно проведена.</span>-->
                <span><CheckCircleIcon class="pay-icons icon mr-1 float-left"></CheckCircleIcon></span>
                <h5>Оплата на сумму <strong>3 000 000 </strong> успешно проведена.</h5>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-container>
    </div>
  </div>
</template>

<script>
    import {
        CreditCardIcon,
        InfoIcon,
        CheckCircleIcon
    } from 'vue-feather-icons'

    export default {
        name: 'deposit',
        components: {
            CreditCardIcon,
            InfoIcon,
            CheckCircleIcon
        }
    }
</script>

<style lang="scss">

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
