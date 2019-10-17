<template>
  <div class="content without-second-sidebar">
    <div class="content-body">
      <div class="content-header border-bottom">
        <b-row >
          <b-col lg="4" md="6" sm="5" >
            <h5 class="title-text">Контрагенты</h5>
            <span class="title-border"></span>
            <div class="action-list">
              <div id="toggle-btn" @click="toggleModal" class="d-flex w-fill-content tool-actions pt-3 cursor-pointer hover-effect-active">
                <PlusSquareIcon></PlusSquareIcon>
                <span class="pt-1" >Добавить организацию</span>
              </div>
            </div>
          </b-col>
          <b-col lg="8" md="6" sm="7" class="table-filter-action action-list d-flex justify-content-end">
            <div class="counter-tool counter  cunterparties-counter  cursor-pointer">
              <span class="pt-1">
                <span>
                  <span>1</span>–<span>20</span>
                </span> из <span>21</span>
              </span>
            </div>
            <div class="counter-tool toggle-page-left rounded-circle mr-1">
              <ChevronLeftIcon class="cursor-pointer"/>
            </div>
            <div class="counter-tool toggle-page-right rounded-circle">
              <ChevronRightIcon class="cursor-pointer"/>
            </div>
            <div class="counter-tool filter-view">
              <SlidersIcon class="cursor-pointer"/>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="table-body">
        <b-table hover :fields="fields" :items="counterparties" class="counter-parties-table">
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

  </div>
</template>

<script>
    import Counterpartiestable from '../../TestData/Counterpartiestable'
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
        name: 'CounterParties',
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
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                this.$refs['my-modal'].toggle('#toggle-btn')
            }
        }
    }
</script>

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
    padding-left: 15px;
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
