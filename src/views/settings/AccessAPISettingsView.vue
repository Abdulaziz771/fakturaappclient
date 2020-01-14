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
                    <b-row class="dataOfuser mb-3" v-for="api in apies">
                      <b-col  md="12" xl="3">
                        <b-form-group
                          label-cols-sm="3"
                          label="ID клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input disabled size="sm" v-model="api.clientId"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col  md="12" xl="4">
                        <b-form-group
                          label-cols-sm="3"
                          label="Секрет клиента:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="api.clientSecret" disabled size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="12" xl="3">
                        <b-form-group
                          label-cols-xl="4"
                          label-cols-sm="3"
                          label="Обратный URL:"
                          label-align-sm="right"
                        >
                          <b-form-input v-model="api.callbackURL" size="sm"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col offset-md="10" md="2" offset-xl="0" xl="2">
                        <b-button size="sm">Сгенерировать сейчас</b-button>
                      </b-col>
                    </b-row>
                    <b-row class="mb-3">
                      <b-col offset-sm="10" sm="2" offset-md="10" md="2">
                        <b-button size="sm" @click="toggleModal">Добавить</b-button>
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
                  <b-list-group-item v-for="api in apies">
                    <b-row>
                      <b-col cols="12"><b>ID клиента:</b> {{ api.clientId }} </b-col>
                      <b-col cols="12"><b>Секрет клиента:</b> {{ api.clientSecret }}</b-col>
                      <b-col cols="12"><b>Обратный URL:</b> {{ api.callbackURL }} </b-col>
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
    <b-modal  class="special-modal" size="lg" ref="chnage" hide-footer title="Добавить API">
      <div class="d-block">
        <b-row>
          <b-col cols="12">
            <b-form-group
              label-cols-sm="3"
              label="Client Id:"
              label-align-sm="right"
            >
              <b-form-input size="sm" v-model="clientId"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label-cols-sm="3"
              label="Callback URL:"
              label-align-sm="right"
            >
              <b-form-input size="sm" v-model="callBackUrl"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-row class="footer-modal">
        <b-col md="12" class="text-right">
          <div class="closeModal" v-if="false"><p>Сохранить изменение</p></div>
          <div class="closeModal" v-else @click="addRow"><p >Сохранить изменение</p></div>
          <div class="canelMdoal"><p @click="toggleModal">Закрыть</p></div>
        </b-col>
      </b-row>
    </b-modal>
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
                clientId: null,
                callBackUrl: null,
                apies: [
                    { clientId: "FinboxOnlineService", clientSecret: "nhnFzFbXjTM4zW4N304FK1w6rZqueYK9eoadbJXPNcOgQY2bF62YsVw1B7kP", callbackURL: "https://finbox.uz/callback" },
                    { clientId: "NewTestClient1", clientSecret: "apDrVENtMXLMAzIs1x6dYZckediouCtfwfYeSKIlmuxR4n3QuhQM", callbackURL: "https://noname.com/callback" },
                    { clientId: "AkhmedovService", clientSecret: "apDrVENtashdJHkjHKSJDAzIs1x6dYZckediouCtfwfYeSKIlmuxR4n3QuhQM", callbackURL: "https://PrimaWeb.uz/callback" }
                ]
            }
        },
        methods: {
            toggleModal() {
                this.$refs['chnage'].toggle('#toggle-btn');
            },
            onMatchingSettings(value) {
                this.showMatchingSettings = value;
            },
            addRow() {
                this.apies.push({
                    clientId: this.clientId,
                    clientSecret: 'nhnFzFbXjTM4zW4N304FK1w6rZqueYK9eoadbJXPNcOgQY2bF62YsVw1B7kP',
                    callbackURL: this.callBackUrl
                })
            }
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

</style>
