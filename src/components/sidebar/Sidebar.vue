<template>
  <div id="sidebar">

    <div class="first-inside-sidebar">
      <div class="logo-sidebar">
        <img src="../../assets/logo-faktura.png" >
      </div>
      <div class="d-flex flex-column">

        <router-link @click.native="openSidebar" :to="{name: 'document-home'}"
                     class=" text-center content-menus">
          <div class="d-flex justify-content-center" v-b-toggle.collapse-documents>
            <div class="align-self-center">
              <FileIcon class="menu-icon"/>
            </div>
          </div>

        </router-link>

        <router-link @click.native="closeSidebar" :to="{name: 'counter-parties'}"
                      class="text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <GridIcon class="menu-icon"/>
            </div>
          </div>
        </router-link>

        <router-link @click.native="closeSidebar" :to="{name: 'document-verify'}"
                     class=" text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <Edit3Icon class="menu-icon"/>
            </div>
          </div>
        </router-link>

        <router-link @click.native="openSidebar" :to="{name: 'agreement-document-view'}"
                     class=" text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <MessageCircleIcon class="menu-icon"/>
            </div>
          </div>
        </router-link>

        <div class=" text-center content-menus">
          <div class="d-flex justify-content-center" >
            <div class="align-self-center">
              <CreditCardIcon class="menu-icon"/>
            </div>
          </div>
        </div>

        <router-link @click.native="openSidebar" :to="{name: 'settings-personal-area'}"
                     class=" text-center content-menus">
          <div class="d-flex justify-content-center">
            <div class="align-self-center">
              <SettingsIcon class="menu-icon"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div v-show="!isOffSecondSidebar">
      <div class="second-inside-sidebar" v-cloak  v-if="activeSidebar">
        <component @offSecondSidebarMoblie="offSecondSidebarMoblie" :is="activeSidebar"></component>
      </div>
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
        SettingsIcon,

    } from 'vue-feather-icons'

    import SidebarMenuDocuments from '../sidebar/SidebarMenuDocuments'
    import SidebarMenuSettings from '../sidebar/SidebarMenuSettings'
    import SidebarMenuAgree from '../sidebar/SidebarMenuAgree'

    export default {
        name: 'sidebar-component',
        components: {
            GridIcon,
            Edit3Icon,
            CreditCardIcon,
            FileIcon,
            MessageCircleIcon,
            SettingsIcon,
        },
        props: ['isOffSecondSidebar'],
        data() {
            return {
                activeMenu: null,
                test: true
            }
        },
        methods: {
            openSidebar() {
                this.isOffSecondSidebar = false;
                this.$emit("openSidebar", false)
            },
            closeSidebar() {
                this.$emit("openSidebar", true)
            }
        },
        computed: {
            activeSidebar() {
                this.$Progress.start();
                if (this.$route.matched.length > 0) {
                    if (this.$route.matched[0].name === 'document') {
                        this.$emit('activeSecondSidebar', true);
                        this.$Progress.finish();
                        return SidebarMenuDocuments
                    } else if (this.$route.matched[0].name === 'settings-personal-area') {
                        this.$emit('activeSecondSidebar', true);
                        this.$Progress.finish();
                        return SidebarMenuSettings
                    } else if (this.$route.matched[0].name === 'agreement-document-view') {
                        this.$emit('activeSecondSidebar', true);
                        this.$Progress.finish();
                        return SidebarMenuAgree
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
    }
</script>
<style lang="scss" scoped>
  $brand-color: #66c93e;
  $default-border: 1px solid #e4e5e7;

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
      z-index: 99999;
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
    width: 180px;
    margin-left: 74px;
    background: white;
    font-size: 14px;
    overflow-y: auto;
    z-index: 9999;
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
</style>
