<template>
  <div>
    <div class="content mb-4">
      <div class="content-header">
        <b-container fluid>
          <b-row>
            <b-col class="text-left p-0">
              В ожидании подписания
              <HelpCircleIcon class="help-icon" v-b-tooltip.hover title="В ожидании подписания"></HelpCircleIcon>
            </b-col>
            <b-col class="text-right p-0">
              <router-link :to="{name: 'InboxDocuments'}" class="view-all-link">
                Посмотрет все
                <ChevronRightIcon/>
              </router-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="content-body">
        <b-table responsive bordered striped hover :fields="fields" :items="documents">
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
        </b-table>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <b-container fluid>
          <b-row>
            <b-col class="text-left p-0">
              Недавно подписанные документы
              <HelpCircleIcon class="help-icon" v-b-tooltip.hover title="Недавно подписанные документы"></HelpCircleIcon>
            </b-col>
            <b-col class="text-right p-0">
              <router-link :to="{name: 'InboxDocuments'}" class="view-all-link">
                Посмотрет все
                <ChevronRightIcon/>
              </router-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="content-body">
        <b-table responsive bordered striped hover :fields="fields" :items="documents">
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
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    HelpCircleIcon,
    ChevronRightIcon
  } from 'vue-feather-icons'
  import Documents from '../TestData/HomepageData'

  export default {
    name: 'home',
    components: {
      HelpCircleIcon,
      ChevronRightIcon
    },
    data () {
      return {
        documents: Documents,
        fields: [
          { key: 'title', label: 'Наименование документа' },
          { key: 'totalPrice', label: 'Общая сумма' },
          { key: 'company_name', label: 'Контрагент' },
          { key: 'updatedDateTime', label: 'Обновлен' },
          { key: 'status', label: 'Статус' },
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .view-all-link {
    cursor: pointer;
    font-size: 17px;
    text-decoration: none;
    font-weight: 500;
    &:hover{
      color: #28a745;
    }
    & svg {
      width: 20px;
      position: relative;
      bottom: 1px;
    }
  }

</style>

