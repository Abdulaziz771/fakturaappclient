<template>
  <div class="registration-page register">
    <div class="registr-logo">
      <img src="./../assets/newlogo-white.png" alt="">
    </div>
    <div class="register-block">
      <h1>Восстановление пароля</h1>
      <div class="input-block pt-5">
        <div class="beauty-input">
          <b-row v-if="isUseranemInputActive">
            <b-col md="9">
              <div class="contact">
                <div class="form-area">
                  <div class="group form-group">
                    <input v-model="username" @blur="$v.username.$touch()" :class="{ 'is-invalid': $v.username.$error }" type="text" class="form-control form-control-registration" autocomplete="on | off" required>
                    <span class="highlight"></span>
                    <span class="bar" :class="{ 'is-invalid': $v.username.$error }"></span>
                    <label :class="{ 'is-invalid': $v.username.$error }">Email или Номер мобильного телефона</label>
                    <span class="wrong-message" v-show="$v.username.$error">Введен неправильный формат</span>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col md="3" class="pt-2" v-if="!$v.username.$error && $v.username.required">
              <button size="sm" class="w-100 btn btn-success btn-sm" @click="changeInputs">Далее</button>
            </b-col>
            <b-col md="3" class="pt-2" v-else>
              <button size="sm" class="w-100 disabled btn btn-success btn-sm">Далее</button>
            </b-col>
          </b-row>
          <b-row v-else class="beauty-input disabled-username-input">
            <b-col md="12">
              <div class="contact" :class="{ 'disabledInput' : !isUseranemInputActive }">
                <div class="form-area">
                  <div class="group form-group">
                    <input v-model.trim.lazy="$v.username.$model" disabled="disabled" type="text" class="form-control form-control-registration" autocomplete="on | off" required>
                    <span class="highlight"></span>
                    <span class="bar" ></span>
                    <label>Имя пользователя</label>
                  </div>
                </div>
              </div>
            </b-col>
            <div class="activation-messsage text-center w-100">
              <h6>Мы отправили ваш новый пароль на вышеуказанный адрес</h6>
            </div>
          </b-row>
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
    import { addresAndPhone } from '../js/custom-validators'

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
                username: null,
                isUseranemInputActive: true
            }
        },
        methods: {
            changeInputs() {
                this.isUseranemInputActive = !this.isUseranemInputActive
            }
        },
        validations: {
            username: {
                required,
                addresAndPhone
            }
        }
    }
</script>

<style lang="scss">
</style>


