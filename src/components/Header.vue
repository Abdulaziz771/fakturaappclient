<template>
  <div id="header" v-if="$store.getters.isnavigatorsVisivle" :class="{ 'header-without-sidbar' : !$store.getters.iswholeMenuToggleButtonSidebar}">
    <div class="header-nav row" :class="{ 'box-shadow-header' : !$store.getters.iswholeMenuToggleButtonSidebar}">
      <div class="col-3 col-sm-8 col-lg-6">
        <div class="float-left header-logo">
          <router-link class="bg-none" :to="{name: 'home'}" >
            <img src="../assets/newlogo.png" v-if="!$store.getters.isToggleMenuButtonInHeaderOpen">
          </router-link>
        </div>
        <div class="content-search" v-show="$store.getters.iswholeMenuToggleButtonSidebar">
          <b-input-group class="float-left d-none d-sm-flex">
            <template v-slot:append>
              <b-input-group-text>
                <SearchIcon/>
              </b-input-group-text>
            </template>
            <b-form-input placeholder="Поиск"></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="col-9 col-sm-4 col-lg-6 text-right">
        <b-navbar toggleable="lg" type="dark" class="pt-0 float-right">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" class="float-right" is-nav>
            <b-navbar-nav class="mr-2">
              <b-nav-item-dropdown right class="mr-4">
                <template slot="button-content"><span class="profile-name pr-2">Баланс: 6 000 сум</span></template>
                <b-dropdown-item href="#">
                  <router-link class="text-decoration-none router-link-drop" :to="{name: 'finance-deposit'}">
                    <div @click="offSecondSidebar">
                      Пополнение баланса
                    </div>
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <router-link class="text-decoration-none router-link-drop" :to="{name: 'finance-information'}">
                    <div @click="offSecondSidebar">
                      Финансовая информация
                    </div>
                  </router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>
                <template slot="button-content"><span class="profile-name pr-2">Иванов Иван</span></template>
                <b-dropdown-item href="#">Организация: Teshavoy Corparation</b-dropdown-item>
                <b-dropdown-item href="#">Инн: 302563857</b-dropdown-item>
                <b-dropdown-item id="list" @click="openOrgList">
                  Список организаций
                </b-dropdown-item>
                <b-dropdown-item :to="{name: 'sign-in'}">Выход</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <div class="header-tools">
          <MessageSquareIcon class="cursor-pointer header-icons mr-2"/>
          <BellIcon class="cursor-pointer header-icons mr-2"/>
        </div>
      </div>
    </div>
    <b-modal  size="lg" ref="orgList" hide-footer title="Список организации">
      <div class="d-block">
        <b-row class="m-0">
          <b-col md="12" class="oragnization">
            <div class="ribbon blue">
              <span>Текущая</span>
            </div>
            <div class="oragnization-name">
              <span>Тестовая организация №4827295</span>
            </div>
            <div class="oragnization-director">
              <span>Директор: Абудлазиз Ахмедов</span>
            </div>
            <div class="oragnization-inn">
              <span>ИНН: 985764895</span>
            </div>
          </b-col>
          <b-col md="12" class="oragnization">
            <div class="oragnization-name">
              <span>Тестовая организация №4827295</span>
            </div>
            <div class="oragnization-director">
              <span>Директор: Абудлазиз Ахмедов</span>
            </div>
            <div class="oragnization-inn">
              <span>ИНН: 985764895</span>
            </div>
          </b-col>
        </b-row>
        <b-row class="footer-modal">
          <b-col md="12" class="text-right">
            <div class="closeModal"><p @click="openOrgList">Добавить новую организацию</p></div>
            <div class="canelMdoal"><p @click="openOrgList">Закрыть</p></div>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>
<script>
import {
    SearchIcon,
    MessageSquareIcon,
    BellIcon,
    SettingsIcon,
    MenuIcon
} from 'vue-feather-icons'

import eventBus from '../eventBus';
export default {
    name: 'headerComponent',
    data() {
        return {
            isSidebarOpen: true
        }
    },
    components: {
        SearchIcon,
        MessageSquareIcon,
        BellIcon,
        SettingsIcon,
        MenuIcon
    },
    methods: {
        offSecondSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            eventBus.$emit('offSecondSidebar');
        },
        openOrgList() {
            this.$refs['orgList'].toggle('#list')
        },
        onToggleSidebarByHeaderButton() {
            this.isSidebarOpen = !this.isSidebarOpen;
        }
    }
}
</script>

<style lang="scss" scoped>

  #header {
    width: 100%;
    position: fixed !important;
    z-index: 999;
    height: auto !important;
    top: 0;
    left: 74px;
    padding-right: 75px;

    & .profile-name {
      font-size: 17px;
    }

    .logout-icon {
      margin-top: 11px;

      & :hover {
        color: #6acb44;
      }
    }
  }
</style>
<style lang="scss">
  .box-shadow-header {
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);
  }

  #header {
    & .navbar-toggler {
      background-color: #67c93f;
      cursor: pointer;
      padding: 4px;
    }

    & .dropdown-menu {
      box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);

      &:before {
        content: " ";
        position: absolute;
        display: block;
        top: -7px;
        border: 8px solid #fff;
        -webkit-transform: translateX(-50%) rotate(135deg);
        transform: translateX(-50%) rotate(135deg);
        -webkit-box-shadow: -2px 2px 3px rgba(57, 73, 76, 0.1);
        box-shadow: -2px 2px 3px rgba(57, 73, 76, 0.1);
        left: auto;
        right: -5px;
      }
    }

    & .dropdown-toggle::after {
      color: #66c93e !important;
    }
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #404040 !important;
  }

  .oragnization {
    background: #f1f1f1;
    margin-bottom: 15px;
    padding: 15px 15px;
    cursor: pointer;
  }

  .blue {
    color: #017df7;
  }

  .header-without-sidbar {
    left: 0 !important;
    right: 0 !important;
    padding-right: 0 !important;
  }

  .ribbon {
    position: absolute;
    right: 8px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
    span {
      font-size: 10px;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
      line-height: 20px;
      transform: rotate(45deg);
      width: 100px;
      display: block;
      box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
      position: absolute;
      top: 19px;
      right: -21px;
      background-color: #1e90ff;
      &::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 100%;
        z-index: -1;
        border-left: 3px solid #79A70A;
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-top: 3px solid #79A70A;
        border-left-color: #1e5799;
        border-top-color: #1e5799;
      }
      &::after {
        content: '';
        position: absolute;
        right: 0%;
        top: 100%;
        z-index: -1;
        border-right: 3px solid #79A70A;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-top: 3px solid #79A70A;
        border-right-color: #1e5799;
        border-top-color: #1e5799;
      }
    }
  }

</style>

