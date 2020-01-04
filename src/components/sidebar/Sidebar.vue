<template>
    <div id="sidebar" v-if="$store.getters.iswholeMenuToggleButtonSidebar && $store.getters.isnavigatorsVisivle" >
    <div class="first-inside-sidebar">

      <div class="logo-sidebar">
        <MenuIcon @click="offSecondSidebarByHeader" class="menu-icon-header text-muted cursor-pointer"/>
      </div>

      <div class="d-flex flex-column">

        <div @click="offSecondSidebar(1)" class="text-center content-menus" :class="activeDocumentSidebar">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <FileIcon class="menu-icon"/>
            </div>
          </div>
        </div>

        <div @click="offSecondSidebar(2)" class="text-center content-menus" :class="activeCuonterPartiesSidebar">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <GridIcon class="menu-icon"/>
            </div>
          </div>
        </div>

        <div @click="offSecondSidebar(3)" class="text-center content-menus" :class="activeDocumentVerifySidebar">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <Edit3Icon class="menu-icon"/>
            </div>
          </div>
        </div>

        <div @click="offSecondSidebar(4)" class="text-center content-menus" :class="activeDocumentAgreeSidebar">
          <div class="d-flex justify-content-center" >
            <div class="align-self-center">
              <MessageCircleIcon class="menu-icon"/>
            </div>
          </div>
        </div>

        <div @click="offSecondSidebar(5)" class="text-center content-menus" :class="activeDocumentSettingsSidebar">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <SettingsIcon class="menu-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-show="this.$store.getters.isvalueSecondSidebar" v-cloak>
        <component :is="getSidebarname"></component>
      </div>
    </transition>
  </div>
</template>
<script>
    import DocumentSidebar from './DocumentSidebar'
    import CuonterPartiesSidebar from './CuonterPartiesSidebar'
    import DocumentVerifySidebar from './DocumentVerifySidebar'
    import DocumentAgreeSidebar from './DocumentAgreeSidebar'
    import DocumentSettingsSidebar from './DocumentSettingsSidebar'

    import eventBus from '../../eventBus';

    import {
    GridIcon,
    FileIcon,
    Edit3Icon,
    CreditCardIcon,
    MessageCircleIcon,
    SettingsIcon,
    MenuIcon

} from 'vue-feather-icons'

export default {
    name: 'sidebar-component',
    data() {
        return {
            saveVlueofMenu: 0
        }
    },
    components: {
        GridIcon,
        Edit3Icon,
        CreditCardIcon,
        FileIcon,
        MessageCircleIcon,
        SettingsIcon,
        MenuIcon,
        DocumentSidebar,
        CuonterPartiesSidebar,
        DocumentVerifySidebar,
        DocumentAgreeSidebar,
        DocumentSettingsSidebar
    },
    methods: {
         offSecondSidebar(value) {
             this.$store.commit('toggleSidebar');
             switch (value) {
                 case 1:
                     this.$store.commit('openCurrentSidebar', DocumentSidebar);
                     this.saveVlueofMenu =  value;
                     break;
                 case 2:
                     this.$store.commit('openCurrentSidebar', CuonterPartiesSidebar);
                     this.saveVlueofMenu =  value;
                     break;
                 case 3:
                     this.$store.commit('openCurrentSidebar', DocumentVerifySidebar);
                     this.saveVlueofMenu =  value;
                     break;
                 case 4:
                     this.$store.commit('openCurrentSidebar', DocumentAgreeSidebar);
                     this.saveVlueofMenu =  value;
                     break;
                 case 5:
                     this.$store.commit('openCurrentSidebar', DocumentSettingsSidebar);
                     this.saveVlueofMenu =  value;
                     break;
             }
         },
        offSecondSidebarByHeader() {
             if (this.saveVlueofMenu === 0) {
                 this.$store.commit('openCurrentSidebar', DocumentSidebar);
                 this.saveVlueofMenu = 1;
                 this.$store.commit('toggleSidebar');
             } else  {
                 this.$store.commit('toggleSidebar');
             }
        }
    },
    computed: {
        getSidebarname() {
            return this.$store.getters.currentValueSidebar
        },
        activeDocumentSidebar() {
            if (this.saveVlueofMenu == 1 )
            return "router-link-active"
        },
        activeCuonterPartiesSidebar() {
            if (this.saveVlueofMenu == 2)
            return "router-link-active"
        },
        activeDocumentVerifySidebar() {
            if (this.saveVlueofMenu == 3)
            return "router-link-active"
        },
        activeDocumentAgreeSidebar() {
            if (this.saveVlueofMenu == 4)
            return "router-link-active"
        },
        activeDocumentSettingsSidebar() {
            if (this.saveVlueofMenu == 5)
            return "router-link-active"
        }
    },
    created() {
    }
}
</script>
<style lang="scss" scoped>
  $brand-color: #66c93e;
  $default-border: 1px solid #e4e5e7;

  .closeAllSidebar {
    display: none;
  }

  #sidebar {
    z-index: 99;
    float: left;
    position: fixed;

    & .first-inside-sidebar {
      position: fixed;
      height: 100%;
      width: 75px;
      border-right: $default-border ;
      background: white;
      overflow-y: auto;
      text-transform: uppercase;
      z-index: 999;
      background: #34495e;

      & .menu-text {
        font-size: 10px;
      }

      & .content-menus {
        cursor: pointer;
        padding: 22px 0px;
        margin: 2px 0px;
        border-bottom: 1px solid rgba(248,249,250,.05);

        & .menu-icon {
          width: 24px;
          height: 24px;
          color: rgb(255, 255, 255);
        }

        &:hover {
          border-left: 2px solid #b2b2b2;
          background-color: transparent;
          text-decoration: none;

          & .menu-icon {
            color: white;
          }

          & .menu-text {
            color: #585757;
          }
        }
      }

      & .router-link-active {
        background: transparent;
        border-left: 2px solid rgb(255, 255, 255);

        & .menu-icon {
          color: white;
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
    height: 100%;
    width: 180px;left: 74px;
    background: white;
    font-size: 14px;
    overflow-y: auto;
    z-index: 999;
    background: white;
    box-shadow: 0 4px 20px 1px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.06);


    & .router-link-active {
      background-color: #f2f2f2;
    }

    .router-link-exact-active {
      background: #eee !important;
    }

    .list-group-item {
      background: transparent !important;;
    }

    a:hover {
      background: #eee;
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

  .fade-enter-active, .fade-leave-active {
    transition: .1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    transform: translateX(1000px);
    opacity: 0;
  }

</style>
