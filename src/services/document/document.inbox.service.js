import axios from 'axios'
import {_} from 'vue-underscore'
import BaseService from '../base.service'

class DocumentInbox extends BaseService {
  get modelName() {
    return 'DocumentInbox'
  }

  get(id) {
    return new Promise((resolve, reject) => {
      axios.get(this.getSingleUrl(id))
        .then(response => {
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  }
  getAllInboxDocuments() {
    return axios.get('/testData/ImportDocuments.json');
  }
  GetDocumentStatuses() {
    return axios.get('/testData/GetDocumentStatuses.json');
  }
}

export default new DocumentInbox()
