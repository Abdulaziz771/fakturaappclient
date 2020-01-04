<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Персональные данные</span></b-col>
                <b-col class="text-right" v-if="!showEditingPersonalData">
                  <EditIcon @click="onClickEditPersonalData"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showEditingPersonalData">
                <b-col md="4">
                  <div class="avatar-upload">
                    <div class="avatar-edit">
                      <input type='file' id="imageUpload" ref="imageUpload" @change="onChangeUploadAvatar"
                             accept=".png, .jpg, .jpeg"/>
                      <label for="imageUpload">
                        <EditIcon/>
                      </label>
                      <label v-if="imgUrl" @click="onClickDeleteAvatar" class="deleteAvatar">
                        <DeleteIcon/>
                      </label>
                    </div>
                    <div class="avatar-preview shadow-lg">
                      <img v-if="imgUrl" class="imagePreview" :src="imgUrl" alt>
                      <img class="imagePreview" v-else src="../../assets/user.png" alt>
                    </div>
                  </div>
                  <div class="pt-4 pl-3">Допустимые форматы файла: jpeg, jpg, png, tif, tiff</div>
                </b-col>
                <b-col md="8">
                  <b-form-group
                    label-cols-lg="3"
                    label-cols-md="2"
                    label="Фамилия:"
                    label-align-sm="right"
                    label-for="last_name"
                  >
                    <b-form-input id="last_name" v-model="form.last_name"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-lg="3"
                    label-cols-md="2"
                    label="Имя:"
                    label-align-sm="right"
                    label-for="first_name"
                  >
                    <b-form-input id="first_name" v-model="form.first_name"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-lg="3"
                    label-cols-md="2"
                    label="Отчество:"
                    label-align-sm="right"
                    label-for="middle_name"
                  >
                    <b-form-input id="middle_name" v-model="form.middle_name"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-lg="3"
                    label-cols-md="2"
                    label="ИНН:"
                    label-align-sm="right"
                    label-for="inn"
                  >
                    <b-form-input id="inn" v-model="form.inn" disabled></b-form-input>
                  </b-form-group>

                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button class="btn-sm" variant="outline-success" @click="onClickCancelPersonalData">Сохранить</b-button>
                    <b-button class="mr-3 btn-sm" variant="outline-secondary" @click="onClickCancelPersonalData">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col md="4">
                  <div class="avatar-upload">
                    <div class="avatar-preview shadow-lg">
                      <img v-if="imgUrl" class="imagePreview" :src="imgUrl" alt>
                      <img class="imagePreview" v-else src="../../assets/user.png" alt>
                    </div>
                  </div>
                </b-col>
                <b-col md="8">
                  <b-list-group>
                    <b-list-group-item><b>Фамилия:</b> {{form.last_name}}</b-list-group-item>
                    <b-list-group-item><b>Имя:</b> {{form.first_name}}</b-list-group-item>
                    <b-list-group-item><b>Отчества:</b> {{form.middle_name}}</b-list-group-item>
                    <b-list-group-item><b>ИНН:</b> {{form.inn}}</b-list-group-item>
                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col class="text-left"><span>Права в организации</span></b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row>
                <b-col>
                  <b-list-group>
                    <b-list-group-item><b>Подразделение: </b> Руководства</b-list-group-item>
                    <b-list-group-item><b>Должность: </b> Директор</b-list-group-item>
                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Настройки уведомления</span></b-col>
                <b-col class="text-right" v-if="!showNotificationSettings">
                  <EditIcon @click="onClickNotificationSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row v-if="showNotificationSettings">
                <b-col>
                  <b-form-group
                    label-cols-sm="3"
                    label-cols-md="2"
                    label="Уведомления:"
                    label-align-sm="right"
                    label-for="notifications"
                    class="checkbox-notifications"
                  >
                    <b-form-checkbox class="pt-1"  clascons="pt-1" id="notifications" v-model="form.notifications"  value="Включено" unchecked-value="Выключено" switch></b-form-checkbox>
                  </b-form-group>


                  <b-input-group
                    label-cols-sm="1"
                    label="Адрес эл. почты:"
                    label-align-sm="right"
                    label-for="mail_address"
                    class="w-50 pb-3 input-group-email "
                  >
                    <b-form-input class="email-addres" id="mail_address" type="email" v-model.trim.lazy="$v.form.mail_address.$model"></b-form-input>
                    <b-input-group-append >
                      <b-button size="sm" class="phone-number" variant="secondary" v-if="$v.form.mail_address.$error" disabled >Подтвердить</b-button>
                      <b-button size="sm" class="phone-number" variant="secondary" @click="deleteAction" v-else>Подтвердить</b-button>
                    </b-input-group-append>
                  </b-input-group>
                  <span v-show="$v.form.mail_address.$error" class="text-danger">Введен неправельный формат</span>

                  <b-input-group
                    label-cols-sm="1"
                    label="Сотовый телефон:"
                    label-align-sm="right"
                    label-for="phone_number"
                    class="w-50 pt-3 pb-3 input-group-phone"
                  >
                    <b-form-input class="phone-number" id="phone_number" type="email" v-model.trim.lazy="$v.form.phone_number.$model"></b-form-input>
                    <b-input-group-append>
                      <b-button size="sm" class="phone-number" variant="secondary" v-if="$v.form.phone_number.$error" disabled >Подтвердить</b-button>
                      <b-button size="sm" class="phone-number" variant="secondary" v-else>Подтвердить</b-button>
                    </b-input-group-append>
                  </b-input-group>
                  <span v-show="$v.form.phone_number.$error" class="text-danger">Введен неправельный формат</span>

                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button size="sm" variant="outline-success" @click="onClickNotificationSettings(false)" >Сохранить</b-button>
                    <b-button  size="sm" variant="outline-secondary" class="mr-3" @click="onClickNotificationSettings(false)">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else>
                <b-col>
                  <b-list-group>
                    <b-list-group-item><b>Уведомления:</b> {{form.notifications}}</b-list-group-item>
                    <b-list-group-item><b>Адрес эл. почты:</b> {{form.mail_address}}</b-list-group-item>
                    <b-list-group-item><b>Сотовый телефон:</b> {{form.phone_number}}</b-list-group-item>
                  </b-list-group>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Смена пароля</span></b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-button size="sm" variant="outline-secondary" class="mr-2">Изсенить пароль</b-button>
              <b-button size="sm" variant="outline-success">Сохранить</b-button>
            </div>
          </div>
        </b-container>
      </div>
    </div>
    <b-modal size="md" ref="delet" hide-footer title="Удаление">
      <div class="d-block">
        <h6 class="pb-4">Вы действительно хотите подтвердить почты?</h6>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeDeletAction mr-2"><p @click="deleteAction">Подтвердить</p></div>
          <div class="canelDeletAction"><p @click="deleteAction">Отмена</p></div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
    import { email } from "vuelidate/lib/validators"
    import { phoneWithout998 } from '../../js/custom-validators'
    import {
    EditIcon,
    DeleteIcon,
  } from 'vue-feather-icons'

  export default {
    name: 'agreement-document-view',
    components: {
      EditIcon,
      DeleteIcon
    },
    data () {
      return {
        imgUrl: null,
        showEditingPersonalData: false,
          showNotificationSettings: false,
        form: {
          last_name: 'Иванов',
          first_name: 'Иван',
          middle_name: 'Иванович',
          inn: '457896123',
          notifications: 'Выключено',
          mail_address: 'Testorganization@gmail.com',
          phone_number: '998998342345'
        }
      }
    },
    methods: {
      onChangeUploadAvatar () {
        const file = this.$refs.imageUpload.files[0];
        this.imgUrl = URL.createObjectURL(file)
      },
      onClickDeleteAvatar () {
        this.imgUrl = null
      },
      onClickEditPersonalData () {
        this.showEditingPersonalData = true
      },
      onClickCancelPersonalData () {
        this.showEditingPersonalData = false
      },
      onClickNotificationSettings(value) {
          this.showNotificationSettings = value
      },
      deleteAction() {
          this.$refs['delet'].toggle('#delet-btn')
      }
    },
    validations: {
        form: {
            mail_address: {
                email
            },
            phone_number: {
                phoneWithout998
            }
        }
    },
    created() {
        this.$store.commit('setWholeMenuInSidebar', true)
    }
  }
</script>
<style lang="scss">

  .avatar-upload {
    position: relative;
    max-width: 205px;
    margin: 0 auto;

    .avatar-edit {
      position: absolute;
      right: 40px;
      z-index: 1;
      top: 20px;

      input {
        display: none;

        + label {
          cursor: pointer;

          & svg {
            color: #8e97b0;

            &:hover {
              color: #2b2d31;
            }
          }
        }
      }

      & .deleteAvatar {
        cursor: pointer;
        position: absolute;
        z-index: -1;
        top: 40px;
        left: 10px;
        color: #8e97b0;

        &:hover {
          color: #2b2d31;
        }
      }
    }

    .avatar-preview {
      width: 153px;
      height: 153px;
      position: relative;
      border-radius: 100%;

      & .imagePreview {
        width: 153px;
        height: 153px;
        border-radius: 50%;
      }

      > div {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  .checkbox-notifications {
    width: 600px;
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

  .email-addres, .phone-number {
    font-size: 13px;
    padding: 3px 7px;
  }
</style>
