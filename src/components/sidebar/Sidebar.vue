<template>
  <div id="sidebar">
    <div class="first-inside-sidebar">
      <div class="d-flex flex-column">

        <div @click="onClickMenu(1)" :class="{active: activeMenu===1}"
             class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <FileIcon class="menu-icon"/>
              <div class="menu-text pt-2">Документы</div>
            </div>
          </div>
        </div>

        <div @click="onClickMenu(2)" :class="{active: activeMenu===2}"
             class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <GridIcon class="menu-icon"/>
              <div class="menu-text pt-2">Контрагенты</div>
            </div>
          </div>
        </div>

        <div class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <Edit3Icon class="menu-icon"/>
              <div class="menu-text pt-2">Проверить подпись документа</div>
            </div>
          </div>
        </div>

        <div class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <MessageCircleIcon class="menu-icon"/>
              <div class="menu-text pt-2">Сообщения</div>
            </div>
          </div>
        </div>

        <div class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <CreditCardIcon class="menu-icon"/>
              <div class="menu-text pt-2">История КПК и POS транзакций</div>
            </div>
          </div>
        </div>

        <div @click="onClickMenu(6)" :class="{active: activeMenu===6}"
             class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <SettingsIcon class="menu-icon"/>
              <div class="menu-text pt-2">Настройки</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="second-inside-sidebar">
      <component :is="isSidebar"></component>
    </div>
  </div>
</template>
<script>
  import {
    GridIcon,
    FileIcon,
    Edit3Icon,
    CreditCardIcon,
    MessageCircleIcon,
    SettingsIcon
  } from 'vue-feather-icons'

  import SidebarMenuDocuments from '../sidebar/SidebarMenuDocuments'
  import SidebarMenuCounterparties from '../sidebar/SidebarMenuCounterparties'
  import SidebarMenuSettings from '../sidebar/SidebarMenuSettings'

  export default {
    name: 'sidebar-component',
    components: {
      GridIcon,
      Edit3Icon,
      CreditCardIcon,
      FileIcon,
      MessageCircleIcon,
      SidebarMenuDocuments,
      SidebarMenuCounterparties,
      SidebarMenuSettings,
      SettingsIcon
    },
    data () {
      return {
        activeMenu: null
      }
    },
    computed: {
      isSidebar () {
        if (this.activeMenu === 1) {
          return 'SidebarMenuDocuments'
        } else if (this.activeMenu === 2) {
          return 'SidebarMenuCounterparties'
        } else if (this.activeMenu === 6) {
          return 'SidebarMenuSettings'
        }
      }
    },
    methods: {
      onClickMenu (value) {
        this.$Progress.start()
        this.activeMenu = value
        this.$Progress.finish()
      }
    },
    mounted () {
      this.activeMenu = 1
    }
  }
</script>
<style lang="scss" scoped>
  $brand-color: #66c93e;
  $default-border: 1px solid #e4e5e7;

  #sidebar {
    z-index: 99;
    border-right: $default-border;
    float: left;
    position: fixed;

    & .first-inside-sidebar {
      position: fixed;
      height: calc(100% - 67px);
      width: 96px;
      background: #f3f3f3;
      border-right: $default-border;
      top: 67px;
      overflow-y: auto;

      & .menu-text {
        font-size: 12px;
      }

      & .content-menus {
        cursor: pointer;

        & .menu-icon {
          width: 30px;
          height: 30px;
        }

        &:hover {
          background-color: white;

          & .menu-icon {
            color: $brand-color;
          }
        }
      }

      & .active {
        background-color: white;
        border-bottom: $default-border;

        & .menu-icon {
          color: $brand-color;
        }
      }
    }
  }

  #sidebar .second-inside-sidebar {
    position: fixed;
    height: calc(100% - 67px);
    width: 180px;
    margin-left: 96px;
    border-right: $default-border;
    top: 67px;
    background: white;
    font-size: 14px;
    overflow-y: auto;
  }

  .new-doc-menu {
    cursor: pointer;
  }
</style>
<style>
  .second-inside-sidebar .list-group-item {
    border: none;
  }

  #sidebar a {
    color: black;
  }
</style>
