<template>
  <div :class="{ 'open' : this.$store.getters.isvalueSecondSidebar}">
    <div class="content without-second-sidebar">
      <div class="content-body">
        <div class="content-header">
          <b-container fluid>
            <b-row class="home-header-action">
              <b-col class="text-left pt-3 ">
                <h6>Недавно подписанные документы</h6>
              </b-col>
              <b-col class="text-right pt-3">
                <router-link :to="{name: 'document-inbox'}" class="view-all-link">
                  <h6>Посмотрет все</h6>
                </router-link>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="table-body">
          <b-table bordered striped hover :fields="fields" :items="documents">
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
  </div>
</template>

<script>
  import {
    HelpCircleIcon,
    ChevronRightIcon
  } from 'vue-feather-icons'
  import Documents from '../testData/HomepageData'

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
    },
    created() {
        this.$store.commit('toggleAllNavigators', true);
        this.$store.commit('toggleSecondSidebar', false);
        this.$store.commit('setWholeMenuInSidebar', true);
    }
  }
</script>
<style lang="scss" scoped>
  .view-all-link {
    cursor: pointer;
    font-size: 17px;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #28a745;
    }

    & svg {
      width: 20px;
      position: relative;
      bottom: 1px;
    }
  }

</style>

