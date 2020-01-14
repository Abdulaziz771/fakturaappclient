<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container fluid class="pb-4 personal-area">
          <div class="mb-4 h-panel shadow-sm">
            <div class="panel-heading">
              <b-row>
                <b-col><span>Шаблоны документов</span></b-col>
              </b-row>
            </div>
            <div class="panel-body">
              <b-row>
                <b-col md="12">
                  <div>
                    <b-table hover :fields="fields" :items="docsTemplate" class="doc-template-table">
                      <template slot="numbering" slot-scope="data">
                        <span class="cursor-pointer numbering">{{ data.item.numbering }}</span>
                      </template>
                      <template slot="action">
                        <DownloadIcon class="cursor-pointer"></DownloadIcon>
                      </template>
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
    import {
        DownloadIcon
    } from 'vue-feather-icons'
    import DocumentTemplate from "../../testData/DocumentTemplatesDocsData"

    export default {
        name: 'document-templates-settings-view',
        components: {
            DownloadIcon
        },
        data () {
            return {
                docsTemplate: DocumentTemplate,
                fields: [
                    { key: "docType", label: "Тип документа" },
                    { key: "templateType", label: "Тип шаблона" },
                    { key: "numbering", label: "Нумерация" },
                    { key: "action", label: "Действие" }
                ]
            }
        },
        created() {
            this.$store.commit('setWholeMenuInSidebar', true)
        }
    }
</script>
<style lang="scss">


  .doc-template-table {
    .numbering {
      &:hover {
        color: #2d9c00;
      }
    }
    thead {
      tr {
        th:nth-child(4) {
          width: 80px;
        }
      }
    }
    tbody {
      tr {
        td:nth-child(4) {
          text-align: center;
        }
      }
    }
  }
</style>
