<template>
  <div class="registration-page register">
    <div class="registr-logo">
      <img src="./../assets/newlogo-white.png" alt="">
    </div>
    <div class="register-block">
      <h1>Регистрация</h1>
      <div class="input-block pt-5">
        <div>
          <div class="beauty-input user-name-able" v-if="isInputDiabled">
            <b-row>
              <b-col md="9">
                <div class="contact">
                  <div class="form-area">
                    <div class="group form-group">
                      <input v-model="username" @blur="$v.username.$touch()" :class="{ 'is-invalid': $v.username.$error }" type="text" class="form-control form-control-registration" autocomplete="on | off" required>
                      <span class="highlight"></span>
                      <span class="bar" :class="{ 'is-invalid': $v.username.$error }"></span>
                      <label :class="{ 'is-invalid': $v.username.$error }">Имя пользователя</label>
                      <span class="wrong-message" v-show="$v.username.$error">Введен неправильный формат</span>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="pt-2" v-if="!$v.username.$error && $v.username.required">
                <button size="sm" class="w-100 btn btn-success btn-sm" @click="doDisabledInput">Далее</button>
              </b-col>
              <b-col md="3" class="pt-2" v-else>
                <button size="sm" class="w-100 disabled btn btn-success btn-sm">Далее</button>
              </b-col>
            </b-row>
          </div>
          <div class="all-others" v-else>
            <b-row class="beauty-input disabled-username-input">
              <b-col>
                <div class="contact" :class="{ 'disabledInput' : !isInputDiabled }">
                  <div class="form-area">
                    <div class="group form-group">
                      <input v-model.trim.lazy="$v.username.$model"  disabled="disabled" type="text" class="form-control form-control-registration" autocomplete="on | off" required>
                      <span class="highlight"></span>
                      <span class="bar" ></span>
                      <label>Имя пользователя</label>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row class="beauty-input" v-if="isPasswordConfirm">
              <b-col class="input-able-password" md="5">
                <div class="contact" >
                  <div class="form-area">
                    <div class="group form-group">
                      <input v-model="confirmCode" :class="{ 'is-invalid': isPasswordConfirmOk }" maxlength="6" type="text" class="form-control form-control-registration" autocomplete="on | off" required>
                      <span class="highlight"></span>
                      <span class="bar" :class="{ 'is-invalid': isPasswordConfirmOk }"></span>
                      <label :class="{ 'is-invalid': isPasswordConfirmOk }">Подтвердите пароль {{ counter }}</label>
                      <span class="wrong-message" v-show="isPasswordConfirmOk">Неправельно</span>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col v-if="!$v.confirmCode.$error && $v.confirmCode.required" class="pt-2" md="5">
                <button size="sm" class="w-100 btn btn-success btn-sm" @click="changeConfirm" >Подтвердить</button>
              </b-col>
              <b-col v-else-if="this.counter === 0" class="pt-2" md="5">
                <button size="sm" class="w-100 btn btn-success btn-sm" @click="resetTimer" >Отрпавить еще раз</button>
              </b-col>
              <b-col v-else class="pt-2" md="5">
                <button size="sm" disabled="disabled" class="w-100 btn btn-success btn-sm">Подтвердить</button>
              </b-col>
              <b-col class="pt-2 back-button" md="2">
                <button size="sm" @click="doDisabledInput" class="w-100 btn btn-secondary btn-sm">Назад</button>
              </b-col>
            </b-row>
            <div class="oragnization-select" v-else>
              <b-row class="beauty-input">
                <b-col md="12" class="faktura-select">
                  <v-select v-model="selected" @blur="$v.selected.$touch()" :options="options" label="title">
                    <template slot="option" slot-scope="option">
                      <div> Серия № : {{ option.someDesc }}</div>
                      <div> Ф.И.О. : {{ option.title }}</div>
                      <div> Организация : {{ option.someData }}</div>
                    </template>
                  </v-select>
                  <label>Выберите сертификат</label>
                  <span class="wrong-message" v-show="!$v.selected.required">Выберите организация</span>
                </b-col>
              </b-row>
              <b-row class="ceckboxes">
                <b-col md="12" class="pb-4">
                  <div class="register-checkbox">
                    <b-form-checkbox v-model="acceptConditional"> Я принимаю условия оферты</b-form-checkbox>
                  </div>
                </b-col>
                <b-col md="12" class="pb-4">
                  <div class="register-checkbox">
                    <b-form-checkbox v-model="passwordAdd"> Создать пароль</b-form-checkbox>
                  </div>
                </b-col>
              </b-row>
              <b-row class="careate-password beauty-input pt-4" v-show="passwordAdd">
                <b-col  >
                  <div class="contact">
                    <div class="form-area">
                      <div class="group form-group">
                        <input type="password" v-model.trim="$v.password.$model" :class="{ 'is-invalid': $v.password.$error }" maxlength="6" class="form-control form-control-registration" autocomplete="on | off" required>
                        <span class="highlight"></span>
                        <span class="bar" :class="{ 'is-invalid': $v.password.$error }"></span>
                        <label :class="{ 'is-invalid': $v.password.$error }">Пароль</label>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="contact">
                    <div class="form-area">
                      <div class="group form-group">
                        <input type="password" v-model="passwordAgain"  @blur="$v.passwordAgain.$touch" :class="{ 'is-invalid': $v.passwordAgain.$error }" maxlength="6" class="form-control form-control-registration" autocomplete="on | off" required>
                        <span class="highlight"></span>
                        <span class="bar" :class="{ 'is-invalid': $v.passwordAgain.$error }"></span>
                        <label :class="{ 'is-invalid': $v.passwordAgain.$error }">Пароль еще раз</label>
                        <span v-show="$v.passwordAgain.$error" class="wrong-message">Пароли не совподают</span>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="register-org-button pt-3">
                <b-col v-if="selected && acceptConditional && !passwordAdd" class="text-center">
                  <router-link :to="{ name: 'home'}">
                    <button class="btn btn-success">Зарегистрироваться</button>
                  </router-link>
                </b-col>
                <b-col v-else-if="passwordAdd && $v.passwordAgain.sameAsPassword && $v.passwordAgain.required && selected && acceptConditional" class="text-center">
                  <router-link :to="{ name: 'home'}">
                    <button class="btn btn-success">Зарегистрироваться</button>
                  </router-link>
                </b-col>
                <b-col v-else class="text-center">
                    <button class="btn btn-success" disabled="disabled">Зарегистрироваться</button>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="register-line"></div>
  </div>
</template>

<script>
    import 'vue-select/dist/vue-select.css';
    import { required, minLength, sameAs } from "vuelidate/lib/validators"
    import { addresAndPhone } from '../js/custom-validators'

    import {
        LockIcon
    } from 'vue-feather-icons'
    export default {
        name: 'registration',
        components: {
            LockIcon,
        },
        data() {
            return {
                username: null,
                confirmCode: null,
                confirmCodeNumber: 111111,
                isPasswordConfirmOk: false,
                passwordAdd: '',
                password: '',
                passwordAgain: null,
                selected: null,
                isInputDiabled: true,
                acceptConditional: false,
                counter: 12,
                isPasswordConfirm: true,
                options: [
                    {
                        title: '5873623B2',
                        someDesc: 'Абдулазиз Ахмедов Акмалочив',
                        someData: '8888886'
                    },
                    {
                        title: '6573623B3',
                        someDesc: 'Адхам Турсунов Комилвич',
                        someData: '33323214'
                    },
                    {
                        title: '517362CB9',
                        someDesc: 'Эркин Тулкнов Мирамонович',
                        someData: '99897764'
                    },
                ]
            }
        },
        methods: {
            doDisabledInput() {
                this.isInputDiabled = !this.isInputDiabled;

                setInterval( () => {
                    if (this.counter === 0) {
                        this.counter
                    } else  {
                        this.counter--
                    }
                }, 1000);

            },
            resetTimer() {
                this.counter = 12;
            },
            changeConfirm() {
                if (this.confirmCode == this.confirmCodeNumber) {
                    this.isPasswordConfirm = false;
                    this.isPasswordConfirmOk = false
                } else {
                    this.isPasswordConfirmOk = true
                }

            },
        },
        validations: {
            username: {
                required,
                addresAndPhone,
            },
            confirmCode: {
                required,
            },
            password: {
                required
            },
            passwordAgain: {
                required,
                sameAsPassword: sameAs('password')
            },
            selected: {
                required
            }
        }
    }
</script>

<style lang="scss">

  .register-org-button {
    margin-bottom: 33px;
    button {
      width: 320px;
    }
  }

  .back-button {
    padding-right: 0 ;
    padding-left: 0 ;
  }

</style>


