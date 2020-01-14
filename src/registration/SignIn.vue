<template>
  <div class="registration-page">
    <div class="registr-logo">
      <img src="./../assets/newlogo-white.png" alt="">
    </div>
    <form @submit.prevent="enterToSystem">
      <div class="register-block">
      <h1>Войти в систему</h1>
      <div class="input-block pt-5">
        <div class="beauty-input">
            <div class="contact">
              <div class="form-area">
                <div class="group form-group">
                  <input type="text" v-model="username" @blur="$v.username.$touch()" :class="{ 'is-invalid': $v.username.$error }" class="form-control form-control-registration" autocomplete="on | off" required>
                  <span class="highlight"></span>
                  <span class="bar" :class="{ 'is-invalid': $v.username.$error }" ></span>
                  <label :class="{ 'is-invalid': $v.username.$error }">Email или Номер мобильного телефона</label>
                  <span class="wrong-message" v-show="$v.username.$error">Введен неправильный формат</span>
                </div>
              </div>
            </div>
            <div class="contact">
              <div class="form-area">
                <div class="group mb-2 form-group">
                  <input type="password" v-model="code" @blur="$v.code.$touch()" :class="{ 'is-invalid': $v.code.$error }" class="form-control form-control-registration" required>
                  <span class="highlight"></span>
                  <span class="bar" :class="{ 'is-invalid': $v.code.$error }"></span>
                  <label>Пароль</label>
                  <span class="wrong-message" v-show="$v.code.$error">Пароли не совподают</span>
                </div>
              </div>
            </div>
        </div>
        <div class="checkbox-password-lost">
          <b-row>
            <b-col cols="4">
              <div class="register-checkbox">
                <b-form-checkbox>Запомнить</b-form-checkbox>
              </div>
            </b-col>
            <b-col cols="8">
              <div class="forgot-password">
                <router-link :to="{ name: 'forgot-password' }">
                  <LockIcon/>
                  <span>Забыли пароль?</span>
                </router-link>
              </div>
              <div class="forgot-password">
                <router-link :to="{ name: 'forgot-username' }">
                  <LockIcon/>
                  <span>Забыли имя пользователя? </span>
                </router-link>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="registr-button">
          <router-link v-if="!$v.username.$error && !$v.code.$error && $v.code.required && $v.username.required" :to="{ name: 'home'}">
              <button class="btn btn-success w-100" type="submit">Войти</button>
          </router-link>
          <button v-else class="btn btn-success w-100 disabled" >Войти</button>
        </div>
        <div class="have-account text-center">
          <div class="text pt-4">Вы еще не зарегистрированы? </div>
          <div class="text-registr pt-2 pb-5">
            <router-link :to="{ name: 'registration' }">Зарегистрироваться</router-link>
          </div>
        </div>
      </div>
    </div>
    </form>
    <div class="register-line">
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import { required } from "vuelidate/lib/validators"
    import { addresAndPhone  } from '../js/custom-validators';

    import {
        LockIcon
    } from 'vue-feather-icons'
    export default {
        name: 'sign-in',
        components: {
            LockIcon,
        },
        data() {
            return {
                username: null,
                code: null,
                info: null,
                documents: [],
                finel: null,
            }
        },
        validations: {
            username: {
                addresAndPhone,
                required
            },
            code: {
                required
            }
        }
    }
</script>

<style lang="scss">
  .forgot-password {
    font-size: 11px;
    a {
      &:hover {
        color: black;
        text-decoration: none;
      }
    }
  }
</style>

