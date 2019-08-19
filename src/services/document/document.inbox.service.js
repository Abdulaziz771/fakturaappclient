import axios from 'axios'
import { _ } from 'vue-underscore'
import BaseService from '../base.service'

class DocumentInbox extends BaseService {
  get modelName () {
    return 'DocumentInbox'
  }

  get (id) {
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
}

export default new DocumentInbox()
