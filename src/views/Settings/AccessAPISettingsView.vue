<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 employee personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Настройки API</span></b-col>
                <b-col class="text-right" v-if="!showMatchingSettings">
                  <EditIcon @click="onMatchingSettings(true)"/>
                </b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row style="transition: 1s" v-if="showMatchingSettings">
                <b-col cols="12">
                  <div>
                    <b-row class="dataOfuser mb-3">
                      <b-col  md="12" xl="3">
                        <b-form-group
                          label-cols-sm="3"
                          label="ID клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input disabled size="sm" v-model="dataAPI[0].clientId"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col  md="12" xl="4">
                        <b-form-group
                          label-cols-sm="3"
                          label="Секрет клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="dataAPI[0].clientSecret" disabled size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="12" xl="3">
                        <b-form-group
                          label-cols-xl="4"
                          label-cols-sm="3"
                          label="Обратный URL:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="dataAPI[0].callbackURL" size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col offset-md="10" md="2" offset-xl="0" xl="2">
                        <b-button size="sm">Сгенерировать сейчас</b-button>
                      </b-col>
                    </b-row>
                    <b-row class="dataOfuser mb-3">
                      <b-col md="12" xl="3">
                        <b-form-group
                          label-cols-sm="3"
                          label="ID клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input disabled size="sm" v-model="dataAPI[1].clientId"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="12" xl="4">
                        <b-form-group
                          label-cols-sm="3"
                          label="Секрет клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="dataAPI[1].clientSecret" disabled size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="12" xl="3">
                        <b-form-group
                          label-cols-xl="4"
                          label-cols-sm="3"
                          label="Обратный URL:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="dataAPI[1].callbackURL" size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col offset-md="10" md="2" offset-xl="0" xl="2">
                        <b-button size="sm">Сгенерировать сейчас</b-button>
                      </b-col>
                    </b-row>
                    <b-row class="dataOfuser mb-3">
                      <b-col md="12" xl="3">
                        <b-form-group
                          label-cols-sm="3"
                          label="ID клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input disabled size="sm" v-model="dataAPI[2].clientId"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="12" xl="4">
                        <b-form-group
                          label-cols-sm="3"
                          label="Секрет клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="dataAPI[2].clientSecret" disabled size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="12" xl="3">
                        <b-form-group
                          label-cols-xl="4"
                          label-cols-md="3"
                          label="Обратный URL:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="dataAPI[2].callbackURL" size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col 	offset-md="10" md="2" offset-xl="0" xl="2">
                        <b-button size="sm">Сгенерировать сейчас</b-button>
                      </b-col>
                    </b-row>
                    <b-row class="mb-3">
                      <b-col offset-sm="10" sm="2" offset-md="10" md="2">
                        <b-button size="sm">Добавить</b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
                <b-col>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <b-button size="sm" variant="outline-success" @click="onMatchingSettings(false)">Сохранить</b-button>
                    <b-button  size="sm" variant="outline-secondary" class="mr-3" @click="onMatchingSettings(false)">Отмена
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <b-row v-else style="transition: 1s">
              <b-col>
                <b-list-group>

                  <b-list-group-item>
                    <b-row>
                      <b-col cols="12"><b>ID клиента:</b> {{ dataAPI[0].clientId }} </b-col>
                      <b-col cols="12"><b>Секрет клиента:</b> {{ dataAPI[0].clientSecret }}</b-col>
                      <b-col cols="12"><b>Обратный URL:</b> {{ dataAPI[0].callbackURL }} </b-col>
                    </b-row>
                  </b-list-group-item>

                  <b-list-group-item>
                    <b-row>
                      <b-col cols="12"><b>ID клиента:</b> {{ dataAPI[1].clientId }} </b-col>
                      <b-col cols="12"><b>Секрет клиента:</b> {{ dataAPI[1].clientSecret }}</b-col>
                      <b-col cols="12"><b>Обратный URL:</b> {{ dataAPI[1].callbackURL }} </b-col>
                    </b-row>
                  </b-list-group-item>

                  <b-list-group-item>
                    <b-row>
                      <b-col cols="12"><b>ID клиента:</b> {{ dataAPI[2].clientId }} </b-col>
                      <b-col cols="12"><b>Секрет клиента:</b> {{ dataAPI[2].clientSecret }}</b-col>
                      <b-col cols="12"><b>Обратный URL:</b> {{ dataAPI[2].callbackURL }} </b-col>
                    </b-row>
                  </b-list-group-item>
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
    import {
        EditIcon
    } from 'vue-feather-icons'
    export default {
        name: 'access-api-settings-view',
        components: {
            EditIcon
        },
        data () {
            return {
                showMatchingSettings: false,
                dataAPI: [
                    { clientId: "FinboxOnlineService", clientSecret: "nhnFzFbXjTM4zW4N304FK1w6rZqueYK9eoadbJXPNcOgQY2bF62YsVw1B7kP", callbackURL: "https://finbox.uz/callback" },
                    { clientId: "NewTestClient1", clientSecret: "apDrVENtMXLMAzIs1x6dYZckediouCtfwfYeSKIlmuxR4n3QuhQM", callbackURL: "https://noname.com/callback" },
                    { clientId: "AkhmedovService", clientSecret: "apDrVENtashdJHkjHKSJDAzIs1x6dYZckediouCtfwfYeSKIlmuxR4n3QuhQM", callbackURL: "https://PrimaWeb.uz/callback" }
                ]
            }
        },
        methods: {
            toggleModal() {
                this.$refs['edit'].toggle('#toggle-btn');
            },
            onMatchingSettings(value) {
                this.showMatchingSettings = value;
            }
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

</style>
