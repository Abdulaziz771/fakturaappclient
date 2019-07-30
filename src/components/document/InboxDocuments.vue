<template>
  <div class="content">
    <div class="content-header">Входящие документы</div>
    <div class="content-body">
      <div class="content-body-header">
        <b-container fluid>
          <b-row>
            <b-col md="10" class="p-0">
              <b-button class="lightgray-button mr-2" size="sm">
                <Edit2Icon/>
                Подписать и отправить
              </b-button>
              <b-button class="lightgray-button mr-2" size="sm">
                <XCircleIcon/>
                Отказать и удалить
              </b-button>
              <b-button class="lightgray-button mr-2" size="sm">
                <UsersIcon/>
                Отправить на согласование
              </b-button>
              <b-button class="lightgray-button mr-2" size="sm">
                <StarIcon/>
                Отметить как
              </b-button>
            </b-col>
            <b-col md="2" class="text-right p-0">
              <b-button variant="outline-secondary" size="sm" class="mr-2" style="padding: 2px 4px;">
                <PrinterIcon/>
              </b-button>
              <b-button variant="outline-secondary" size="sm">Фильтр</b-button>
            </b-col>
          </b-row>
        </b-container>
        <hr>
        <b-container fluid>
          <b-row>
            <b-pagination-nav :number-of-pages="10"></b-pagination-nav>
            <div class="ml-5 form-inline pb-4">
              <label class="mr-1">Показать по: </label>
              <select class="form-control form-control-sm">
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
            </div>
            <b-col class="text-right pt-2">
              Общее количество: <b>164</b>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-table bordered striped hover :fields="fields" :items="documents" class="documentTable">
        <template slot="HEAD_selected" slot-scope="data">
          <b-form-checkbox v-model="selectAll" @change="select"/>
        </template>
        <template slot="selected" slot-scope="data">
          <b-form-checkbox :value="data.item.uniqueId" v-model="selected"/>
        </template>
        <template slot="title" slot-scope="data">
          {{ data.item.title }} <br>
          <small><em> Создан: {{ data.item.createdDateTime }} </em></small>
        </template>
        <template slot="totalPrice" slot-scope="data">
          {{ data.item.totalPrice }}
        </template>
        <template slot="company_name" slot-scope="data">
          <b>{{ data.item.contractor.name }}</b> <br>
          <small><em> ИНН: {{ data.item.contractor.inn }} </em></small>
        </template>
        <template slot="updatedDateTime" slot-scope="data">
          {{ data.item.updatedDateTime }}
        </template>
        <template slot="status" slot-scope="data">
          {{ data.item.status }}
        </template>
        <template slot="action" slot-scope="data">
          <EyeIcon class="action-icon"/>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
  import Documents from '../../TestData/Documents';
  import {
    EyeIcon,
    Edit2Icon,
    XCircleIcon,
    UsersIcon,
    StarIcon,
    PrinterIcon
  } from 'vue-feather-icons'

  export default {
    name: 'inbox-documents-component',
    components: {
      EyeIcon,
      Edit2Icon,
      XCircleIcon,
      UsersIcon,
      StarIcon,
      PrinterIcon
    },
    data () {
      return {
        selected: [],
        selectAll: false,
        fields: [
          { key: 'selected', label: '' },
          { key: 'title', label: 'Наименование документа' },
          { key: 'totalPrice', label: 'Общая сумма' },
          { key: 'company_name', label: 'Контрагент' },
          { key: 'updatedDateTime', label: 'Обновлен' },
          { key: 'status', label: 'Статус' },
          { key: 'action', label: '' }
        ],
        documents: Documents
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
      }
    }
  }
</script>
<style scoped>
  .lightgray-button svg {
    padding-right: 6px;
    color: #6b6868;
  }
</style>
<style lang="scss">
  .documentTable thead th:first-child{
    width: 50px;
  }
  .documentTable thead th:last-child{
    width: 50px;
  }
</style>

