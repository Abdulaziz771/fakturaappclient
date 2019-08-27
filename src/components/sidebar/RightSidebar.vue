<template>
  <transition name="slide">
    <b-media-aside class="shadow" right-align vertical-align="center" v-if="active"
                   :class="{ active: active}"
                   id="rightSidebar">
      <div class="content-rights-sidebar m-2">
        <h6 class="text-center">Массовое подписание документов</h6>
        <hr class="m-2"/>
        <div class="pb-2">Общая стоимость: 0 сум</div>
        <div class="pb-2">Количество документов: 0 шт</div>

        <multiselect selectLabel=""
                     selectedLabel=""
                     deselectLabel="X"
                     placeholder="Выберите сертификат"
                     :customLabel="customLabel"
                     :value="value"
                     :options="options"
                     :searchable="true"
                     @input="updateValueAction">
          <template slot="singleLabel" slot-scope="props">
            <span>{{ props.option.name }} ({{ props.option.inn }})</span>
          </template>
          <template slot="option" slot-scope="props">
            <div class="pb-1 small">Серия № : {{ props.option.serial }} <em class="pl-2 text-warning">Срок действия: {{
              props.option.date }}</em></div>
            <div class="pb-1 small">Ф.И.О : {{ props.option.name }}</div>
            <div class="pb-1 small">Организация : {{ props.option.organization }} ({{ props.option.inn }})</div>
          </template>
        </multiselect>
        <div class="pt-2">
          <b-button size="sm" class="d-inline mr-2 pr-2 pl-2 lightgray-button">
            <RefreshCwIcon class="smallButtonIconSize pb-1"></RefreshCwIcon>
            Обновить
          </b-button>
          <b-button size="sm" class="d-inline pr-2 pl-2 lightgray-button">
            <XIcon class="smallButtonIconSize pb-1"></XIcon>
            Очистить
          </b-button>
          <b-button size="sm" class="d-inline float-right pr-2 ml-2 default-success-button">
            <EditIcon class="smallButtonIconSize pb-1"></EditIcon>
            Подписать
          </b-button>
        </div>
        <div class="mt-2 overflow-auto" style="height: 60vh">
          <div class="mb-1 p-2 document-list">
            <div><b>Договор на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор для установки платежного терминала</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Заявления на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>

          <div class="mb-1 p-2 document-list">
            <div><b>Договор на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор для установки платежного терминала</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Заявления на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор для установки платежного терминала</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Заявления на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор для установки платежного терминала</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Заявления на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор для установки платежного терминала</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Заявления на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор для установки платежного терминала</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Заявления на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Договор для установки платежного терминала</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
          <div class="mb-1 p-2 document-list">
            <div><b>Заявления на открыть счет</b></div>
            <div class="clearfix text-success">
              <span class="float-left">Бесплатная</span>
              <XIcon class="smallButtonIconSize cursor-pointer float-right"/>
            </div>
          </div>
        </div>
      </div>
    </b-media-aside>
  </transition>
</template>
<script>
  import Multiselect from 'vue-multiselect'
  import {
    RefreshCwIcon,
    XIcon,
    EditIcon
  } from 'vue-feather-icons'

  export default {
    name: 'RightSidebar',
    props: ['active'],
    components: {
      Multiselect,
      RefreshCwIcon,
      XIcon,
      EditIcon
    },
    data () {
      return {
        value: {
          serial: '12378945',
          name: 'Ivan Ivanov Ivanovich',
          inn: '789789789',
          date: '13.05.2021',
          organization: 'Space Online Genesis'
        },
        options: [
          {
            serial: '12378945',
            name: 'Ivan Ivanov Ivanovich',
            inn: '789789789',
            date: '13.05.2021',
            organization: 'Space Online Genesis'
          },
          {
            serial: '23423423',
            name: 'Ivan Ivanov Ivanovich',
            inn: '890890898',
            date: '13.05.2022',
            organization: 'Space Online Genesis'
          },
          {
            serial: '45645645',
            name: 'Ivan Ivanov Ivanovich',
            inn: '789789789',
            date: '13.05.2020',
            organization: 'Space Online Genesis'
          },
          {
            serial: '67867867',
            name: 'Ivan Ivanov Ivanovich',
            inn: '678678678',
            date: '13.05.2021',
            organization: 'Space Online Genesis'
          }
        ]
      }
    },
    methods: {
      updateValueAction (value) {
        this.value = value
      },
      customLabel ({ serial }) {
        return 'Серия № : ' + `${serial}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  #rightSidebar .overflow-auto::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  #rightSidebar .overflow-auto::-webkit-scrollbar {
    width: 5px;
    background-color: #F5F5F5;
  }

  #rightSidebar .overflow-auto::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #939294;
  }

  #rightSidebar {
    background-color: white;
    display: block !important;
    border: 1px solid #7370703d;
    z-index: 9;
    position: absolute;
    top: 146px;
    right: 16px;
    height: 100%;
    width: 500px;
    padding-bottom: 20px;

    & .content-rights-sidebar {
    }

    & .document-list {
      background-color: #edf0f5;
      border-radius: 2%;
      border: 1px solid #e4e5e7;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
    transition: all 200ms ease-in 0s
  }
</style>
