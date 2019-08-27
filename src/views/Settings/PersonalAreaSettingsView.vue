<template>
  <div class="content">
    <div class="content-header">
      <b-container fluid>
        <h5 class="text-center">Личный кабинет</h5>
        <hr class="m-0">
      </b-container>
    </div>
    <div class="content-body">
      <b-container fluid>
        <div class="h-panel shadow">
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
                  label-cols-sm="3"
                  label="Фамилия:"
                  label-align-sm="right"
                  label-for="last_name"
                >
                  <b-form-input id="last_name" v-model="form.last_name"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Имя:"
                  label-align-sm="right"
                  label-for="first_name"
                >
                  <b-form-input id="first_name" v-model="form.middle_name"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Отчество:"
                  label-align-sm="right"
                  label-for="middle_name"
                >
                  <b-form-input id="middle_name" v-model="form.middle_name"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="ИНН:"
                  label-align-sm="right"
                  label-for="inn"
                >
                  <b-form-input id="inn" v-model="form.inn"></b-form-input>
                </b-form-group>

                <div class="mt-3 d-flex flex-row-reverse">
                  <b-button class="default-success-button">Сохранить</b-button>
                  <b-button class="btn lightgray-button btn-sm mr-3" @click="onClickCancelPersonalData">Отмена
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
      </b-container>
    </div>
  </div>
</template>
<script>
  import {
    EditIcon,
    DeleteIcon,
  } from 'vue-feather-icons'

  export default {
    name: 'personal-info-settings-view',
    components: {
      EditIcon,
      DeleteIcon
    },
    data () {
      return {
        imgUrl: null,
        showEditingPersonalData: false,
        form: {
          last_name: 'Иванов',
          first_name: 'Иван',
          middle_name: 'Иванович',
          inn: '457896123',
        }
      }
    },
    methods: {
      onChangeUploadAvatar () {
        const file = this.$refs.imageUpload.files[0]
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
      }
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
</style>
