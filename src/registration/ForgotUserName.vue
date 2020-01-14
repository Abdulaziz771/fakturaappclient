<template>
  <div class="registration-page register">
    <div class="registr-logo">
      <img src="./../assets/newlogo-white.png" alt="">
    </div>
    <div class="register-block">
      <h1>Восстановление имя пользователя</h1>
      <div class="input-block pt-5">
        <div class="beauty-input">
          <b-row v-if="isInnActive">
            <b-col md="9">
              <div class="contact">
                <div class="form-area">
                  <div class="group form-group">
                    <input v-model="inn" @blur="$v.inn.$touch()" :class="{ 'is-invalid': $v.inn.$error }" maxlength="9" type="text" class="form-control form-control-registration" autocomplete="on | off" required>
                    <span class="highlight"></span>
                    <span class="bar" :class="{ 'is-invalid': $v.inn.$error }"></span>
                    <label :class="{ 'is-invalid': $v.inn.$error }">Введите ИНН</label>
                    <span class="wrong-message" v-show="$v.inn.$error">Введен неправильный формат</span>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col md="3" class="pt-2" v-if="!$v.inn.$error && $v.inn.required">
              <button size="sm" class="w-100 btn btn-success btn-sm" @click="doDisabledInput">Далее</button>
            </b-col>
            <b-col md="3" class="pt-2" v-else>
              <button size="sm" class="w-100 disabled btn btn-success btn-sm">Далее</button>
            </b-col>
          </b-row>
          <div v-else>
            <b-row class="beauty-input disabled-inn-input selct-block">
              <b-col>
                <div class="contact" :class="{ 'disabledInput' : !isInnActive }">
                  <div class="form-area">
                    <div class="group form-group">
                      <input v-model.trim.lazy="$v.inn.$model" disabled="disabled" type="text" class="form-control form-control-registration" autocomplete="on | off" required>
                      <span class="highlight"></span>
                      <span class="bar" ></span>
                      <label>Имя пользователя</label>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <div class="oragnization-select">
              <div class="beauty-input">
                <b-row>
                  <b-col md="12" class="faktura-select">
                    <v-select v-model="selected"  :options="options" label="title">
                      <template slot="option" slot-scope="option">
                        <div> Серия № : {{ option.name }}{{ option.shureName }}{{ option.patronymic }}</div>
                        <div> Ф.И.О. : {{ option.title }}</div>
                        <div> Организация : {{ option.someData }}</div>
                      </template>
                    </v-select>
                    <label>Выберите сертификат</label>
                    <span class="wrong-message" v-show="!selected">Выберите организация</span>
                  </b-col>
                </b-row>
              </div>
              <div v-show="selected" class="info-table">
                <b-table responsive :fields="fields" :items="options">
                  <template slot="action">
                    <router-link :to="{ name: 'forgot-password' }">
                      Изменить пароль
                    </router-link>
                  </template>
                </b-table>
                <div class="enter-to-system pt-3 pb-4">
                  <b-col class="text-center">
                    <router-link :to="{ name: 'sign-in'}">
                      <button class="btn btn-success">На главную</button>
                    </router-link>
                  </b-col>
                </div>
              </div>
            </div>
          </div>
          <div class="back-to-sign w-100 text-center pt-3 pb-4">Обратно во <router-link :to="{ name: 'sign-in' }">Вход</router-link></div>
        </div>
      </div>
    </div>
    <div class="register-line"></div>
  </div>
</template>

<script>
    import 'vue-select/dist/vue-select.css';
    import { required  } from "vuelidate/lib/validators"
    import { formatInn } from '../js/custom-validators'

    import {
        LockIcon
    } from 'vue-feather-icons'
    export default {
        name: 'forgot-username',
        components: {
            LockIcon,
        },
        data() {
            return {
                inn: null,
                isInnActive: true,
                selected: null,
                options: [
                    {
                        title: '5873623B2',
                        name: "Абдулазиз",
                        shureName: 'Ахмедов',
                        patronymic: 'Акмалочив',
                        someData: '8888886',
                        email: 'Ahmedov7718051@gmail.com'
                    },
                    {
                        title: '6573623B3',
                        name: "Адхам",
                        shureName: 'Турсунов',
                        patronymic: 'Комилвич',
                        someData: '33323214',
                        email: 'Ikramov7718051@gmail.com'
                    },
                    {
                        title: '517362CB9',
                        name: "Эркин",
                        shureName: 'Тулкнов',
                        patronymic: 'Мирамонович',
                        someData: '99897764',
                        email: 'Begmatov7718051@gmail.com'
                    },
                ],
                fields: [
                    { key: 'name', label: 'Имя' },
                    { key: 'shureName', label: 'Фамилия' },
                    { key: 'email', label: 'Логин' },
                    { key: 'action', label: 'Действие' }
                ]
            }
        },
        methods: {
            doDisabledInput() {
                this.isInnActive = !this.isInnActive
            }
        },
        validations: {
            inn: {
                required,
                formatInn
            }
        }
    }
</script>

<style lang="scss">

.enter-to-system {
  button {
    width: 320px;
  }
}

  .info-table {
    a {
      &:hover {
        text-decoration: none;
      }
    }
  }

</style>


