<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Подразделение</span></b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row>
                <b-col md="12" lg="6">
                 <div>
                   <ul class="main">
                     <li class="main-list" v-for="(subdivison, index) in subdivisons">
                       <div class="main-list-content"><UsersIcon></UsersIcon>{{ subdivison.name }}
                         <TrashIcon class="float-right" @click="deleteAction(index)"></TrashIcon>
                         <Edit3Icon @click="toggleModal" class="float-right"></Edit3Icon></div>
                       <div v-for="childelement in subdivison.childelements" v-show="subdivison.childelements">
<!--                         <ol class="child-elements">-->
<!--                           <li>-->
<!--                             <div><UserIcon></UserIcon>{{ childelement.childName }}-->
<!--                               <TrashIcon class="float-right" @click="deleteAction"></TrashIcon>-->
<!--                               <Edit3Icon id="toggle-btn" @click="toggleModal" class="float-right"></Edit3Icon></div>-->
<!--                           </li>-->
<!--                         </ol>-->
                       </div>
                     </li>
                   </ul>
                 </div>
                  <b-button size="sm" class="float-right" @click="toggleModal">Добавить</b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-container>
      </div>
    </div>
    <b-modal size="md" ref="delet" hide-footer title="Удаление">
      <div class="d-block">
        <h6 class="pb-4">Вы действительно хотите удалить?</h6>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeDeletAction mr-2"><p @click="deleteSub">Удалить</p></div>
          <div class="canelDeletAction"><p @click="deleteAction">Отмена</p></div>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal  class="special-modal" size="lg" ref="edit" hide-footer title="Редактирование подразделения">
      <div class="d-block">
        <b-row>
          <b-col cols="12">
            <b-form-group
              label-cols-sm="3"
              label="Название:"
              label-align-sm="right"
            >
              <b-form-input size="sm" v-model="subdivisionName"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Родительское подразделение:"
              label-align-sm="right"
            >
              <b-form-select v-model="districtSelected" :options="subdivisons" text-field="name" size="sm" class="mt-3">

              </b-form-select>

            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Приватный:"
              label-align-sm="right"
            >
              <b-form-checkbox size="sm"></b-form-checkbox>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Филиал:"
              label-align-sm="right"
            >
              <b-form-checkbox v-model="status"
                               value="accepted"
                               unchecked-value="not_accepted"
                               size="sm"
              >
              </b-form-checkbox>
            </b-form-group>

            <div v-if="status == 'accepted'">
              <b-form-group
                label-cols-sm="3"
                label="Область:"
                label-align-sm="right"
              >
                <select class="select-region form-control" >
                  <option disabled value="">Выберите один из вариантов</option>
                  <option>АНДИЖАНСКАЯ ОБЛАСТЬ</option>
                  <option>БУХАРСКАЯ ОБЛАСТЬ</option>
                  <option>ДЖИЗАКСКАЯ ОБЛАСТЬ</option>
                  <option>КАШКАДАРЬИНСКАЯ ОБЛАСТЬ</option>
                  <option>НАВОИЙСКАЯ ОБЛАСТЬ</option>
                  <option>НАМАНГАНСКАЯ ОБЛАСТЬ</option>
                  <option>САМАРКАНДСКАЯ ОБЛАСТЬ</option>
                  <option>СУРХАНДАРЬИНСКАЯ ОБЛАСТЬ</option>
                  <option>СЫРДАРЬИНСКАЯ ОБЛАСТЬ</option>
                  <option>ГОРОД ТАШКЕНТ</option>
                  <option>ТАШКЕНТСКАЯ ОБЛАСТЬ</option>
                  <option>ФЕРГАНСКАЯ ОБЛАСТЬ</option>
                  <option>ХОРЕЗМСКАЯ ОБЛАСТЬ</option>
                  <option>РЕСП. КАРАКАЛПАКСТАН</option>
                </select>

              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Улица:"
                label-align-sm="right"
              >
                <b-form-input size="sm"></b-form-input>
              </b-form-group>
              <b-form-group
                label-cols-sm="3"
                label="Дом:"
                label-align-sm="right"
              >
                <b-form-input size="sm"></b-form-input>
              </b-form-group>
              <b-form-group
                label-cols-sm="3"
                label="Индекс:"
                label-align-sm="right"
              >
                <b-form-input size="sm" v-model="index" @blur="$v.index.$touch()"></b-form-input>
                <span class="pt-2 text-danger" v-show="$v.index.$error">Индекс должен состоять из шести цифр</span>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Городской телефон:"
                label-align-sm="right"
              >
                <b-form-input size="sm" v-model="house_phone" @blur="$v.house_phone.$touch()"></b-form-input>
                <span class="pt-2 text-danger" v-show="$v.house_phone.$error">Введен неправильный формат</span>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Сотовый телефон:"
                label-align-sm="right"
              >
                <b-form-input size="sm" v-model="$v.mobile_phone.$model" @blur="$v.mobile_phone.$touch()"></b-form-input>
                <span class="pt-2 text-danger" v-show="$v.mobile_phone.$error">Введен неправильный формат</span>
              </b-form-group>
            </div>

          </b-col>
        </b-row>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeModal" v-if="($v.mobile_phone.$error || $v.house_phone.$error || $v.index.$error) && status == 'accepted'"><p >Сохранить изменение</p></div>
          <div class="closeModal" v-else><p @click="addSubdivion(subdivisionName)">Сохранить изменение</p></div>
          <div class="canelMdoal"><p @click="toggleModal">Закрыть</p></div>
        </b-col>
      </b-row>
    </b-modal>

  </div>
</template>
<script>

    import {  } from "vuelidate/lib/validators"
    import { index, phoneWithout998 } from '../../js/custom-validators'

    import {
        UsersIcon,
        UserIcon,
        TrashIcon,
        Edit3Icon
    } from 'vue-feather-icons'

    export default {
        name: 'subdivision-settings-view',
        components: {
            UsersIcon,
            UserIcon,
            TrashIcon,
            Edit3Icon
        },
        data () {
            return {
                status: 'not_accepted',
                index: null,
                house_phone: null,
                mobile_phone: null,
                currentIndex: null,
                subdivisionName: '',
                districtSelected: null,
                subdivisons: [
                    {
                        name: 'Бухгалтерия',
                        parent: null,
                        id: 1
                    },
                    {
                        name: 'Кол-центр',
                        parent: null,
                        id: 2
                    },
                    {
                        name: 'Руководство',
                        parent: null,
                        id: 3
                    }
                ],

            }
        },
        methods: {
            toggleModal() {
                this.$refs['edit'].toggle('#toggle-btn')
            },
            deleteAction(index) {
                this.$refs['delet'].toggle('#delet-btn');
                this.currentIndex = index
            },
            deleteSub() {
                this.$delete(this.subdivisons, this.currentIndex);
                this.$refs['delet'].toggle('#delet-btn')
            },
            addSubdivion() {
                this.$refs['edit'].toggle('#toggle-btn');
                this.subdivisons.push(
                    { name: this.subdivisionName }
                )
            }
        },
        validations: {
            index: {
                index
            },
            house_phone: {
                phoneWithout998
            },
            mobile_phone: {
                phoneWithout998
            }
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', true)
        }
    }
</script>
<style lang="scss">

  .main {
    svg {
      width: 16px;
      margin-right: 10px;
      padding-bottom: 4px;
    }
    .main-list {
      display: block;
      .main-list-content {
        /*background: #b7b7b7;*/
        /*margin-bottom: 5px;*/
        /*border-radius: 5px;*/
        padding: 12px;
        border-top: 1px solid #dcdada;
      }
      .child-elements {
        li {
          display: block;
          div {
            border-top: 1px solid #dcdada;
            /*margin-bottom: 5px;*/
            padding: 11px;
            /*background: #e8e8e8;*/
            /*border-radius: 5px;*/
          }
        }
      }
    }
    .last-one {
      border-bottom: 1px solid #dcdada;
    }
    .float-right {
      width: 20px;
      cursor: pointer;
    }
  }

  .custom-checkbox {
    padding-top: 5px;
  }

  .select-destrict, .select-region {
    height: 31px;
    font-size: 12px;
  }

  .item1 {
    padding: 17px;
  }

  .item1-sub {
    padding: 17px;
  }

  .form-control {
    background: #f7f7f7;
  }

  .personal-area {
    .form-control:focus {
      color: #665c70;
      background-color: #fff;
      border-color: #7984d2 !important;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(51, 111, 153, 0.25) !important;
    }
  }

</style>
