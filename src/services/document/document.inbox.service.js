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

  getAll() {
    return axios.post('https://test.faktura.uz/ru/document/getdocuments', {
      Limit: 20,
      Skip: 0,
      Types: [1, 2, 25, 3, 4, 5, 6, 8, 14, 20, 22, 23, 26, 24],
      ContractorInn: null,
      UnitId: null,
      RegistryFileName: null,
      FileName: null,
      CreatedFrom: null,
      CreatedTo: null,
      Labels: null,
      SelectedAll: false,
      SelectedUids: [],
      ExcludedUids: [],
      IsSent: true,
      Statuses: [22, 32]
    }, {
        headers: {Cookie: "_ga=GA1.2.1306441348.1574858334; .ASPXAUTH=E2C83E16A90A809172EC645F587AB306A6702ACA5C1A0E32CDA7C3991A12F4FB0B579C87A1C0BAE78DE2C6771581EE388B510BA0E9921D109C2C1191648F0C0638A529C72BD919958C00430EC234C867080147CCC39684164D8815D878D50EEF301B93A1FF3F12547AC0D9C7CA92239456988FA073B5E3387E6C4C0EDD9765AD2819225693756515BA5C912DC649AB3D; _gid=GA1.2.902534062.1578902426; _gat=1"}
    }).then((response) => {
      debugger;
  })
  .catch(() => {
  });
}
}

export default new DocumentInbox()
