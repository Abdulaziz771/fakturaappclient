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
            <b-row class="mb-5">
                <b-col md="4" offset-md="8" class="text-center">
                    <b-button variant="outline-success" size="sm">Показать запросы на пополнение</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" offset-md="3">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button class="btn btn-light border" type="button">Создать счет</button>
                    </div>
                    <input type="text" class="form-control" placeholder="Сумма">
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">сум</span>
                    </div>
                  </div>
                </b-col>
            </b-row>
            <b-row >
              <b-col md="12" class="pl-5 pr-5 pt-4">
                <div><p class="small m-t-md"></p> <p>
                  Основанием перевода денежных средств служит документ-счёт на оплату, который подписывается обеими сторонами и имеет юридическую силу.Клиент имеет возможность изменять сумму пополнения до тех пор, пока не переведет денежные средства.
                </p> <p>
                  Пополнение баланса в системе происходит поэтапно:
                </p> <ol class="font-light"><li>Определение суммы пополнения.</li> <li>Подтверждение подписанием счета на оплату.</li> <li>Перевод денежных средств через доступные методы.</li> <li>Информация о пополнении.</li></ol> <p></p> <p>
                  При переводе денежных средств методами онлайн-оплаты, баланс клиента пополняется в системе сразу после успешной оплаты.При переводе денежных средств методом банковского перевода или другими, которые требуют на подтверждение некоторое время, баланс клиента пополняется сразу после получения подтверждения перевода.
                </p></div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Шаг 2-Подтверждение">2</b-tab>
          <b-tab title="Шаг 3-Оплата">3</b-tab>
          <b-tab title="Шаг 4-Информация о переводе">4</b-tab>
        </b-tabs>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'deposit'
  }
</script>
