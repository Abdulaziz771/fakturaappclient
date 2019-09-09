<template>
  <div class="content title-page">
    <div class="content-header">
      <div class="container-fluid">
        <h5 class="text-center">Проверка электронного документа</h5>
      </div>
      <hr>
    </div>
    <div class="content-body">
      <div class="table-body">
        <div class="content-info container border rounded">
          <div class="row bg-light">
            <div class="col-md-12 ">
              <div class="info-text ml-3 mt-4 mr-2 mb-4">
                <div class="float-left">
                  <InfoIcon class="text-success infoicon mr-2"></InfoIcon>
                </div>
                <p>Сервис позволяет проверить протокол документооборота, сформировать электронное печатное представление выписки, и проверить корректность электронных цифровых подписей, которыми они подписаны.</p>
                <p>Если Вам необходимо получить печатное представление выписки: загрузите zip-файл (сгенерированный системой Faktura.uz) путем перетаскивания файл на первый блок, или выберите файл нажав на кнопку «Выбрать». Затем нажмите на кнопку «Проверить»</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content-first-second-step container">
          <div class="row">
            <div class="col-md-6 pl-1 pr-1">
              <div class="container border rounded p-4 mt-3">
                <div class="float-left mr-2">
                  <div class="step-number text-success rounded-circle border border-success">1</div>
                </div>
                <h6>Выберите файл электронного документа или перетащите его сюда</h6>
                <button class="btn btn-default big-button w-100 p-3 mt-4 bg-light">Выбрать</button>
              </div>
            </div>
            <div class="col-md-6 pl-1 pr-1">
              <div class="container border rounded p-4 mt-3">
                <div class="float-left mr-2">
                  <div class="step-number text-success rounded-circle border border-success">2</div>
                </div>
                <h6>Запустите процесс проверки документа и получите результат в полном объеме</h6>
                <button class="btn btn-default big-button w-100 p-3 mt-4 bg-light">Проверить</button>
              </div>
            </div>
          </div>
        </div>
        <div class="content-third-step">
          <div class="container border rounded p-4 mt-3">
            <div class="float-left mr-2">
              <div class="step-number text-success rounded-circle border border-success">3</div>
            </div>
            <h6 class="pt-2">Протокол проверки подлинности электронной подписи</h6>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
    import {
        InfoIcon
    } from 'vue-feather-icons'

    export default {
        name: 'document-verify',
        components: {
            InfoIcon
        }
    }
</script>

<style>
  .infoicon {
    width: 35px;
    height: 35px;
  }

  .step-number {
    width: 35px;
    height: 35px;
    padding: 0px 10px;
    font-size: 20px;
  }

</style>
