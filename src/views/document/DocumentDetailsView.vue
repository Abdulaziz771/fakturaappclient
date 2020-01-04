  <template>
  <div class="content title-page">
    <div class="content-body">
      <div class="content-header border-bottom-tool">
          <div class="pl-3 d-sm-flex action-list d-none">
            <div class="tool-actions pt-3 cursor-pointer hover-effect-active">
              <Edit2Icon v-b-tooltip.hover title="Удалить" /><span>Подписать</span>
            </div>
            <div class="tool-actions pt-3 cursor-pointer hover-effect-active">
              <XIcon v-b-tooltip.hover title="Подписать"/><span>Удалить</span>
            </div>
            <div >
              <b-dropdown size="sm" class="agreement-dropdwon" text="Согласование">
                <b-dropdown-item href="#">Отправить на согласование</b-dropdown-item>
                <b-dropdown-item href="#">Отправить на подписание</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
      </div>
      <div class="table-body">
        <div class="detils-title pl-3">
          <h5 class="">Договор</h5>
        </div>
        <b-row>
          <b-col  class="doc-iframe pr-0" lg="7">
            <div class="document-content" style="height: 100%;">
              <embed style="border: 0;padding-bottom: 20px;" type="application/pdf"  allowfullscreen src="http://www.pdf995.com/samples/pdf.pdf#page=1&view=fitH&toolbar=0&scrollbar=0" width="100%" height="100%"/>
            </div>
          </b-col>
          <b-col class="pl-0" lg="5">
            <b-container fluid>
              <div class="describe-doc p-0  ">
                <h6 class="in-block-title">Описание</h6>
                <div class="pb-2">
                  <b-row>
                    <b-col class="first-desc"  md="4">
                      <ShareIcon></ShareIcon>
                      <span>Отправитель:</span>
                    </b-col>
                    <b-col class="second-desc" md="8">
                      <span id="toggle-btn" @click="modalOrg" class="cursor-pointer">"TEXNO-SOFT" OOO</span>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="first-desc" md="4">
                      <DownloadIcon></DownloadIcon>
                      <span>Получатель:</span>
                    </b-col>
                    <b-col class="second-desc" md="8">
                      <span id="toggle-btn" @click="modalOrg" class="cursor-pointer">302563857 Corporation</span>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="first-desc" md="4">
                      <UserIcon></UserIcon>
                      <span>Статус:</span>
                    </b-col>
                    <b-col class="second-desc" md="8">
                      <span class="badge badge-danger">Требуется подпись</span>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="first-desc" md="4">
                      <FileIcon></FileIcon>
                      <span>Документ:</span>
                    </b-col>
                    <b-col class="second-desc" md="8">
                      <span class="file-download"> 2mya8ybzlrsj3jkgxone.pdf <b> (17 KB)</b></span>
                    </b-col>
                  </b-row>
                </div>
              </div>
              <div class="attached-docs mt-4 p-0">
                <h6 class="in-block-title">Прикрепленные</h6>
                <div class="pt-1 pl-3 pr-3 pb-1" role="tablist">
                  <div class="upload-doc-attached text-center">
                    <label id="loadAtted" @click="modalAtted">
                      <div class="cursor-pointer">
                        <DownloadCloudIcon class="upload-icon"></DownloadCloudIcon>
                      </div>
                      <div class="cursor-pointer">
                        <span>Загрузить с компьютера или перетащите его сюда для отапавки контрагенту</span>
                      </div>
                    </label>
                  </div>
                  <b-table class="attached-table" hover :fields="fields" :items="files">                                                       >
                    <template slot="fileName" slot-scope="data">
                      <b>{{ data.item.fileName }}</b><br>
                      <small><ClockIcon class="clockIcon"></ClockIcon>Создан: {{ data.item.createdDateTime }}</small>
                    </template>
                    <template slot="type" slot-scope="data">
                      {{ data.item.type }}
                    </template>
                    <template class="text-center" style="width: 79px;" slot="action">
                      <img src="../../assets/garbage.png" class="cursor-pointer gabarage-icon">
                    </template>
                  </b-table>
                </div>
              </div>
              <div class="document-history mt-4 mb-4 p-0">
                <h6 class="in-block-title">История</h6>
                <ul class="timeline pl-4">
                  <li>
                    <a target="_blank" class="text-info">Marketing (ИНН: 517782515)</a>
                    <b class="pl-2 pr-2">Создан</b>
                    <div class="mt-1 text-secondary">Сотрудник, Muser Mtest - <span
                      class="text-success">21/08/2019 19:24</span></div>
                  </li>
                  <li>
                    <a href="#" class="text-info">Физическое (ИНН: 517782515)</a>
                    <b class="pl-2 pr-2">Подписан</b>
                    <div class="mt-1 text-secondary">Сотрудник, Muser Mtest - <span
                      class="text-success">21/08/2019 19:24</span></div>
                  </li>
                  <li class="active">
                    <a target="_blank" class="text-info">302563857 Corporation (ИНН: 302563857)</a>
                    <b class="pl-2 pr-2">Отправлен контрагенту</b>
                    <div class="mt-1 text-secondary">Сотрудник, Muser Mtest - <span
                      class="text-success">21/08/2019 19:24</span></div>
                  </li>
                </ul>
              </div>
            </b-container>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal  size="lg" ref="my-modal" hide-footer title="TEXNO-SOFT OOO">
      <div class="d-block">
        <b-row>
          <b-col class="org-tit" md="3">Юридический адреc:</b-col>
          <b-col class="org-name" md="9">ГОРОД ТАШКЕНТ ШАЙХАНТАХУРСКИЙ РАЙОН Кamolon ko'chasi 3-pr. 3-Qizil Tamga tor ko'chasi, 26-uy.</b-col>
        </b-row>
        <b-row>
          <b-col class="org-tit" md="3">Реквизиты:</b-col>
          <b-col  class="org-name" md="9"></b-col>
        </b-row>
        <b-row>
          <b-col class="org-tit" md="3">Расчётный счёт:</b-col>
          <b-col class="org-name" md="9">20208000003999249001 .</b-col>
        </b-row>
        <b-row>
          <b-col class="org-tit" md="3">Банк:</b-col>
          <b-col class="org-name" md="9">	ТОШКЕНТ Ш., "ASIA ALLIANCE BANK" АТБ ШАЙХОНТОХУР.</b-col>
        </b-row>
        <b-row>
          <b-col class="org-tit" md="3">ИНН:</b-col>
          <b-col class="org-name" md="9">	202905528.</b-col>
        </b-row>
        <b-row>
          <b-col class="org-tit" md="3">Рег.код плательщика НДС:</b-col>
          <b-col class="org-name" md="9">ГОРОД ТАШКЕНТ ШАЙХАНТАХУРСКИЙ РАЙОН Кamolon ko'chasi 3-pr. 3-Qizil Tamga tor ko'chasi, 26-uy.</b-col>
        </b-row>
        <b-row>
          <b-col class="org-tit" md="3">Код по ОКОНХ:</b-col>
          <b-col class="org-name" md="9">ГОРОД ТАШКЕНТ ШАЙХАНТАХУРСКИЙ РАЙОН Кamolon ko'chasi 3-pr. 3-Qizil Tamga tor ko'chasi, 26-uy.</b-col>
        </b-row>
        <b-row>
          <b-col class="org-tit" md="3">Код по ОКЭД:</b-col>
          <b-col class="org-name" md="9">	62010</b-col>
        </b-row>
        <b-row>
          <b-col  class="org-tit" md="3">МФО:</b-col>
          <b-col  class="org-name" md="9">01057</b-col>
        </b-row>
        <b-row class="footer-modal">
          <b-col md="12" class="text-right">
            <div class="canelMdoal"><p @click="modalOrg">Закрыть</p></div>
          </b-col>
        </b-row>
      </div>
    </b-modal>
    <b-modal  size="lg" ref="open-attached" hide-footer title="Прикрепление">
      <div class="d-block download-modal">
        <b-row>
          <b-col md="6">
            <b-input-group>
            <b-input-group-prepend>
              <b-button size="sm">Выбрать</b-button>
            </b-input-group-prepend>
            <b-form-input disabled type="text"></b-form-input>
            </b-input-group>
          </b-col>
          <b-col md="6">
            <b-input-group>
              <b-input-group-prepend>
                <b-button size="sm">Загрузить</b-button>
              </b-input-group-prepend>
              <b-form-input list="my-list-id"></b-form-input>
              <datalist id="my-list-id">
                <option>Manual Option</option>
              </datalist>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row class="table-attached">
          <b-table class="table-attached" hover :fields="fields" :items="files">
            <template  slot="HEAD_selected" slot-scope="data">
              <b-form-checkbox />
            </template>
            <template slot="selected" slot-scope="data">
              <b-form-checkbox />
            </template>
            <template slot="fileName" slot-scope="data">
              <b>{{ data.item.fileName }}</b><br>
              <small><ClockIcon class="clockIcon"></ClockIcon>Создан: {{ data.item.createdDateTime }}</small>
            </template>
            <template slot="type" slot-scope="data">
              {{ data.item.type }}
            </template>
            <template class="text-center" style="width: 79px;" slot="action">
              <DownloadCloudIcon class="DownloadCloudIcon mr-2 cursor-pointer"></DownloadCloudIcon>
              <TrashIcon class="TrashIcon cursor-pointer"></TrashIcon>
            </template>
          </b-table>
        </b-row>
        <b-row class="footer-modal">
          <b-col md="12" class="text-right">
            <div class="closeModal"><p @click="modalAtted">Закрепить</p></div>
            <div class="canelMdoal"><p @click="modalAtted">Отмена</p></div>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import AttachedDocsData from "../../TestData/AttachedDocsData"
  import {
    Edit2Icon,
    XIcon,
    AwardIcon,
    DownloadCloudIcon,
    ClockIcon,
    UserIcon,
    DownloadIcon,
    ShareIcon,
    FileIcon,
    TrashIcon

  } from 'vue-feather-icons'

  export default {
    name: 'document-details-view',
    components: {
      XIcon,
      Edit2Icon,
      AwardIcon,
      DownloadCloudIcon,
      ClockIcon,
      UserIcon,
      DownloadIcon,
      ShareIcon,
      FileIcon,
      TrashIcon
    },
    data() {
        return {
            files: AttachedDocsData,
            fields: [
                { key: 'selected', label: '' },
                { key: 'fileName', label: 'Наименование файла' },
                { key: 'type', label: 'Тип' },
                { key: 'action', label: 'Действие' },
            ],
        }
    },
    methods: {
        modalOrg() {
            this.$refs['my-modal'].toggle('#toggle-btn')
        },
        modalAtted() {
            this.$refs['open-attached'].toggle('#loadAtted')
        }
    },
      created() {
          this.$store.commit('setWholeMenuInSidebar', true)
      }
  }
</script>
<style scoped lang="scss">

  .upload-doc-attached {
    border: 1px dashed #cecccc;
    padding: 20px 120px 20px 120px;
    #upload-file {
      display: none;
    }
  }

  table td:last-child {
    width: 75px;
  }
  .clockIcon {
    width: 9px;
    margin-right: 5px;
  }

  .upload-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  .gabarage-icon {
    width: 20px;
    margin-left: 5px;
  }
</style>
<style lang="scss">

  .document-history {
    width: 100%;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);
    padding: 15px;
  }

  .document-content {
    width: 100%;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    padding: 0px 10px 10px 85px;
  }

  ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 11px;
    width: 2px;
    height: 91%;
  }

  ul.timeline > li {
    border: 1px solid #e4e5e7;
    margin: 10px 0;
    padding: 10px;
  }

  ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #989898;
    left: 7px;
    width: 9px;
    height: 8px;
    z-index: 400;
  }

  ul.timeline > li.active:before {
    content: ' ';
    background: #66c93e;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #66c93e;
    left: 7px;
    width: 9px;
    height: 8px;
    z-index: 400;
  }

  //dropdown styles
  .action-list {
    .dropdown-toggle {
      background: transparent;
      color: #404040;
      border: none;
      padding: 15px 12px;
      padding-top: 1rem !important;
    }

    .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
      color:#404040 !important ;
    }

    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
      /*box-shadow:d-none;*/
    }

    .btn-sm, .btn-group-sm > .btn {
      border-radius: 0;
    }

    .dropdown-toggle:hover {
      background: rgba(0, 0, 0, 0.05);
      color: #404040;
    }

    .dropdown-toggle:active {
      background: rgba(0, 0, 0, 0.05);
      color: #404040;
    }

    .dropdown-toggle:active {
      background: rgba(0, 0, 0, 0.05) !important;
      color: #404040;
    }

    .btn-secondary:not(:disabled):not(.disabled):active {
      background: rgba(0, 0, 0, 0.05) !important;
      border: none;
    }

    .dropdown-toggle:focus {
      border: none !important;
    }

    .btn:focus {
      border: none !important;
    }

    .show > .btn-secondary.dropdown-toggle {
      color: #404040 !important;
      background: rgba(0, 0, 0, 0.05) !important;
      border: none !important;
    }

    .btn-secondary:focus, .btn-secondary.focus {
      box-shadow: none;
    }

    .btn:focus, .btn.focus {
      box-shadow: none;
    }
  }

  //description
  .first-desc {
    text-align: left;
    margin: 10px 0;
    font-weight: 700;
    padding: 0 !important;
    svg {
      width: 13px;
      margin: 0px 10px 0px 0px;
      padding-bottom: 4px;
    }
  }

  .describe-doc {
    box-shadow: 0 4px 20px 1px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.08);
    padding: 15px;
    .row {
      border-bottom: 1px solid #f5f5f5;
      margin: 0px 30px 0px 30px;
    }
  }

  .second-desc {
    margin: 10px 0;
    text-align: right;
  }

  .file-download {
    color: green;
    &:hover {
      border-bottom: 1px dotted green;
      cursor: pointer;
    }
  }

  .attached-docs {
    box-shadow: 0 4px 20px 1px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.08);
    padding: 15px;
  }

  //org-table
  .org-tit {
    margin: 5px 0;
    font-weight: 600;
    text-align:right;
  }

  .org-name {
    color: gray;
    margin: 5px 0;
  }

  //title
  .detils-title {
    h5 {
      color: #34495e;
      border-bottom: 1px solid #dee2e6!important;
      padding: 10px 10px;
    }
  }

  //title of small block
  .in-block-title {
    font-weight: 600;
    color: #34495e;
    border-bottom: 1px solid #ececec;
    padding: 15px 5px 15px 30px;
  }

  .doc-iframe {
    padding-left: 30px;
  }

  .table-attached {
    padding: 15px 13px;
    thead {
      tr {
        th:first-child {
          width: 1px;
        }
      }
    }
  }
</style>
