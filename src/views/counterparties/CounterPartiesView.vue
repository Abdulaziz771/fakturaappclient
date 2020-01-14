<template>
  <div class="content">
    <div class="content-body">
      <div class="content-header border-bottom">
        <b-row class="mr-0">
          <b-col lg="7" md="6" sm="5" >
            <h5 class="title-text">Контрагенты</h5>
            <span class="title-border"></span>
            <div class="action-list">
              <div id="toggle-btn" @click="toggleModal" class="d-flex w-fill-content cuonter-tool-actions pt-3 cursor-pointer hover-effect-active">
                <PlusSquareIcon></PlusSquareIcon>
                <div class="pl-2 pt-1" >Добавить организацию</div>
              </div>
            </div>
          </b-col>
          <b-col lg="5" md="6" sm="7" class="table-filter-action action-list d-flex justify-content-end padding-for-pages-with-table">
            <div class="counter-tool counter  cunterparties-counter  cursor-pointer">
              <span class="page-counter">
                <span>
                  <span>1</span>–<span>20</span>
                </span> из <span>21</span>
              </span>
            </div>
            <div class="counter-tool cursor-pointer toggle-page-left rounded-circle mr-1">
              <ChevronLeftIcon class=""/>
            </div>
            <div class="counter-tool cursor-pointer toggle-page-right rounded-circle">
              <ChevronRightIcon class=""/>
            </div>
            <div class="counter-tool cursor-pointer filter-view">
              <SlidersIcon class=""/>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="table-body">
        <b-table hover :fields="fields" :items="counterparties" class="counter-parties-table ml-2">
          <template slot="name" slot-scope="data">
            <b>{{ data.item.name }}</b><br>
            <small><AlertCircleIcon class="alertCircleIcon"></AlertCircleIcon> ИНН: {{ data.item.inn }}</small>
          </template>
          <template slot="action">
            <img src="../../assets/send.png" class="send-icon">
            <img src="../../assets/garbage.png" class="gabarage-icon">
          </template>
        </b-table>
      </div>
    </div>
    <b-modal ref="my-modal" hide-footer title="Иван Иванов">
      <div class="d-block">
        <div class="d-flex">
          <div class="mr-2">
            <InfoIcon></InfoIcon>
          </div>
          <div>
            <p>Чтобы добавить организацию в список контрагентов, воспользуйтесь поиском.
              Также в список автоматически добавляются организации, с которыми ваша организация уже обменивалась документами через Faktura.uz.</p>
          </div>
        </div>
        <b-input-group>
          <b-form-input list="my-list-id"></b-form-input>

          <datalist id="my-list-id">
            <option>Manual Option</option>
            <option v-for="size in sizes">{{ size }}</option>
          </datalist>
          <b-input-group-append>
            <b-button variant="secondary" size="sm" block @click="toggleModal">Добавить</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
    import Counterpartiestable from '../../testData/Counterpartiestable'
    import {
        Trash2Icon,
        SendIcon,
        ChevronRightIcon,
        ChevronLeftIcon,
        PlusIcon,
        AlertCircleIcon,
        SlidersIcon,
        PlusSquareIcon,
        InfoIcon
    } from 'vue-feather-icons'

    export default {
        name: 'counter-parties-view',
        components: {
            Trash2Icon,
            SendIcon,
            ChevronRightIcon,
            ChevronLeftIcon,
            PlusIcon,
            AlertCircleIcon,
            SlidersIcon,
            PlusSquareIcon,
            InfoIcon
        },
        data () {
            return {
                counterparties: Counterpartiestable,
                fields: [
                    { key: 'name', label: 'Наименования контрагента' },
                    { key: 'action', label: 'Действие' }
                ],
                sizes: ['Small', 'Medium', 'Large', 'Extra Large']
            }
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            toggleModal() {
                this.$refs['my-modal'].toggle('#toggle-btn')
            }
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', true)
        }
    }
</script>

<style scoped>
  .table th, .table td {
    padding-left: 15px !important;
  }
</style>

<style lang="scss">

  .counter-parties-table thead {
    th:last-child {
      width: 90px;
    }

    th:last-child {
      width: 90px;
    }
  }

  .input-group {

    select:focus {
      box-shadow: none;
      border: 1px solid #cecbcb;
    }
  }

  .table th, .table td {
    /*padding-left: 15px !important;*/
  }

  .gabarage-icon {
    width: 20px;
    margin-left: 5px;
  }

  .clockIcon, .alertCircleIcon {
    width: 9px;
  }

  .cunterparties-counter {
    padding-top: 16px !important;
  }

  .form-control:focus {
    color: #665c70;
    background-color: #fff;
    border-color: #7984d2 !important;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(51, 111, 153, 0.25) !important;
  }
</style>

