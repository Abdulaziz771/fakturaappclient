<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand>
        <router-link :to="{name: 'home'}">
          <img alt="Header Logo" class="logo" src="../assets/newlogo.png">
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-2">
          <b-nav-item-dropdown right class="mr-4">
            <template slot="button-content"><span class="profile-name pr-2">Баланс : 5 000 сум</span></template>
            <b-dropdown-item href="#">Финансовая информация</b-dropdown-item>
            <b-dropdown-item href="#">Пополнить баланс</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template slot="button-content"><span class="profile-name pr-2">Иванов Иван</span></template>
            <b-dropdown-item href="#">Организация: Teshavoy Corparation</b-dropdown-item>
            <b-dropdown-item href="#">Инн: 302563857</b-dropdown-item>
            <b-dropdown-item href="#">Список организаций</b-dropdown-item>
            <b-dropdown-item href="#">Выход</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import {
    LogOutIcon
  } from 'vue-feather-icons'

  export default {
    name: 'headerComponent',
    components: {
      LogOutIcon
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
    background-color: white;
    border-bottom: 1px solid #e4e5e7;

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
  #header {
    & .navbar {
      background-color: white !important;
    }

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

</style>

