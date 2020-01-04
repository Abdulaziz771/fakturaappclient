<template>
  <div class="content no-title">
    <div class="content-body">
      <div class="table-body">
        <b-container>
          <b-tabs content-class="mt-3" justified class="create-new-document-tabs document-tabs">
            <b-tab title="Загрузить одного документа" class="newdoc-tab" active>
              <div class="d-flex justify-content-center">
                <div class="align-self-center text-center">
                  <div class="newdoc-file-upload-field-icon">
                    <img src="../../../assets/download.png" alt="doc">
                  </div>
                  <div>
                    <div class="input-file-text">
                      <label for="upload-file-tab-one">Загрузить с компьютера</label>
                      <input type="file" ref="fileTabOne" v-on:change="handleFileUpload()" name="photo"
                             id="upload-file-tab-one"/>
                    </div>
                    <span class="fs21"> или перетащите его сюда</span>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab class="newdoc-tab" title="Загрузить несколько документов">
              <div class="d-flex justify-content-center">
                <div class="align-self-center text-center">
                  <div class="newdoc-file-upload-field-icon">
                    <img src="../../../assets/file.png" alt="doc">
                  </div>
                  <div class="input-file-text">
                    <label for="upload-file-tab-two">Укажите архив файл</label>
                    <input type="file" name="photo" id="upload-file-tab-two"/>
                  </div>
                  <span class="fs21"> или перетащите его сюда</span>
                  <br>
                  <div class="pt-2 pr-4 pl-4"> Архив файл - архивированная zip папка, которая содержит документы,
                    названия которых заданы с префиксом ИНН контрагента. Например:
                    123456789_Договор №1330 от 30 мая 2015 года.docx или 123456789_код филиала_Договор №1330 от 30 мая
                    2015 года.docx
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab class="newdoc-tab" title="Импорт из реестра">
              <div class="d-flex justify-content-center">
                <div class="align-self-center text-center">
                  <div class="newdoc-file-upload-field-icon">
                    <img src="../../../assets/import.png" alt="doc">
                  </div>
                  <div class="input-file-text">
                    <label for="upload-file-tab-three">Выберите реестр</label>
                    <input type="file" name="photo" id="upload-file-tab-three"/>
                  </div>
                  <span class="fs21"> или перетащите его сюда</span>
                  <br>
                  <div class="pt-2 pr-4 pl-4"> Данный функционал позволяет импортировать несколько документов разом,
                    путем импортирования заготовленного Excel документа.
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-container>
        <b-modal no-close-on-backdrop ref="modalTabOne" title="BootstrapVue" hide-footer>
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Названия"
              label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
                placeholder="Введите названия"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Контрагент" label-for="input-2">
              <b-form-select
                id="input-2"
                v-model="form.contractor"
                :options="contractors"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-3" label="Комментарии" label-for="input-3">
              <b-form-textarea
                id="input-3"
                v-model="form.comment"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>
            <div class="d-flex flex-row-reverse">
              <b-button type="submit" size="sm" class="default-success-button">Отправить</b-button>
              <b-button type="reset" size="sm" class="lightgray-button mr-2">Отмена</b-button>
            </div>
          </b-form>
        </b-modal>
        <b-container class="create-newdoc-footer">
          <b-row>
            <b-col xl="3" lg="3" md="6">
              <div class="d-flex flex-row">
                <div class="p-2 action-icon-doc d-none d-md-block">
                  <img src="../../../assets/document.png" alt="doc">
                </div>
                <div class="p-2">
                  <div class="fs21 mb-3">Счет-фактура</div>
                  <div class="mb-2 action-icon" @click="$bvModal.show('type-of-layout')">Счет-фактура</div>
                  <div class="mb-2 action-icon">Акт и счет-фактура</div>
                  <div class="mb-2 action-icon">Счет на оплату</div>
                  <div class="mb-2 action-icon">Импорт счет-фактуры</div>
                </div>
              </div>
            </b-col>
            <b-col xl="3" lg="3" md="6">
              <div class="d-flex flex-row">
                <div class="p-2 action-icon-doc d-none d-md-block">
                  <img src="../../../assets/contract.png" alt="doc">
                </div>
                <div class="p-2">
                  <div class="fs21 mb-3"><a class="newdoc-footer-link">Доверенность</a></div>
                  <div class="action-describe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </div>
            </b-col>
            <b-col xl="3" lg="3" md="6">
              <div class="d-flex flex-row">
                <div class="p-2 action-icon-doc d-none d-md-block">
                  <img src="../../../assets/list.png" alt="doc">
                </div>
                <div class="p-2">
                  <div class="fs21 mb-3"><a class="newdoc-footer-link">Платежное поручение</a></div>
                  <div class="action-describe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </div>
            </b-col>
            <b-col xl="3" lg="3" md="6">
              <div class="d-flex flex-row">
                <div class="p-2 action-icon-doc d-none d-md-block">
                  <img  src="../../../assets/folder.png" alt="doc">
                </div>
                <div class="p-2">
                  <div class="fs21 mb-3"><a class="newdoc-footer-link">Публичный документ</a></div>
                  <div class="action-describe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-modal id="type-of-layout" hide-footer>
            <template slot="modal-title">Выберите тип шаблона</template>
            <div class="d-block">
              <div class="cursor-pointer">
                <router-link class="router-link-drop text-decoration-none" :to="{ name: 'document-create-system-invoice'}">
                  <h6 class="p-3 border rounded">Стандартная счет фактура</h6>
                </router-link>
              </div>
              <div class="cursor-pointer">
                <router-link class="router-link-drop text-decoration-none" :to="{ name: 'document-create-system-usd-invoice'}">
                  <h6 class="p-3 border rounded">Валютная счет фактура</h6>
                </router-link>
              </div>
              <div class="cursor-pointer">
                <router-link class="router-link-drop text-decoration-none" :to="{ name: 'document-create-system-vat-invoice'}">
                  <h6 class="p-3 border cursor-pointer rounded">Стандартная счет-фактура (новая форма)</h6>
                </router-link>
              </div>
              <div class="cursor-pointer">
                <router-link class="router-link-drop text-decoration-none" :to="{ name: 'document-create-system-tax-invoice'}">
                  <h6 class="p-3 border cursor-pointer rounded">Стандартная счет-фактура для плательщиков акциозного налога
                  (новая форма)</h6>
                </router-link>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <b-button size="sm" class="mt-3" variant="outline-secondary" @click="$bvModal.hide('type-of-layout')">Закрыть
              </b-button>
            </div>
          </b-modal>
          </b-container>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    FileIcon,
    FileTextIcon,
    FilePlusIcon
  } from 'vue-feather-icons'

  export default {
    name: 'create-document-view',
    components: {
      FileIcon,
      FileTextIcon,
      FilePlusIcon
    },
    data () {
      return {
        fileTabOne: null,
        form: {
          email: '',
          contractor: null,
          comment: ''
        },
        contractors: [{ text: 'Выберите', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      }
    },
    methods: {
      handleFileUpload () {
        this.fileTabOne = this.$refs.fileTabOne.files[0]
        this.$refs['modalTabOne'].show()
      }
    },
      created() {
          this.$store.commit('setWholeMenuInSidebar', true)
      }
  }
</script>
<style lang="scss">

  .create-newdoc-footer {
    & .row {
      padding-top: 110px;
    }

    & .d-flex svg {
      color: #66c93e;
      width: 70px;
      height: 70px;
    }

    & .newdoc-footer-link {
      color: #2d9c00 !important;
      cursor: pointer;
    }
  }

  .newdoc-file-upload-field-icon svg {
    width: 65px;
    height: 65px;
    color: #66c93e;
  }

  .modal-backdrop {
    width: 200vw !important;
    height: 200vh !important;
  }

</style>
<style lang="scss" scoped>
  .fs21 {
    font-size: 16px;
  }

  .input-file-text {
    display: inline-block;

    & label {
      cursor: pointer;
      font-size: 21px;
      color: #66c93e;
      font-weight: 500;
    }

    & input {
      opacity: 0;
      position: absolute;
      z-index: -1;
    }
  }

  .newdoc-tab .d-flex {
    border: 2px dashed #E6E6E6;
    padding: 80px 120px 100px 120px;
    height: 345px;
  }

  .newdoc-file-upload-field-icon {
    margin-bottom: 20px;
  }
</style>
