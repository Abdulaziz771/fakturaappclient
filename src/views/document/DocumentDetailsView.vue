<template>
  <div class="content">
    <div id="fixed-content-header">
      <b-container fluid>
        <b-row>
          <b-col md="12" lg="5" class="p-0">
            <b-button id="tooltip-sign-document" class="lightgray-button mr-2"
                      size="sm" style="padding: 5px">Подписать и отправить
            </b-button>
            <b-tooltip target="tooltip-sign-document" variant="success">Подписать документ и отправить контрагенту
            </b-tooltip>
            <b-button id="tooltip-delete-document" class="lightgray-button mr-w2" size="sm" style="padding: 5px">
              Отказать и удалить
            </b-button>
            <b-tooltip target="tooltip-delete-document" variant="success">Отказать контрагенту и удалить документ
            </b-tooltip>
          </b-col>
          <b-col md="12" lg="7" class="p-0">
            <div class="form-inline float-right">
              <b-button class="lightgray-button mr-2" v-b-toggle.filter-inbox size="sm" style="padding: 5px">Фильтр
              </b-button>
              <b-button class="lightgray-button mr-2" size="sm" style="padding: 5px">Массовое подписание</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <hr class="m-0">
    <div class="content-page" style="padding-top: 60px;">
      <div class="page-title">
        <span class="text-secondary">Акт и Счет-фактура №7777888 от 15.08.2019</span>
      </div>
      <hr>
      <b-container fluid>
        <b-row>
          <div class="document-history">
            <h6 class="text-secondary">История документа</h6>
            <ul class="timeline">
              <li>
                <a target="_blank" class="text-info">Marketing (ИНН: 517782515)</a>
                <b class="pl-2 pr-2">Создан</b>
                <div class="mt-1 text-secondary">Сотрудник, Muser Mtest - <span
                  class="text-success">21/08/2019 19:24</span></div>
              </li>
              <li>
                <a href="#" class="text-info">Физическое (ИНН: 517782515)</a>
                <b class="pl-2 pr-2">Подписан</b>
                <div class="mt-1 text-secondary">Сотрудник, Muser Mtest - <span
                  class="text-success">21/08/2019 19:24</span></div>
              </li>
              <li>
                <a target="_blank" class="text-info">302563857 Corporation (ИНН: 302563857)</a>
                <b class="pl-2 pr-2">Отправлен контрагенту</b>
                <div class="mt-1 text-secondary">Сотрудник, Muser Mtest - <span
                  class="text-success">21/08/2019 19:24</span></div>
              </li>
            </ul>
          </div>
          <div class="document-details mb-3">
            <div class="d-inline h6 text-info mr-4 cursor-pointer">Описание документа
              <ChevronRightIcon/>
            </div>
            <div class="d-inline h6 text-info mr-4 cursor-pointer">Прикрепление
              <ChevronRightIcon/>
            </div>
            <div class="d-inline h6 text-info mr-4 cursor-pointer">Связанные документы
              <ChevronRightIcon/>
            </div>
          </div>
          <div class="document-content" style="height: 800px;">
            <embed src="https://test.faktura.uz/ru/document/getpreview/a780620ae7e74b39be6bd8a61d138eb3"
                   width="100%"
                   height="100%"/>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
  import {
    ArrowLeftCircleIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    EyeIcon,
    Edit2Icon,
    XCircleIcon,
    UsersIcon,
    StarIcon,
    PrinterIcon
  } from 'vue-feather-icons'

  export default {
    name: 'document-details-view',
    components: {
      ArrowLeftCircleIcon,
      EyeIcon,
      Edit2Icon,
      XCircleIcon,
      UsersIcon,
      StarIcon,
      PrinterIcon,
      ChevronRightIcon,
      ChevronLeftIcon
    }
  }
</script>
<style>
  .document-history {
    width: 100%;
  }

  .document-content {
    width: 100%;
    border: 1px dashed #ccc;
  }

  .content-page {
    padding: 10px;
    height: 900px;
    overflow-y: scroll;
  }

  .document-details {
    width: 100%;
    border: 1px solid #e4e5e7;
    padding: 10px;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
  }

  ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
  }

  ul.timeline > li {
    border: 1px solid #e4e5e7;
    margin: 30px;
    padding: 10px;
  }

  ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #b0b2b4;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }

</style>
