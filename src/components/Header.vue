<template>
  <div id="header">
    <div class="header-nav row">
      <div class="col-3 col-sm-7 col-lg-5">
        <div class="content-search">
          <MenuIcon @click="offSecondSidebar" class="menu-icon-header text-muted cursor-pointer float-left mt-2"/>
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
      <div class="col-9 col-sm-5 col-lg-7 text-right">
        <b-navbar toggleable="lg" type="dark" class="pt-0 float-right">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" class="float-right" is-nav>
            <b-navbar-nav class="mr-2">
              <b-nav-item-dropdown right class="mr-4">
                <template slot="button-content"><span class="profile-name pr-2">Баланс: 6 000 сум</span></template>
                <b-dropdown-item href="#">
                  <router-link @click.native="offSecondSidebar" class="text-decoration-none router-link-drop"
                               :to="{name: 'finance-index'}">
                    История счета на пополнение
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <router-link @click.native="offSecondSidebar" class="text-decoration-none router-link-drop"
                               :to="{name: 'finance-deposit'}">
                    Пополнить баланс
                  </router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>
                <template slot="button-content"><span class="profile-name pr-2">Иванов Иван</span></template>
                <b-dropdown-item href="#">Организация: Teshavoy Corparation</b-dropdown-item>
                <b-dropdown-item href="#">Инн: 302563857</b-dropdown-item>
                <b-dropdown-item href="#">
                  <router-link @click.native="offSecondSidebar" class="text-decoration-none router-link-drop"
                               :to="{name: 'my-organization-list' }">
                    Список организаций
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-item href="#">Выход</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <div class="header-tools">
          <MessageSquareIcon class="cursor-pointer header-icons mr-2"/>
          <BellIcon class="cursor-pointer header-icons mr-2"/>
          <SettingsIcon class="cursor-pointer header-icons mr-2"/>
        </div>
      </div>
    </div>
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

    export default {
        name: 'headerComponent',
        data() {
            return {
                isActiveSecondSidebar: true
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
                this.isActiveSecondSidebar = !this.isActiveSecondSidebar;
                this.$emit('offSecondSidebar', this.isActiveSecondSidebar);
            },
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

