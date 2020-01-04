<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Наименование</span></b-col>
                <b-col class="text-right" v-if="!showEditingPersonalData">
                  <EditIcon @click="onClickEditPersonalData"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showEditingPersonalData">
                <b-col md="12">
                  <b-form-group
                    label-cols-sm="2"
                    label="Полное наименование:"
                    label-align-sm="right"
                    label-for="last_name"
                  >
                    <b-form-input id="last_name" v-model="form.full_name"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="2"
                    label="Вы являетесь плательщиком НДС?:"
                    label-align-sm="right"
                    label-for="nds"
                  >
                    <select @change="changeVAT()" class="form-control" id="nds" v-model="form.selected">
                      <option disabled value="">Выберите один из вариантов</option>
                      <option>Да</option>
                      <option>Нет</option>
                    </select>

                  </b-form-group>

                  <div class="mb-3" v-show="vatpayer">
                    <b-row>
                      <b-col md="6">
                        <label class="register-code-VAT">Рег.код плательщика НДС:</label>
                        <b-input-group class="register-input-VAT" size="sm">
                          <b-form-input maxlength="12" v-model.trim.lazy="$v.form.VATCode.$model"></b-form-input>
                        </b-input-group>
                        <span v-show="$v.form.VATCode.$error" class="text-danger">Код плательщика НДС должен состоять из 12 цыфр</span>
                      </b-col>
                      <b-col md="6">
                        <label class="rate">Ставка НДС:</label>
                        <b-input-group class="rate-inp" size="sm" append="%">
                          <b-form-input type="number" v-model="form.VAT"></b-form-input>
                        </b-input-group>
                      </b-col>
                    </b-row>
                  </div>

                  <b-form-group
                    label-cols-sm="2"
                    label="ИНН:"
                    label-align-sm="right"
                    label-for="inn"
                  >
                    <b-form-input disabled id="first_name" v-model="form.inn"></b-form-input>
                  </b-form-group>

                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button class="btn-sm" variant="outline-success" @click="onClickCancelPersonalData">Проверить и сохранить</b-button>
                    <b-button class="mr-3 btn-sm" variant="outline-secondary" @click="onClickCancelPersonalData">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col md="12">
                  <b-list-group>
                    <b-list-group-item><b>Полное наименование:</b> {{form.full_name}}</b-list-group-item>
                    <b-list-group-item><b>Плательщик НДС:</b> {{ form.selected }}</b-list-group-item>
                    <b-list-group-item v-show="vatpayer"><b>Рег.код плательщика НДС:</b> {{ form.VATCode }}</b-list-group-item>
                    <b-list-group-item v-show="vatpayer"><b>Ставка НДС:</b> {{ form.VAT }}</b-list-group-item>
                    <b-list-group-item><b>ИНН:</b> {{form.inn}}</b-list-group-item>
                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Счета</span></b-col>
                <b-col class="text-right" v-if="!showNotificationSettings">
                  <EditIcon @click="onClickNotificationSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showNotificationSettings">
                <b-col cols="12">
                  <b-row class="mb-3" v-for="(payment, index) in payments">
                    <b-col class="text-right pr-0" cols="2">
                      <label class="pt-2">Расчётный счёт</label>
                    </b-col>
                    <b-col cols="2">
                      <b-form-input size="sm" v-model="payment.paymentAcc" placeholder="Рассчетный счет"></b-form-input>
                    </b-col>
                    <b-col cols="7">
                      <b-form-input size="sm" list="input-list" v-model="payment.account" id="input-with-list"></b-form-input>
                      <b-form-datalist size="sm" id="input-list"></b-form-datalist>
                    </b-col>
                    <b-col class="pl-0" cols="1">
                      <b-button variant="danger" size="sm" @click="deleteRow(index)">Удалить</b-button>
                    </b-col>
                  </b-row>
                  <b-row class="mb-3">
                    <b-col offset="11" cols="1" class="pl-0">
                      <b-button size="sm" variant="secondary" @click="pushRow">Добаить</b-button>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button size="sm" variant="outline-success"  @click="onClickNotificationSettings(false)">Сохранить</b-button>
                    <b-button  size="sm" variant="outline-secondary" class="mr-3" @click="onClickNotificationSettings(false)">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col>
                  <b-list-group>

                    <b-list-group-item v-for="payment in payments">
                      <b>Рассчетный счет:</b> {{payment.paymentAcc}}
                      <b class="pl-4">Аддрес:</b> {{ payment.account }}
                     </b-list-group-item>

                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Специальный счет</span></b-col>
                <b-col class="text-right" v-if="!showSpecialSettings">
                  <EditIcon @click="onSpecialSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showSpecialSettings">
                <b-col cols="12">
                  <b-form-group
                    label-cols-sm="2"
                    label="Специальный счёт:"
                    label-align-sm="right"
                  >
                    <b-form-input v-model="form.special_check"></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols-sm="2"
                    label="Код по ОКОНХ:"
                    label-align-sm="right"
                  >
                    <b-form-input v-model="form.OKONX" @blur="$v.form.OKONX.$touch()" ></b-form-input>
                    <p v-show="$v.form.OKONX.$error" class="pt-2 text-danger">Неправильный формат. Значение должно состоять из пяти цифр</p>
                  </b-form-group>
                  <b-form-group
                    label-cols-sm="2"
                    label="Код по ОКЭД:"
                    label-align-sm="right"
                    label-for="last_name"
                  >
                    <b-form-input id="last_name" v-model="form.OKED" @blur="$v.form.OKED.$touch()"></b-form-input>
                    <p v-show="$v.form.OKED.$error" class="pt-2 text-danger">Неправильный формат. Значение должно состоять из пяти цифр</p>
                  </b-form-group>
                </b-col>
                <b-col>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button
                      size="sm"
                      variant="outline-success"
                      v-if="$v.form.OKONX.$error || $v.form.OKED.$error"
                      disabled
                    > Сохранить
                    </b-button>
                    <b-button
                      v-else
                      size="sm"
                      variant="outline-success"
                      @click="onSpecialSettings(false)"
                    >Сохранить</b-button>
                    <b-button
                      size="sm" variant="outline-secondary"
                      class="mr-3"
                      @click="onSpecialSettings(false)"
                    > Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col>
                  <b-list-group>
                    <b-list-group-item><b>Специальный счёт:</b> {{form.special_check}}</b-list-group-item>
                    <b-list-group-item><b>Код по ОКОНХ:</b> {{form.OKONX}}</b-list-group-item>
                    <b-list-group-item><b>Код по ОКЭД:</b> {{form.OKED}} </b-list-group-item>

                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Местоположение</span></b-col>
                <b-col class="text-right" v-if="!showLocationSettings">
                  <EditIcon @click="onLocationSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showLocationSettings">
                <b-col cols="12">

                  <b-form-group
                    label-cols-sm="2"
                    label="Область:"
                    label-align-sm="right"
                  >
                    <select class="form-control" v-model="form.selectedRegion">
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
                    label-cols-sm="2"
                    label="Район:"
                    label-align-sm="right"
                  >
                    <select class="form-control" v-model="form.selectedDistrict">
                      <option disabled value="">Выберите один из вариантов</option>
                      <option >МИРАБАДСКИЙ РАЙОН</option>
                      <option >МИРЗО УЛУГБЕКСКИЙ РАЙОН</option>
                      <option >ЮНУСАБАДСКИЙ РАЙОН</option>
                      <option >ЯККАСАРАЙСКИЙ РАЙОН</option>
                      <option >ШАЙХАНТАХУРСКИЙ РАЙОН</option>
                      <option >ЧИЛОНЗАРСКИЙ РАЙОН</option>
                      <option >СИРГЕЛИЙСИКЙ РАЙОН</option>
                      <option >ЯШНАБАДСКИЙ РАЙОН</option>
                      <option >АЛМАЗАРСКИЙ РАЙОН</option>
                      <option >УЧТЕПИНСКИЙ РАЙОН</option>
                      <option >БЕКТЕМИРСКИЙ РАЙОН</option>
                    </select>

                  </b-form-group>

                  <b-form-group
                    label-cols-sm="2"
                    label="Улица:"
                    label-align-sm="right"
                  >
                    <b-form-input v-model="form.street"></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols-sm="2"
                    label="Дом:"
                    label-align-sm="right"
                  >
                    <b-form-input v-model="form.house"></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols-sm="2"
                    label="Индекс:"
                    label-align-sm="right"
                  >
                    <b-form-input v-model="form.index" @blur="$v.form.index.$touch()"></b-form-input>
                    <p v-show="$v.form.index.$error" class="pt-2 text-danger">Неправильный формат. Значение должно состоять из шести цифр</p>
                  </b-form-group>
                </b-col>
                <b-col>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button size="sm" variant="outline-success" v-if="$v.form.index.$error" disabled >Сохранить</b-button>
                    <b-button size="sm" variant="outline-success" v-else @click="onLocationSettings(false)">Сохранить</b-button>
                    <b-button  size="sm" variant="outline-secondary" class="mr-3" @click="onLocationSettings(false)">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col>
                  <b-list-group>
                    <b-list-group-item><b>Область:</b> {{form.selectedRegion}}</b-list-group-item>
                    <b-list-group-item><b>Район:</b> {{form.selectedDistrict}}</b-list-group-item>
                    <b-list-group-item><b>Улица:</b> {{form.street}} </b-list-group-item>
                    <b-list-group-item><b>Дом:</b> {{form.house}} </b-list-group-item>
                    <b-list-group-item><b>Индекс:</b> {{form.index}} </b-list-group-item>
                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Номера</span></b-col>
                <b-col class="text-right" v-if="!showPhoneSettings">
                  <EditIcon @click="onPhoneSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showPhoneSettings">
                <b-col cols="12">
                  <b-form-group
                    label-cols-sm="2"
                    label="Городской телефон:"
                    label-align-sm="right"
                  >
                    <b-form-input v-model="form.home_phone" @blur="$v.form.home_phone.$touch()"></b-form-input>
                    <p v-show="$v.form.home_phone.$error" class="pt-2 text-danger">Введен неправильный формат</p>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="2"
                    label="Сотовый телефон:"
                    label-align-sm="right"
                  >
                    <b-form-input v-model="form.mobile_phone" @blur="$v.form.mobile_phone.$touch()"></b-form-input>
                    <p v-show="$v.form.mobile_phone.$error" class="pt-2 text-danger">Введен неправильный формат</p>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="2"
                    label="Email:"
                    label-align-sm="right"
                    label-for="last_name"
                  >
                    <b-form-input id="last_name" v-model="form.emailAddres" @blur="$v.form.emailAddres.$touch()"></b-form-input>
                    <p v-show="$v.form.emailAddres.$error" class="pt-2 text-danger">Введен неправильный формат</p>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="2"
                    label="Маркет код:"
                    label-align-sm="right"
                    label-for="last_name"
                  >
                    <b-form-input id="last_name" v-model="form.market_password"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button size="sm" variant="outline-success" v-if="$v.form.home_phone.$error || $v.form.mobile_phone.$error || $v.form.emailAddres.$error" disabled >Сохранить</b-button>
                    <b-button size="sm" variant="outline-success" v-else @click="onPhoneSettings(false)">Сохранить</b-button>
                    <b-button  size="sm" variant="outline-secondary" class="mr-3" @click="onPhoneSettings(false)">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col>
                  <b-list-group>
                    <b-list-group-item><b>Городской телефон:</b> {{form.home_phone}}</b-list-group-item>
                    <b-list-group-item><b>Сотовый телефон:</b> {{form.mobile_phone}}</b-list-group-item>
                    <b-list-group-item><b>Email:</b> {{form.emailAddres}}</b-list-group-item>
                    <b-list-group-item><b>Маркет код:</b> {{form.market_password}}</b-list-group-item>
                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
    import { email, numeric, minLength   } from "vuelidate/lib/validators"
    import { oked, okonh, index, phoneWithout998 } from '../../js/custom-validators'
    import {
        EditIcon,
        DeleteIcon,
    } from 'vue-feather-icons'

    export default {
        name: 'props-area-settings-view',
        components: {
            EditIcon,
            DeleteIcon
        },
        data () {
            return {
                imgUrl: null,
                showEditingPersonalData: false,
                showNotificationSettings: false,
                showSpecialSettings: false,
                showLocationSettings: false,
                showPhoneSettings: false,
                vatpayer: false,
                form: {
                    full_name: '302563857 Corporation',
                    inn: '302563857',
                    selected: 'Нет',
                    selectedRegion: 'ГОРОД ТАШКЕНТ',
                    selectedDistrict: 'ЮНУСАБАДСКИЙ РАЙОН',
                    VATCode: 998575647234,
                    VAT: "",
                    special_check: '',
                    OKED: '',
                    OKONX: '',
                    street: '',
                    house: '1',
                    index: '',
                    home_phone: '',
                    mobile_phone: '',
                    emailAddres: '',
                    market_password: ''
                },
                payments: [
                    {
                        paymentAcc: "20208000900214706001",
                        account: 'ТОШКЕНТ Ш., "ИПАК ЙУЛИ" АИТ БАНКИНИНГ ЧИЛОНЗОР ФИЛИАЛИ'
                    },
                    {
                        paymentAcc: "20208000900186481033",
                        account: 'ТОШКЕНТ Ш., "ТРАСТБАНК" ХА БАНКИНИНГ БОШ ОФИСИ'
                    },
                    {
                        paymentAcc: "20208000900186481007",
                        account:  'ДАНГАРА Т., АТ ХАЛК БАНКИ ДАНГАРА ФИЛИАЛИ'
                    },
                ]
            }
        },
        methods: {
            pushRow() {
                this.payments.push({
                    paymentAcc: "20208000900186481007",
                    account:  'ДАНГАРА Т., АТ ХАЛК БАНКИ ДАНГАРА ФИЛИАЛИ'
                })
            },
            deleteRow(index) {
                this.$delete(this.payments, index)
            },
            onChangeUploadAvatar() {
                const file = this.$refs.imageUpload.files[0]
                this.imgUrl = URL.createObjectURL(file)
            },
            onClickDeleteAvatar() {
                this.imgUrl = null
            },
            onClickEditPersonalData() {
                this.showEditingPersonalData = true
            },
            onClickCancelPersonalData() {
                this.showEditingPersonalData = false
            },
            onClickNotificationSettings(value) {
                this.showNotificationSettings = value
            },
            onSpecialSettings(value) {
                this.showSpecialSettings = value
            },
            onLocationSettings(value) {
                this.showLocationSettings = value
            },
            onPhoneSettings(value) {
                this.showPhoneSettings = value
            },
            changeVAT() {
                if (this.form.selected == "Да") {
                    this.vatpayer = true;
                } else if (this.form.selected == "Нет") {
                    this.vatpayer = false;
                }
            }
        },
        validations: {
            form: {
                VATCode: {
                    numeric,
                    minLength: minLength(12)
                },
                OKED: {
                    oked
                },
                OKONX: {
                    okonh
                },
                index: {
                    index
                },
                home_phone: {
                    phoneWithout998
                },
                mobile_phone: {
                    phoneWithout998
                },
                emailAddres: {
                    email
                }
            },
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', true)
        }
    }
</script>
<style lang="scss">

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

  //vat inputs
  .register-code-VAT {
    float: left;
    text-align: right;
    width: 34%;
    padding: 7px 10px;
    margin: 0;
  }
  .register-input-VAT {
    width: 66%;
  }

  .rate {
    width: 20%;
    float: left;
    text-align: right;
    padding: 7px 10px;
    margin: 0;
  }

  .rate-inp {
    width: 80%;
  }

</style>

