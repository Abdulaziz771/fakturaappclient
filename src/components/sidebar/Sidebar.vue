<template>
  <div id="sidebar">
    <div class="first-inside-sidebar">
      <div class="d-flex flex-column">

        <router-link v-on:click.native="secondSidebar = false" :to="{name: 'document-home'}"
                     class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center" v-b-toggle.collapse-documents >
            <div class="align-self-center">
              <FileIcon class="menu-icon"/>
              <div class="menu-text pt-2">Документы</div>
            </div>
          </div>

        </router-link>

        <router-link v-on:click.native="secondSidebar = false" :to="{name: 'counter-parties'}"
                     class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <GridIcon class="menu-icon"/>
              <div class="menu-text pt-2">Контрагенты</div>
            </div>
          </div>
        </router-link>

        <router-link v-on:click.native="secondSidebar = false" :to="{name: 'document-verify'}"
                     class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <Edit3Icon class="menu-icon"/>
              <div class="menu-text pt-2">Проверить подпись документа</div>
            </div>
          </div>
        </router-link>

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

        <router-link v-on:click.native="secondSidebar = false" :to="{name: 'settings-personal-area'}"
                     class="pb-4 pt-4 pl-2 pr-2 text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <SettingsIcon class="menu-icon"/>
              <div class="menu-text pt-2">Настройки</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="second-inside-sidebar" :class="{ 'd-none d-md-block': secondSidebar }" v-if="activeSidebar">
        <component @changeShow="viewSeconSidebar" :is="activeSidebar"></component>
      </div>
    </transition>
  </div>
</template>
<script>
  import {
    GridIcon,
    FileIcon,
    Edit3Icon,
    CreditCardIcon,
    MessageCircleIcon,
    SettingsIcon,
      ChevronLeftIcon

  } from 'vue-feather-icons'

  import SidebarMenuDocuments from '../sidebar/SidebarMenuDocuments'
  import SidebarMenuCounterparties from '../sidebar/SidebarMenuCounterparties'
  import SidebarMenuSettings from '../sidebar/SidebarMenuSettings'
  import SidebarMenuVerify from '../sidebar/SidebarMenuVerify'

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
      SettingsIcon,
      SidebarMenuVerify,
        ChevronLeftIcon
    },
    data () {
      return {
        activeMenu: null,
          secondSidebar: true
      }
    },
    computed: {
      activeSidebar () {
        this.$Progress.start();
        if (this.$route.matched.length > 0) {
          if (this.$route.matched[0].name === 'document') {
            this.$emit('activeSecondSidebar', true);
            this.$Progress.finish();
            return SidebarMenuDocuments
          } else if (this.$route.matched[0].name === 'document-verify') {
            this.$emit('activeSecondSidebar', true);
            this.$Progress.finish();
            return SidebarMenuVerify
          } else if (this.$route.matched[0].name === 'settings-personal-area') {
            this.$emit('activeSecondSidebar', true);
            this.$Progress.finish();
            return SidebarMenuSettings
          } else {
            this.$emit('activeSecondSidebar', false);
            this.$Progress.finish();
            return null
          }
        } else {
          this.$emit('activeSecondSidebar', false);
          this.$Progress.finish();
          return null
        }
      }
    },
      methods: {
          viewSeconSidebar(value) {
              this.secondSidebar = value
          }
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
    top: 67px;

    & .first-inside-sidebar {
      position: fixed;
      height: calc(100% - 67px);
      width: 110px;
      background: white;
      border-right: $default-border;
      overflow-y: auto;
      text-transform: uppercase;
      z-index: 999;

      & .menu-text {
        font-size: 12px;
      }

      & .content-menus {
        cursor: pointer;

        & .menu-icon {
          width: 30px;
          height: 30px;
          color: #a2a2a2;
        }
        &:hover {
          background-color: #edf0f5;
          text-decoration: none;

          & .menu-icon {
            color: #585757;
          }
          & .menu-text {
            color: #585757;
          }
        }
      }

      & .router-link-active {
        background-color: #edf0f5;

        & .menu-icon {
          color: #585757;
        }
        & .menu-text {
          color: #585757;
          font-weight: 500;
        }
      }
    }
  }

  #sidebar .second-inside-sidebar {
    position: fixed;
    height: calc(100% - 67px);
    width: 180px;
    margin-left: 110px;
    border-right: $default-border;
    background: white;
    font-size: 14px;
    overflow-y: auto;

    & .router-link-active {
      background-color: #f2f2f2;
    }
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
