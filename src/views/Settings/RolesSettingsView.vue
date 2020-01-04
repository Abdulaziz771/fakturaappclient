<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Роли</span></b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row>
                <b-col md="12">
                  <div>
                    <b-table hover :fields="fields" :items="roles" class="roles-table">

                    </b-table>
                  </div>
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
    import RolesDocsData from "./../../TestData/RolesDocsData"

    export default {
        name: 'roles-settings-view',
        data () {
            return {
                roles: RolesDocsData,
                fields: [
                    { key: "post", label: "Название" },
                    { key: "userName", label: "Пользователи" }
                ]
            }
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', true)
        }
    }
</script>
<style lang="scss">
  //table
  .roles-table {
    thead {
      tr {
        th:nth-child(1) {
          width: 350px;
        }
      }
    }
  }

</style>
