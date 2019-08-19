<template>
  <div class="content">
    <div id="fixed-content-header">
      <b-container fluid>
        <b-row>
          <b-col md="12" lg="5" class="p-0">
            <b-button class="lightgray-button mr-2">
              <Edit2Icon v-b-tooltip.hover title="Подписать и отправить"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <XCircleIcon v-b-tooltip.hover title="Отказать и удалить"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <UsersIcon v-b-tooltip.hover title="Отправить на согласование"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <StarIcon class="cursor-pointer " v-b-tooltip.hover title="Отметить как"/>
            </b-button>
            <b-button class="lightgray-button mr-2">
              <PrinterIcon class="cursor-pointer " v-b-tooltip.hover title="Отправить на печать"/>
            </b-button>
          </b-col>
          <b-col md="12" lg="7" class="p-0">
            <div class="form-inline float-right">
              <div class="pl-2 form-inline">
                <label class="mr-1">Показать по: </label>
                <select class="form-control form-control-sm">
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </select>
              </div>
              <div class="form-inline pl-4 pr-2">
                <span class="pr-2">1-20 из 134</span>
                <ChevronLeftIcon class="cursor-pointer mr-1"/>
                <ChevronRightIcon class="cursor-pointer ml-1"/>
              </div>
              <b-button class="lightgray-button mr-2" size="sm" style="padding: 5px">Фильтр</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="scroll-content-body">
      <b-tabs justified class="mt-2 document-tabs">
        <b-tab title-item-class="h5" active>
          <template slot="title">Счет фактуры</template>
          <b-table sticky-header striped hover sticky-header="800px" :fields="fields" :items="documents"
                   class="documentTable">
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
        </b-tab>
        <b-tab title-item-class="h5">
          <template slot="title">Договоры</template>
          <b-table sticky-header striped hover :fields="fields" :items="documents" class="documentTable">
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
        </b-tab>
        <b-tab title-item-class="h5">
          <template slot="title">Акты</template>
          <b-table sticky-header striped hover :fields="fields" :items="documents" class="documentTable">
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
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
  import Documents from '../../TestData/Documents'
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
    name: 'inbox-documents-component',
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
    },
    data () {
      return {
        selected: [],
        fixed: true,
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
    color: #6b6868;
    padding: 2px;
  }
</style>
<style lang="scss">

  .documentTable thead th:first-child {
    width: 50px;
  }

  .documentTable thead th:last-child {
    width: 50px;
  }
</style>

