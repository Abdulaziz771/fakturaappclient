  <template>
  <div class="content title-page">
    <div class="content-body">
      <div class="content-header">
        <h5 class="text-center border-bottom-tool">Договор</h5>
      </div>
      <div class="table-body">
        <b-container fluid>
          <div class="tool-bar">
            <b-button size="sm" variant="outline-success">Подписать и отправить</b-button>
            <b-button size="sm" variant="outline-danger">Отказать и удалить</b-button>
            <b-dropdown size="sm" text="Согласование" variant="outline-secondary" class="m-2">
              <b-dropdown-item href="#">Отправить на согласование</b-dropdown-item>
              <b-dropdown-item href="#">Отправить на подписание</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="description">
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header v-b-toggle.accordion-0 header-tag="header" class="p-1" role="tab">
                  <p class="text-left ml-2">Описание</p>
                </b-card-header>
                <b-collapse  id="accordion-0" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-row class="desc-row">
                      <b-col md="6">
                        <b-row>
                          <b-col class="first-desc"  md="2">
                            <span >Отправитель:</span>
                          </b-col>
                          <b-col class="second-desc" md="10">
                            <span id="toggle-btn" @click="toggleModal" class="cursor-pointer">"TEXNO-SOFT" OOO</span>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col class="first-desc" md="2">
                            <span >Получатель:</span>
                          </b-col>
                          <b-col class="second-desc" md="10">
                            <span id="toggle-btn" @click="toggleModal" class="cursor-pointer">302563857 Corporation</span>
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col md="6">
                        <b-row>
                          <b-col class="first-desc" md="2">
                            <span >Статус:</span>
                          </b-col>
                          <b-col class="second-desc" md="10">
                            <span class="badge badge-danger">Требуется подпись</span>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col class="first-desc" md="2">
                            <span >Документ:</span>
                          </b-col>
                          <b-col class="second-desc" md="10">
                            <span class="file-download"> 2mya8ybzlrsj3jkgxone.pdf <b> (17 KB)</b></span>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
          <div class="attached-docs">
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header v-b-toggle.accordion-1 header-tag="header" class="p-1" role="tab">
                  <p class="text-left ml-2">Прикрепление</p>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <div class="upload-doc-attached text-center">
                      <label for="upload-file">
                        <div class="cursor-pointer">
                          <DownloadCloudIcon class="upload-icon"></DownloadCloudIcon>
                        </div>
                        <div class="cursor-pointer">
                          <span>Загрузить с компьютера или перетащите его сюда для отапавки контрагенту</span>
                        </div>
                      </label>
                      <input type="file" ref="fileTabOne" v-on:change="handleFileUpload()" name="photo" id="upload-file"/>
                    </div>
                    <b-table class="attached-table" hover :fields="fields" :items="files">                                                       >
                      <template slot="fileName" slot-scope="data">
                        <b>{{ data.item.fileName }}</b><br>
                        <small><ClockIcon class="clockIcon"></ClockIcon>Создан: {{ data.item.createdDateTime }}</small>
                      </template>
                      <template slot="type" slot-scope="data">
                        {{ data.item.type }}
                      </template>
                      <template style="width: 79px;" slot="action">
                        <img src="../../assets/garbage.png" class="cursor-pointer gabarage-icon">
                      </template>
                    </b-table>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
          <div class="document-history">
            <div role="tablist">
              <b-card no-body class="mb-3">
                <b-card-header v-b-toggle.accordion-2 header-tag="header" class="p-1" role="tab">
                  <p class="text-left ml-2">История</p>
                </b-card-header>
                <b-collapse  id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <ul class="timeline">
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
                      <li>
                        <a target="_blank" class="text-info">302563857 Corporation (ИНН: 302563857)</a>
                        <b class="pl-2 pr-2">Отправлен контрагенту</b>
                        <div class="mt-1 text-secondary">Сотрудник, Muser Mtest - <span
                          class="text-success">21/08/2019 19:24</span></div>
                      </li>
                    </ul>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
          <div class="document-content" style="height: 800px;">
            <embed src="https://test.faktura.uz/ru/document/getpreview/a780620ae7e74b39be6bd8a61d138eb3" style="padding: 0px 30px;" width="100%" height="100%"/>
          </div>
        </b-container>
      </div>
    </div>
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
    UsersIcon
  } from 'vue-feather-icons'

  export default {
    name: 'document-details-view',
    components: {
      XIcon,
      Edit2Icon,
      AwardIcon,
      DownloadCloudIcon,
      ClockIcon,
      UsersIcon
    },
    data() {
        return {
            fields: [
                { key: 'fileName', label: 'Наименование файла' },
                { key: 'type', label: 'Тип' },
                { key: 'action', label: 'Действие' },
            ],
            files: AttachedDocsData
        }
    },
    methods: {
        handleFileUpload () {
            this.fileTabOne = this.$refs.fileTabOne.files[0]
            this.$refs['modalTabOne'].show()
        },
        toggleModal() {
            // We pass the ID of the button that we want to return focus to
            // when the modal has hidden
            this.$refs['my-modal'].toggle('#toggle-btn')
        }
    }
  }
</script>
<style scoped lang="scss">
  .card {
    background: #f7f9fd;
    margin: 10px 30px;
    .card-header {
      cursor: pointer;
      background: #f7f9fd;
      border-bottom: none;
      p {
        color: #676666;
        font-weight: 700;
        font-size: 15px;
        margin: 0;
        padding: 7px 0;
      }
    }
    .upload-doc-attached {
      border: 2px dashed #cecccc;
      padding: 80px 120px 80px 120px;
      #upload-file {
        display: none;
      }
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
  }

  .document-content {
    width: 100%;
    border: 1px dashed #ccc;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
  }

  ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
  }

  ul.timeline > li {
    border: 1px solid #e4e5e7;
    margin: 15px 30px;
    padding: 10px;
  }

  ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #b0b2b4;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }

  //tool-buttons
  .tool-bar {
    margin: 10px 30px;
    button {
      margin-right: 5px;
    }
  }

  //description
  .first-desc {
    text-align: right;
    margin: 15px 0;
    font-weight: 700;
  }

  .second-desc {
    margin: 15px 0;
  }

  .file-download {
    color: green;
    &:hover {
      border-bottom: 1px dotted green;
      cursor: pointer;
    }
  }


</style>
